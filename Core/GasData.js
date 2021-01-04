const express = require('express');
const got = require('got');
const cheerio = require('cheerio');

const GasData = async(req, res) => {
    var $naturalgas;
    await got('https://markets.businessinsider.com/commodities/')
    .then(response => {
        $naturalgas = cheerio.load(response.body);
    })
    return res.json([{
        name:"Natural Gas",
        price:$naturalgas('.push-data')[20].children[0].data,
        ch:$naturalgas('.push-data')[21].children[0].data,
        chp:$naturalgas('.push-data')[22].children[0].data,
        data:$naturalgas('.push-data')[23].children[0].data,
    }, {
        name:"Ethanol",
        price:$naturalgas('.push-data')[24].children[0].data,
        ch:$naturalgas('.push-data')[25].children[0].data,
        chp:$naturalgas('.push-data')[26].children[0].data,
        data:$naturalgas('.push-data')[27].children[0].data,
    }, {
        name:"Heating Oil",
        price:$naturalgas('.push-data')[28].children[0].data,
        ch:$naturalgas('.push-data')[29].children[0].data,
        chp:$naturalgas('.push-data')[30].children[0].data,
        data:$naturalgas('.push-data')[31].children[0].data,
    }, {
        name:"Coal",
        price:$naturalgas('.push-data')[32].children[0].data,
        ch:$naturalgas('.push-data')[33].children[0].data,
        chp:$naturalgas('.push-data')[34].children[0].data,
        data:$naturalgas('.push-data')[35].children[0].data,
    }, {
        name:"RBOB Gasoline",
        price:$naturalgas('.push-data')[36].children[0].data,
        ch:$naturalgas('.push-data')[37].children[0].data,
        chp:$naturalgas('.push-data')[38].children[0].data,
        data:$naturalgas('.push-data')[39].children[0].data,
    }, {
        name:"Uranium",
        price:$naturalgas('.push-data')[40].children[0].data,
        ch:$naturalgas('.push-data')[41].children[0].data,
        chp:$naturalgas('.push-data')[42].children[0].data,
        data:$naturalgas('.push-data')[43].children[0].data,
    }, {
        name:"Oil WTI",
        price:$naturalgas('.push-data')[44].children[0].data,
        ch:$naturalgas('.push-data')[45].children[0].data,
        chp:$naturalgas('.push-data')[46].children[0].data,
        data:$naturalgas('.push-data')[47].children[0].data,
    }, {
        name:"Oil Brent",
        price:$naturalgas('.push-data')[48].children[0].data,
        ch:$naturalgas('.push-data')[49].children[0].data,
        chp:$naturalgas('.push-data')[50].children[0].data,
        data:$naturalgas('.push-data')[51].children[0].data,
    }
])
}

module.exports = GasData;