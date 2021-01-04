const express = require('express');
const axios = require('axios');
const got = require('got');
const cheerio = require('cheerio');

const formatPrices = data => {
    return data.map(el => {
        return {
            x:el.o,
            t:el.d
        }
    })
}

const integerMapper = ( resfd ) => {
    resfd.map(feas => {
        console.log(feas)
    })
}

const tickerScraper = async(req,res) => {
    const id = req.params.id;
    const valuta = req.params.valuta;
        await got(`https://markets.ft.com/data/funds/tearsheet/summary?s=${id}:${valuta}`)
        .then(response => {
        const $ = cheerio.load(response.body);
        return res.json({
            price:$('.mod-ui-data-list__value')[0].children[0].data,
            name:$('h1')[0].children[0].data,
            ch:$('span')[18].children[0].children[0].data,
            url:id,
            details:[
                $('th')[0].children[0].data,
                $('th')[1].children[0].data,
                $('th')[2].children[0].data,
                $('th')[3].children[0].data,
                $('th')[4].children[0].data,
                $('th')[5].children[0].data,
                $('th')[6].children[0].data,
                $('th')[7].children[0].data,
                $('th')[8].children[0].data,
                $('th')[9].children[0].data,
                $('th')[10].children[0].data,
                $('th')[11].children[0].data,
                $('th')[12].children[0].data,
                $('th')[13].children[0].data,
                $('th')[14].children[0].data,
                $('th')[15].children[0].data,
                $('th')[16].children[0].data,
                $('th')[17].children[0].data,
                $('th')[18].children[0].data,
                $('th')[19].children[0].data,
                $('td')[0].children[0].data,
                $('td')[1].children[0].data,
                $('td')[2].children[0].data,
                $('td')[3].children[0].data,
                $('td')[4].children[0].data,
                $('td')[5].children[0].data,
                $('td')[6].children[0].data,
                $('td')[7].children[0].data,
                $('td')[8].children[0].data,
                $('td')[9].children[0].data,
                $('td')[10].children[0].data,
                $('td')[11].children[0].data,
                $('td')[12].children[0].data,
                $('td')[13].children[0].data,
                $('td')[14].children[0].data,
                $('td')[15].children[0].data,
                $('td')[16].children[0].data,
                $('td')[17].children[0].data,
                $('td')[18].children[0].data,
                $('td')[19].children[0].data
            ]
    })
    })
}

module.exports = tickerScraper;