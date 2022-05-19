// const path = require('path')
// const filePath = path.join('\\folder','anotheerfolder','text.txt')
// console.log(filePath)
// const base = path.basename(filePath)
// const ext = base
// console.log(ext);
const {readFileSync,writeFileSync} = require('fs')
const firstFile = readFileSync("folder/anotherfolder/text.txt",'utf-8')
writeFileSync(`folder/second.txt`,"Written this right here","utf-8")
console.log( readFileSync('folder/second.txt','utf-8') );
console.log(firstFile);