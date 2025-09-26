const sharp = require('sharp');

async function convert() {
    try {
        await sharp('public/favicon.svg')
            .png()
            .resize(32, 32)
            .toFile('public/favicon-32x32.png');
            
        await sharp('public/logo192.svg')
            .png()
            .resize(192, 192)
            .toFile('public/logo192.png');
            
        await sharp('public/logo512.svg')
            .png()
            .resize(512, 512)
            .toFile('public/logo512.png');
            
        console.log('Conversion complete!');
    } catch (error) {
        console.error('Error converting files:', error);
    }
}

convert();