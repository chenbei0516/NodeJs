var mysql = require('mysql');
var conn;
function handleError(){
    conn = mysql.createConnection({
        host:'localhost',
        user:'nodejs',
        password:'nodejs',
        database:'nodejs',
        port:3306
    });

    conn.connect(function(err){
        if(err){
            console.log('error when connecting to db:',err);
            setTimeout(handleError,2000);
        }
    });

    conn.on('error',function(err){
        console.log('db error',err);
        if(err.code==='PROTOCOL_CONNECTION_LOST'){
            handleError();
        }else{
            throw err;
        }
    });
}

handleError();