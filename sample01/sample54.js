/**
 * Created by 37du on 2016/1/5.
 */

'use strict';


var mysql = require('mysql');
var conn = mysql.createConnection({
    host: '222.197.165.26',
    user: 'nengji',
    password: 'cdNengJi',
    database:'nengji',
    port: 3306,
    insecureAuth: true
});
conn.connect();

var selectSQL = 'SELECT * FROM T_ABOUT_US WHERE F_CLASS_NAME="公司简介"';

conn.query(selectSQL,function(err,rows){
    if(err) console.log(err);
    for(var i in rows){
        console.log(rows[i]);
    }
});

conn.end();