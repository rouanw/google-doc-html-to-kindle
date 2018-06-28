const fs = require('fs');
const { title, author, inputFilePath, outputFileName } = require('./config.json');

const removeRegex = /font-family:"[a-zA-Z ]*";|font-family:"[a-zA-Z ]*"|font-size:[\d]*pt;|font-family:"Arial";|font-family:"Arial"/gi;

const outputDirectory = './out';
if (!fs.existsSync(outputDirectory)){
  fs.mkdirSync(outputDirectory);
}

const fileContents = fs.readFileSync(inputFilePath, 'utf8');
const transformedHtml = fileContents
  .replace(removeRegex, '')
  .replace('<style type="text/css">', '<style type="text/css">body{font-family: \'Times New Roman\', Times, serif}')
  .replace('<head>', `<head><title>${title}</title><meta name="author" content="${author}">`);
fs.writeFileSync(`${outputDirectory}/${outputFileName}`, transformedHtml, 'utf8');
