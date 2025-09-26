const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertSvg() {
  // Convert favicon
  const faviconSvg = fs.readFileSync(path.join(__dirname, 'public', 'favicon.svg'));
  await sharp(faviconSvg)
    .resize(16, 16)
    .toFile(path.join(__dirname, 'public', 'favicon-16x16.png'));
  await sharp(faviconSvg)
    .resize(32, 32)
    .toFile(path.join(__dirname, 'public', 'favicon-32x32.png'));
  await sharp(faviconSvg)
    .resize(64, 64)
    .toFile(path.join(__dirname, 'public', 'favicon.png'));

  // Convert logo192
  const logo192Svg = fs.readFileSync(path.join(__dirname, 'public', 'logo192.svg'));
  await sharp(logo192Svg)
    .resize(192, 192)
    .toFile(path.join(__dirname, 'public', 'logo192.png'));

  // Convert logo512
  const logo512Svg = fs.readFileSync(path.join(__dirname, 'public', 'logo512.svg'));
  await sharp(logo512Svg)
    .resize(512, 512)
    .toFile(path.join(__dirname, 'public', 'logo512.png'));
}

convertSvg().catch(console.error);