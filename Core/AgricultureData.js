const express = require('express');
const got = require('got');
const cheerio = require('cheerio');

const AgricultureData = async(req, res) => {
    var $naturalgas;
    await got('https://markets.businessinsider.com/commodities/')
    .then(response => {
        $naturalgas = cheerio.load(response.body);
    })
    return res.json([{
        name:"Cotton",
        price:$naturalgas('.push-data')[80].children[0].data,
        ch:$naturalgas('.push-data')[81].children[0].data,
        chp:$naturalgas('.push-data')[82].children[0].data,
        time:$naturalgas('.push-data')[83].children[0].data,
    }, {
        name:"Oats",
        price:$naturalgas('.push-data')[84].children[0].data,
        ch:$naturalgas('.push-data')[85].children[0].data,
        chp:$naturalgas('.push-data')[86].children[0].data,
        time:$naturalgas('.push-data')[87].children[0].data,
    }, {
        name:"Lumber",
        price:$naturalgas('.push-data')[88].children[0].data,
        ch:$naturalgas('.push-data')[89].children[0].data,
        chp:$naturalgas('.push-data')[90].children[0].data,
        time:$naturalgas('.push-data')[91].children[0].data,
    }, {
        name:"Coffee",
        price:$naturalgas('.push-data')[92].children[0].data,
        ch:$naturalgas('.push-data')[93].children[0].data,
        chp:$naturalgas('.push-data')[94].children[0].data,
        time:$naturalgas('.push-data')[95].children[0].data,
    }, {
        name:"Cocoa",
        price:$naturalgas('.push-data')[96].children[0].data,
        ch:$naturalgas('.push-data')[97].children[0].data,
        chp:$naturalgas('.push-data')[98].children[0].data,
        time:$naturalgas('.push-data')[99].children[0].data,
    }, {
        name:"Live Cattle",
        price:$naturalgas('.push-data')[100].children[0].data,
        ch:$naturalgas('.push-data')[101].children[0].data,
        chp:$naturalgas('.push-data')[102].children[0].data,
        time:$naturalgas('.push-data')[103].children[0].data,
    }, {
        name:"Lean Hog",
        price:$naturalgas('.push-data')[104].children[0].data,
        ch:$naturalgas('.push-data')[105].children[0].data,
        chp:$naturalgas('.push-data')[106].children[0].data,
        time:$naturalgas('.push-data')[107].children[0].data,
    }, {
        name:"Corn",
        price:$naturalgas('.push-data')[108].children[0].data,
        ch:$naturalgas('.push-data')[109].children[0].data,
        chp:$naturalgas('.push-data')[110].children[0].data,
        time:$naturalgas('.push-data')[111].children[0].data,
    }, {
        name:"Feeder Cattle",
        price:$naturalgas('.push-data')[112].children[0].data,
        ch:$naturalgas('.push-data')[113].children[0].data,
        chp:$naturalgas('.push-data')[114].children[0].data,
        time:$naturalgas('.push-data')[115].children[0].data,
    }, {
        name:"Milk",
        price:$naturalgas('.push-data')[116].children[0].data,
        ch:$naturalgas('.push-data')[117].children[0].data,
        chp:$naturalgas('.push-data')[118].children[0].data,
        time:$naturalgas('.push-data')[119].children[0].data,
    },
    {
        name:"Orange Juice",
        price:$naturalgas('.push-data')[120].children[0].data,
        ch:$naturalgas('.push-data')[121].children[0].data,
        chp:$naturalgas('.push-data')[122].children[0].data,
        time:$naturalgas('.push-data')[123].children[0].data,
    },
    {
        name:"Sugar",
        price:$naturalgas('.push-data')[124].children[0].data,
        ch:$naturalgas('.push-data')[125].children[0].data,
        chp:$naturalgas('.push-data')[126].children[0].data,
        time:$naturalgas('.push-data')[127].children[0].data,
    }, {
        name:"Rice",
        price:$naturalgas('.push-data')[128].children[0].data,
        ch:$naturalgas('.push-data')[129].children[0].data,
        chp:$naturalgas('.push-data')[130].children[0].data,
        time:$naturalgas('.push-data')[131].children[0].data,
    }, {
        name:"Soybeans",
        price:$naturalgas('.push-data')[132].children[0].data,
        ch:$naturalgas('.push-data')[133].children[0].data,
        chp:$naturalgas('.push-data')[134].children[0].data,
        time:$naturalgas('.push-data')[135].children[0].data,
    }, {
        name:"Soybean Oil",
        price:$naturalgas('.push-data')[136].children[0].data,
        ch:$naturalgas('.push-data')[137].children[0].data,
        chp:$naturalgas('.push-data')[138].children[0].data,
        time:$naturalgas('.push-data')[139].children[0].data,
    },
])
}

module.exports = AgricultureData;