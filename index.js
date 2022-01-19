const fs = require('fs');

const returnedText = fs.readFileSync('./txt/file.txt', 'utf-8');
console.log(returnedText);

const textOut = `${returnedText} I am the boss.\nCreated on ${new Date()}`;
fs.writeFileSync('./txt/out.txt', textOut);
