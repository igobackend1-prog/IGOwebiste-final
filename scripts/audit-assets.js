import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPRESSED_DIR = path.join(__dirname, '../public/assets/compressed');
const MAPPING_FILE = path.join(__dirname, 'asset-map.json');

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(fullPath));
        } else {
            results.push(fullPath);
        }
    });
    return results;
}

console.log('Scanning compressed assets at:', COMPRESSED_DIR);
const compressedFiles = walk(COMPRESSED_DIR);
const assetMap = {};

compressedFiles.forEach(cf => {
    const relativePath = path.relative(COMPRESSED_DIR, cf).replace(/\\/g, '/');
    const ext = path.extname(cf);
    const basename = path.basename(cf, ext);
    
    // We store the mapping based on the basename (without extension)
    // to find the correct optimized version even if extension changed.
    const cleanBasename = basename.trim();
    const dir = path.dirname(relativePath);
    
    // Key format: "path/to/basename"
    const mapKey = (dir === '.' ? '' : dir + '/') + cleanBasename;
    
    // Prioritize webp if multiple exist, then jpg/jpeg, then png
    const currentEntry = assetMap[mapKey];
    const isNewBetter = !currentEntry || 
                     (ext === '.webp') || 
                     (ext === '.jpg' && path.extname(currentEntry) === '.png') ||
                     (ext === '.jpeg' && path.extname(currentEntry) === '.png');

    if (isNewBetter) {
        assetMap[mapKey] = '/assets/compressed/' + relativePath;
    }
});

console.log(`Found ${Object.keys(assetMap).length} unique asset basenames.`);
fs.writeFileSync(MAPPING_FILE, JSON.stringify(assetMap, null, 2));
console.log(`Asset map saved to ${MAPPING_FILE}`);
