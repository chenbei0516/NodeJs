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
conn.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
});
conn.end();