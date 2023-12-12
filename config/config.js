require('dotenv').config()
var mysql = require('mysql');

var con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectTimeout: 10000,
    port: 59942
});

console.log(con);

con.connect(function (err) {
    if (err) throw err.message;
    let queryDb = `CREATE DATABASE IF NOT EXISTS db_restaurant`
    con.query(queryDb, function(err, result, fields) {
        if (err) console.log(2);
    });
    let queryTbMenu = `CREATE TABLE IF NOT EXISTS ${'`railway`'}.tb_menu (
        id int NOT NULL AUTO_INCREMENT,
        nama varchar(255) NOT NULL,
        harga int NOT NULL,
        kategori enum ('makanan ringan', 'makanan berat', 'minuman') NOT NULL,
        stok int NOT NULL,
        deskripsi text NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP,
        deleted_at TIMESTAMP,
        PRIMARY KEY(id)
    )`
    con.query(queryTbMenu, function(err, result, fields) {
        if (err) console.log(3);
    });
    console.log("Database connected!");
})

module.exports = con;