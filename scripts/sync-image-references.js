import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MAPPING_FILE = path.join(__dirname, 'asset-map.json');
const SRC_DIR = path.join(__dirname, '../src');

if (!fs.existsSync(MAPPING_FILE)) {
    console.error('Asset map not found! Run audit-assets.js first.');
    process.exit(1);
}

const assetMap = JSON.parse(fs.readFileSync(MAPPING_FILE, 'utf8'));

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(fullPath));
        } else if (file.match(/\.(tsx|ts|jsx|js|css|html)$/)) {
            results.push(fullPath);
        }
    });
    return results;
}

const files = walk(SRC_DIR);
let totalFixes = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // Pattern to find common image paths like /assets/something/image.png
    // We look for anything that starts with /assets/
    content = content.replace(/(['"])(\/assets\/[^'"]+?)(['"])/g, (match, quote1, fullPath, quote3) => {
        // Extract the part after /assets/
        const pathAfterAssets = fullPath.replace('/assets/', '');
        const ext = path.extname(pathAfterAssets);
        const basename = path.basename(pathAfterAssets, ext);
        const dir = path.dirname(pathAfterAssets);
        
        // Clean up common issues like "original/" or "compressed/" if they are already there
        const cleanDir = dir.replace(/^originals\/?/, '').replace(/^compressed\/?/, '');
        const cleanBasename = basename.trim();
        const mapKey = (cleanDir === '.' || cleanDir === '' ? '' : cleanDir + '/') + cleanBasename;
        
        const mappedPath = assetMap[mapKey];
        
        if (mappedPath && mappedPath !== fullPath) {
            console.log(`[${path.relative(SRC_DIR, file)}] Fix: ${fullPath} -> ${mappedPath}`);
            changed = true;
            totalFixes++;
            return `${quote1}${mappedPath}${quote3}`;
        }
        
        return match;
    });

    if (changed) {
        fs.writeFileSync(file, content);
    }
});

console.log(`\nDONE: Fixed ${totalFixes} image references across the SRC directory.`);
