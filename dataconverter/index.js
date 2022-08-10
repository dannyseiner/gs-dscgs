const data = require("./data/page1.json");
const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gs-vinylstock"
});

const converts = {
    "EUR": 1.0212,
    "GBP": 1.2112
}



con.connect(function (err) {
    if (err) throw err;
    let sql, price
    for (s of data) {
        if (!s.price.includes("$", 0) || /[a-zA-Z]/.test(s.price)) {
            if (s.price.includes("€")) {
                price = Math.floor(s.price.replace("€", '').replaceAll(',', '')) * converts.EUR

            }
            if (s.price.includes('£')) {
                price = Math.floor(s.price.replace("£", '').replaceAll(',', '')) * converts.GBP
            }

            price = Math.floor(price)
            console.log(`${s.price} -> ${price}`)
        } else {
            // console.log(Math.floor(s.price.replace("$", '').replaceAll(',', '')))
        }


        // con.query(`INSERT INTO releases_home (release_id, release_marketplace_id,title,price,label,cat) VALUES (${s.id_release}, ${s.id_marketplace}, "${s.title}", "${s.price}", "${s.label}", "${s.cat}")`, function (err, result) {
        //     if (err) throw err;
        //     console.log(`{ NEW => PRICE ${s.price} ON ${s.id_marketplace}}`);
        // });




        // con.query(`SELECT * FROM releases_home WHERE release_marketplace_id = ${s.id_marketplace}`, (err, result) => {
        //     // CHECK IF ITS IN DB
        //     if (result.length == 0) {

        //         // CREATE NEW RELEASE


        //         con.query(`INSERT INTO releases_home (release_id, release_marketplace_id,title,price,label,cat) VALUES (${s.id_release}, ${s.id_marketplace}, "${s.title}", "${s.price}", "${s.label}", "${s.cat}")`, function (err, result) {
        //         if (err) throw err;
        //         console.log(`{ NEW => PRICE ${s.price} ON ${s.id_marketplace}}`);
        //         });
        //     } else {
        //         // EDIT RELEASE RECORD


        //         // con.query(`UPDATE releases_home SET price='${s.price}' WHERE release_marketplace_id = ${s.id_marketplace}`, (err) => {
        //         // if (err) throw err
        //         console.log(`{ EDIT => PRICE ${s.price} ON ${s.id_marketplace}}`)
        //         // })
        //     }
        // })
    }
    console.log(`{ PROCES } -> STATUS: DONE -> ERRORS: 0`)
});




const getMarketPlaceData = () => {
    const data = $("div.shortcut_navigable")
    const json_data = []
    let price, id, id_release, title, label, cat
    for (s of data) {
        id = s.children[0]
        id = $(id).attr('href').replace('/sell/item/', '').replace('?ev=bp_img', '')

        price = s.children[2].children[0].innerText
        id_release = s.dataset.releaseId.replace('\n', '').trim()
        title = s.children[3].outerText
        label = s.children[5].innerText
        cat = s.children[5].innerText
        if (label == "Unavailable in Czech Republic") {
            label = s.children[6].innerText.replace('Label:', '').split('\n')[0].trim()
            cat = s.children[6].innerText.replace('Cat#:', '').split('\n')[1].trim()
        } else {
            label = s.children[5].innerText.replace('Label:', '').split('\n')[0].trim()
            cat = s.children[5].innerText.replace('Cat#:', '').split('\n')[1].trim()
        }
        json_data.push({
            id_marketplace: id,
            id_release: id_release,
            price: price,
            title: title,
            label: label,
            cat: cat
            // cat: cat1
        })

    }
    console.log(json_data)
}




