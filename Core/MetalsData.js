const express = require('express');
const got = require('got');
const cheerio = require('cheerio');

const MetalsData = async(req, res) => {
    var $naturalgas;
    await got('https://markets.businessinsider.com/commodities/')
    .then(response => {
        $naturalgas = cheerio.load(response.body);
    })
    return res.json([{
    name:"Gold",
    price:$naturalgas('.push-data')[0].children[0].data,
    ch:$naturalgas('.push-data')[1].children[0].data,
    chp:$naturalgas('.push-data')[2].children[0].data,
    time:$naturalgas('.push-data')[3].children[0].data,
    }, {
    name:"Palladium",
    price:$naturalgas('.push-data')[4].children[0].data,
    ch:$naturalgas('.push-data')[5].children[0].data,
    chp:$naturalgas('.push-data')[6].children[0].data,
    time:$naturalgas('.push-data')[7].children[0].data,
} ,{
    name:"Platinum",
    price:$naturalgas('.push-data')[8].children[0].data,
    ch:$naturalgas('.push-data')[9].children[0].data,
    chp:$naturalgas('.push-data')[10].children[0].data,
    time:$naturalgas('.push-data')[11].children[0].data,
}, {
    name:"Rhodium",
    price:$naturalgas('.push-data')[12].children[0].data,
    ch:$naturalgas('.push-data')[13].children[0].data,
    chp:$naturalgas('.push-data')[14].children[0].data,
    time:$naturalgas('.push-data')[15].children[0].data,
}, {
    name:"Silver",
    price:$naturalgas('.push-data')[16].children[0].data,
    ch:$naturalgas('.push-data')[17].children[0].data,
    chp:$naturalgas('.push-data')[18].children[0].data,
    time:$naturalgas('.push-data')[19].children[0].data,
}, {
    name:"Aluminum",
    price:$naturalgas('.push-data')[52].children[0].data,
    ch:$naturalgas('.push-data')[53].children[0].data,
    chp:$naturalgas('.push-data')[54].children[0].data,
    time:$naturalgas('.push-data')[55].children[0].data,
}, {
    name:"Aluminum",
    price:$naturalgas('.push-data')[56].children[0].data,
    ch:$naturalgas('.push-data')[57].children[0].data,
    chp:$naturalgas('.push-data')[58].children[0].data,
    time:$naturalgas('.push-data')[59].children[0].data,
}, {
    name:"Iron Ore",
    price:$naturalgas('.push-data')[60].children[0].data,
    ch:$naturalgas('.push-data')[61].children[0].data,
    chp:$naturalgas('.push-data')[62].children[0].data,
    time:$naturalgas('.push-data')[63].children[0].data,
}, {
    name:"Copper",
    price:$naturalgas('.push-data')[64].children[0].data,
    ch:$naturalgas('.push-data')[65].children[0].data,
    chp:$naturalgas('.push-data')[66].children[0].data,
    time:$naturalgas('.push-data')[67].children[0].data,
}, {
    name:"Nickel",
    price:$naturalgas('.push-data')[68].children[0].data,
    ch:$naturalgas('.push-data')[69].children[0].data,
    chp:$naturalgas('.push-data')[70].children[0].data,
    time:$naturalgas('.push-data')[71].children[0].data,
}, {
    name:"Zinc",
    price:$naturalgas('.push-data')[72].children[0].data,
    ch:$naturalgas('.push-data')[73].children[0].data,
    chp:$naturalgas('.push-data')[74].children[0].data,
    time:$naturalgas('.push-data')[75].children[0].data,
}, {
    name:"Tin",
    price:$naturalgas('.push-data')[76].children[0].data,
    ch:$naturalgas('.push-data')[77].children[0].data,
    chp:$naturalgas('.push-data')[78].children[0].data,
    time:$naturalgas('.push-data')[79].children[0].data,
}
])
}

module.exports = MetalsData;