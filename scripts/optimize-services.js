import sharp from 'sharp';
import { readdir, stat, writeFile, readFile } from 'fs/promises';
import { join } from 'path';

const TARGET_DIR = './public/assets/service/service image new';
const MAX_DIMENSION = 1600;
const QUALITY = 80;

async function optimizeFolder() {
  console.log(`Optimizing images in: ${TARGET_DIR}`);
  
  try {
    const files = await readdir(TARGET_DIR);
    const imageFiles = files.filter(f => f.toLowerCase().endsWith('.png') || f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg'));

    console.log(`Found ${imageFiles.length} images to process.\n`);

    let totalSaved = 0;

    for (const file of imageFiles) {
      const filePath = join(TARGET_DIR, file);
      const stats = await stat(filePath);
      const sizeBefore = stats.size;

      const inputBuffer = await readFile(filePath);
      
      // 1. Generate WebP
      const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      const webpBuffer = await sharp(inputBuffer)
        .resize(MAX_DIMENSION, MAX_DIMENSION, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toBuffer();
      
      await writeFile(webpPath, webpBuffer);

      // 2. Optimize original PNG/JPG as fallback
      const optimizedBuffer = await sharp(inputBuffer)
        .resize(MAX_DIMENSION, MAX_DIMENSION, { fit: 'inside', withoutEnlargement: true })
        .png({ quality: QUALITY, compressionLevel: 9 })
        .toBuffer();
      
      await writeFile(filePath, optimizedBuffer);
      
      const saved = sizeBefore - webpBuffer.length;
      totalSaved += saved;
      
      console.log(`✓ Processed: ${file}`);
      console.log(`  Before: ${(sizeBefore / 1024 / 1024).toFixed(2)} MB`);
      console.log(`  After (WebP): ${(webpBuffer.length / 1024 / 1024).toFixed(2)} MB`);
      console.log(`  Reduction: ${((saved / sizeBefore) * 100).toFixed(1)}%\n`);
    }

    console.log(`Finished optimization.`);
    console.log(`Total space saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);

  } catch (err) {
    console.error('Error during optimization:', err);
  }
}

optimizeFolder();
