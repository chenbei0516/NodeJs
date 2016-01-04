function printHello(){
    console.log( "Hello, World!");
}
// 两秒后执行以上函数
var t = setTimeout(printHello, 2000);

clearTimeout(t);


setInterval(printHello, 2000);