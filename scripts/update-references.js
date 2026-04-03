import fs from 'fs/promises';
import path from 'path';

const TARGET_DIRS = ['src', 'public'];

async function getFiles(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(entries.map((res) => {
        const resPath = path.join(dir, res.name);
        if (res.isDirectory()) {
            if (res.name === 'node_modules' || res.name === '.git' || res.name === 'originals' || res.name === 'dist') return [];
            return getFiles(resPath);
        }
        return resPath;
    }));
    return files.flat();
}

async function run() {
    console.log('🔄 Syncing Asset References (Improved)...');
    let totalUpdated = 0;

    for (const dir of TARGET_DIRS) {
        if (!(await fs.stat(dir).catch(() => false))) continue;
        const files = await getFiles(dir);

        for (const file of files) {
            const fileExt = path.extname(file).toLowerCase();
            if (!['.tsx', '.ts', '.css', '.html', '.js', '.mjs', '.sql'].includes(fileExt)) continue;

            let content = await fs.readFile(file, 'utf-8');
            let updated = false;

            // Updated regex to allow spaces in filenames
            const regex = /((?:"|'|`| |\())([^"'`()]*?assets\/)(?!(?:compressed|originals)\/)([^"'`()]+?\.(?:png|jpg|jpeg|webp|svg))((?:"|'|`| |\)))/gi;

            let matches = [...content.matchAll(regex)];
            // Reverse so index replacements don't break subsequent ones
            matches.sort((a, b) => b.index - a.index);

            for (const match of matches) {
                const [fullMatch, start, prefix, fileName, end] = match;
                
                const replacement = `${start}${prefix}compressed/${fileName}${end}`;
                
                content = content.slice(0, match.index) + replacement + content.slice(match.index + fullMatch.length);
                updated = true;
                totalUpdated++;
            }

            if (updated) {
                await fs.writeFile(file, content);
                console.log(`📝 Updated: ${file}`);
            }
        }
    }

    console.log(`\n🎉 Done! Total references updated: ${totalUpdated}`);
}

run().catch(console.error);
