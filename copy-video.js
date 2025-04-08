const fs = require('fs');
const path = require('path');

// Source video paths - try different possible locations
const possibleSourcePaths = [
  path.join(__dirname, 'herovideo.mp4'),
  path.join(__dirname, '..', 'herovideo.mp4'),
  path.join(__dirname, 'src', 'images', 'herovideo.mp4'),
  path.join(__dirname, '..', 'src', 'images', 'herovideo.mp4')
];

// Destination path in the public folder
const destVideoPath = path.join(__dirname, 'public', 'hero-video.mp4');

// Try to find the video file
let sourceVideoPath = null;
for (const path of possibleSourcePaths) {
  if (fs.existsSync(path)) {
    sourceVideoPath = path;
    break;
  }
}

// If source file is found, copy it
if (sourceVideoPath) {
  // Copy the file
  fs.copyFileSync(sourceVideoPath, destVideoPath);
  console.log(`Video file copied successfully from ${sourceVideoPath} to ${destVideoPath}`);
} else {
  console.log('Source video file not found in any of the expected locations.');
  console.log('Please place your hero-video.mp4 file in one of these locations:');
  possibleSourcePaths.forEach(p => console.log(`- ${p}`));
  console.log('\nOr manually copy the video file to:');
  console.log(destVideoPath);
} 