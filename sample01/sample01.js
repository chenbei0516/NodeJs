/**
 * Created by 37du on 2015/11/12.
 */

//不使用回调函数，阻塞型，实现同步请求，串行处理//
/*
var fs=require("fs");
var data= fs.readFileSync('input.txt');
console.log(data.toString());
console.log("ending!");
*/
//使用回调函数，非阻塞型，实现异步请求，并发处理//

var fs=require('fs');
fs.readFile('input1.txt',function(err,data){
    if(err)
    {
        return console.error(err);
    }
    console.log(data.toString());
});

console.log('程序ending!');
