const CC = require('currency-converter-lt')
let currencyConverter = new CC()
const json = require("./data/page1.json")
const fs = require('fs');

init()

async function init() {
    let conv = { from: "", amount: 0 }, new_price
    for (s of json) {
        console.log(s.price)
        if (s.price.includes("$")) {
            if (s.price.includes("CA")) {
                conv = { from: "CAD", amount: Math.floor(s.price.replaceAll(',', '').replace("CA", '').replace("$", "")) }
                await currencyConverter.from(conv.from).to("USD").amount(conv.amount).convert().then((response) => {
                    console.log(response) //or do something else
                    s.converter_price = response
                })
            } else if (s.price.includes("A")) {
                conv = { from: "AUD", amount: Math.floor(s.price.replaceAll(',', '').replace("A", '').replace("$", "")) }
                await currencyConverter.from(conv.from).to("USD").amount(conv.amount).convert().then((response) => {
                    console.log(response) //or do something else
                    s.converter_price = response
                })
            } else if (s.price.includes("R")) {
                conv = { from: "ZAR", amount: Math.floor(s.price.replaceAll(',', '').replace("R", '').replace("$", "")) }
                await currencyConverter.from(conv.from).to("USD").amount(conv.amount).convert().then((response) => {
                    console.log(response) //or do something else
                    s.converter_price = response
                })
            }
            else {
                console.log(Math.floor(s.price.replaceAll(',', '').replace("CA", '').replace("$", "")))
                s.converter_price = Math.floor(s.price.replaceAll(',', '').replace("CA", '').replace("$", ""))
            }
        } else if (s.price.includes("£")) {
            conv = { from: "GBP", amount: Math.floor(s.price.replaceAll(',', '').replace("£", '')) }
            await currencyConverter.from(conv.from).to("USD").amount(conv.amount).convert().then((response) => {
                console.log(response) //or do something else
                s.converter_price = response
            })
        } else if (s.price.includes("€")) {
            conv = { from: "EUR", amount: Math.floor(s.price.replaceAll(',', '').replace("€", '')) }
            await currencyConverter.from(conv.from).to("USD").amount(conv.amount).convert().then((response) => {
                console.log(response) //or do something else
                s.converter_price = response
            })
        } else if (s.price.includes("CHF")) {
            conv = { from: "CHF", amount: Math.floor(s.price.replaceAll(',', '').replace("CHF", '')) }
            await currencyConverter.from(conv.from).to("USD").amount(conv.amount).convert().then((response) => {
                console.log(response) //or do something else
                s.converter_price = response
            })
        } else if (s.price.includes("SEK")) {
            conv = { from: "SEK", amount: Math.floor(s.price.replaceAll(',', '').replace("SEK", '')) }
            await currencyConverter.from(conv.from).to("USD").amount(conv.amount).convert().then((response) => {
                console.log(response) //or do something else
                s.converter_price = response
            })
        }

        await sleep(700);


    }
    console.log(json)
    fs.writeFile('./data/data.json', json, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
