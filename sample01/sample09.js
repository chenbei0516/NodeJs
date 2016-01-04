/*
var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log("文件压缩完成。");
*/

var fs = require("fs");
var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
var output = fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip());
    //.pipe(fs.createWriteStream('input1.txt'));

console
console.log("文件解压完成。");