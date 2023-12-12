var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'roundhouse.proxy.rlwy.net',
    user: 'root',
    password: 'GcheG-C2C2Ag2EbGC33623ebb6HFBef2',
    database: "railway",
    connectTimeout: 20000
});

con.connect(function (err) {
    if (err) console.log(err);;
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