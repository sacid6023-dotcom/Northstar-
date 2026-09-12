import fs from 'fs';
import { PNG } from 'pngjs';

const inputPath = 'src/assets/logo.png';
const outputPath = 'src/assets/logo_transparent.png';

fs.createReadStream(inputPath)
  .pipe(new PNG({ filterType: 4 }))
  .on('parsed', function() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const idx = (this.width * y + x) << 2;
        const r = this.data[idx];
        const g = this.data[idx + 1];
        const b = this.data[idx + 2];
        const a = this.data[idx + 3];

        const minVal = Math.min(r, g, b);
        const maxVal = Math.max(r, g, b);

        // Remove white / light grey background
        if (r > 210 && g > 210 && b > 210 && (maxVal - minVal) < 35) {
          const avg = (r + g + b) / 3;
          if (avg > 235) {
            this.data[idx + 3] = 0; // Transparent
          } else {
            const alphaFactor = (235 - avg) / 25;
            this.data[idx + 3] = Math.round(a * Math.max(0, Math.min(1, alphaFactor)));
          }
        }
      }
    }

    this.pack().pipe(fs.createWriteStream(outputPath)).on('finish', () => {
      console.log('Transparent logo generated successfully at:', outputPath);
    });
  });
