var mysql = require('mysql');
var pool = mysql.createPool({
    host:'localhost',
    user:'nodejs',
    password:'nodejs',
    database:'nodejs',
    port:3306
});

var selectSQL = 'SELECT * FROM t_user limit 10';

pool.getConnection(function(err,conn){
    if(err) console.log("POOL==>"+err);
    conn.query(selectSQL, function (err,rows){
        if(err) console.log(err);

        console.log("SELECT ==> ");
        for(var i in rows){
            console.log(rows[i]);
        }
    });

});