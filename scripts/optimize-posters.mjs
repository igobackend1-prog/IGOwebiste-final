import sharp from 'sharp';
import { writeFile } from 'fs/promises';
import { join } from 'path';

const SOURCE_DIR = './public/assets/demo-poster/updated posters';
const TARGET_DIR = './public/assets/compressed/demo-poster';
const MAX_WIDTH = 1920;
const QUALITY = 82;

const posters = [
  { source: 'updated poster .jpeg', target: 'updated-poster-1.webp' },
  { source: 'updated poster  (2).jpeg', target: 'updated-poster-2.webp' }
];

async function optimizePosters() {
  console.log('--- Optimizing Hero Posters ---');
  
  for (const poster of posters) {
    try {
      const sourcePath = join(SOURCE_DIR, poster.source);
      const targetPath = join(TARGET_DIR, poster.target);
      
      console.log(`Processing: ${poster.source}...`);
      
      await sharp(sourcePath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(targetPath);
        
      console.log(`✓ Saved to: ${poster.target}\n`);
    } catch (err) {
      console.error(`✗ Error processing ${poster.source}:`, err.message);
    }
  }
  
  console.log('--- Done ---');
}

optimizePosters();
