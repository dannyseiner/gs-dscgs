const data = require("./data/data_converted.json");
const mysql = require('mysql');
const { connect } = require("puppeteer");

var con = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "",
    database: "gs-vinylstock",
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock', // MACOS ONLY
});


con.connect(async function (err) {
    if (err) throw err;
    let sql, price
    console.log("DATABASE STATUS:", `\x1b[36m${"CONNECTED"}\x1b[0m`)
    for (s of data) {

        // CEHCK IF RELEASE ALREADY EXISTS
        await con.query(`SELECT * FROM releases_home WHERE release_marketplace_id = ${s.id_marketplace}`, (err, checkResult) => {
            if (err) throw err
            if (checkResult.length === 0) {
                // INSERT NEW RELEAE
                con.query(`INSERT INTO releases_home (release_id, release_marketplace_id,title,price,price_usd,label, image) VALUES (${s.id_release}, ${s.id_marketplace}, "${s.title}", "${s.price}",${s.converter_price}, "${s.label}", "${s.image}")`, function (err, result) {
                    if (err) throw err;
                    console.log(`{ NEW => PRICE ${s.price} ON`, `\x1b[36mID#${s.id_marketplace}\x1b[0m`, "}");
                });
            } else {
                // UPDATE PRICE RELEASE
                con.query(`UPDATE releases_home SET price = '${s.price}', price_usd = ${s.converter_price} WHERE release_marketplace_id = ${s.id_marketplace}`, (err) => {
                    if (err) throw err;
                    console.log(`{ UPDATE => PRICE ${checkResult[0].price_usd}  => ${s.converter_price} ON`, `\x1b[36mID#${s.id_marketplace}\x1b[0m`, "}");
                })
            }
        })
        await sleep(200)
    }
    console.log("------------------------")
    console.log("STATUS:", `\x1b[36m${"DONE"}\x1b[0m`)
    console.log("------------------------")
});


function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}