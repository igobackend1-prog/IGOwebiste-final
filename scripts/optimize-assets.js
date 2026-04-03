import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const TARGET_DIRS = ['public/assets', 'src/assets'];
const COMPRESSED_DIR_NAME = 'compressed';
const JPEG_QUALITY = 75;
const WEBP_QUALITY = 75;

async function getFiles(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(entries.map((res) => {
        const resPath = path.join(dir, res.name);
        if (res.isDirectory()) {
            if (res.name === COMPRESSED_DIR_NAME || res.name === 'originals') return [];
            return getFiles(resPath);
        }
        return resPath;
    }));
    return files.flat();
}

async function run() {
    console.log('🚀 Starting Image Optimization...\n');
    const stats_data = [];

    for (const baseDir of TARGET_DIRS) {
        if (!(await fs.stat(baseDir).catch(() => false))) continue;
        
        console.log(`--- Processing: ${baseDir} ---`);
        const files = await getFiles(baseDir);
        
        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            if (!['.jpg', '.jpeg', '.png', '.webp', '.svg'].includes(ext)) continue;

            const relPath = path.relative(baseDir, file);
            const fileName = path.basename(file);
            const parentDir = path.dirname(relPath);
            
            // Destination: baseDir/compressed/parentDir/fileName
            const targetDir = path.join(baseDir, COMPRESSED_DIR_NAME, parentDir);
            await fs.mkdir(targetDir, { recursive: true });
            const targetPath = path.join(targetDir, fileName);

            const fileStats = await fs.stat(file);
            const sizeBefore = fileStats.size;

            try {
                if (ext === '.svg') {
                    // Simple minification for SVGs
                    let content = await fs.readFile(file, 'utf-8');
                    content = content.replace(/>\s+</g, '><').trim();
                    await fs.writeFile(targetPath, content);
                    stats_data.push({ name: relPath, before: sizeBefore, after: sizeBefore, reduction: 0 });
                    continue;
                }

                let pipeline = sharp(file);
                const metadata = await pipeline.metadata();

                if (ext === '.jpg' || ext === '.jpeg') {
                    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, progressive: true });
                } else if (ext === '.png') {
                    if (!metadata.hasAlpha) {
                        // User instruction says convert to JPEG if transparency not required
                        const jpegPath = targetPath.replace(/\.png$/i, '.jpg');
                        await pipeline.jpeg({ quality: JPEG_QUALITY }).toFile(jpegPath);
                        const sizeAfter = (await fs.stat(jpegPath)).size;
                        stats_data.push({ name: relPath + ' -> .jpg', before: sizeBefore, after: sizeAfter });
                        continue;
                    } else {
                        pipeline = pipeline.png({ compressionLevel: 9, palette: true });
                    }
                } else if (ext === '.webp') {
                    pipeline = pipeline.webp({ quality: WEBP_QUALITY });
                }

                await pipeline.toFile(targetPath);
                
                // Also create WebP version for non-webp as per standard practice (Step 2)
                if (ext !== '.webp') {
                    const webpPath = targetPath.replace(/\.[a-zA-Z0-9]+$/, '.webp');
                    await sharp(file).webp({ quality: WEBP_QUALITY }).toFile(webpPath);
                }

                const sizeAfter = (await fs.stat(targetPath)).size;
                stats_data.push({ name: relPath, before: sizeBefore, after: sizeAfter });
                console.log(`✅ Optimized: ${relPath}`);
            } catch (err) {
                console.error(`❌ Error ${relPath}: ${err.message}`);
            }
        }
    }

    // Final Report
    console.log('\n--- 📊 Final Compression Report ---');
    console.log('| File Name | Original Size | Compressed Size | % Reduction |');
    console.log('|---|---|---|---|');
    
    let totalB = 0;
    let totalA = 0;
    stats_data.forEach(s => {
        const red = (((s.before - s.after) / s.before) * 100).toFixed(1);
        console.log(`| ${s.name} | ${(s.before / 1024).toFixed(1)} KB | ${(s.after / 1024).toFixed(1)} KB | ${red}% |`);
        totalB += s.before;
        totalA += s.after;
    });

    const totalRed = (((totalB - totalA) / totalB) * 100).toFixed(1);
    console.log(`\n**Total Reduction: ${totalRed}%**`);
    console.log(`**Space Saved: ${((totalB - totalA) / 1024 / 1024).toFixed(2)} MB**`);
}

run().catch(console.error);
