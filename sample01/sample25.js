var fs = require("fs");

console.log("准备删除目录 /tmp/test");
fs.rmdir("./test",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("读取 /tmp 目录");
    fs.readdir("./",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file){
            console.log( file );
        });
    });
});