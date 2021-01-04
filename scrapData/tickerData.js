const express = require('express');
const axios = require('axios');
const got = require('got');
const cheerio = require('cheerio');

const tickerData = async(req,res) => {
    const metauxBC = await axios.get('https://investoarena.herokuapp.com/data/ticker/FR0013342797/EUR');
    const metauxAC = await axios.get('https://investoarena.herokuapp.com/data/ticker/FR0013342789/EUR');
    const cliBaer = await axios.get('https://investoarena.herokuapp.com/data/ticker/GB00B6197G24/GBP');
    const anima = await axios.get('https://investoarena.herokuapp.com/data/ticker/IT0005332686/EUR');
    const quadriga = await axios.get('https://investoarena.herokuapp.com/data/ticker/LU1844121522/USD');
    res.json([metauxBC.data, metauxAC.data,  cliBaer.data, anima.data, quadriga.data]);
}

module.exports = tickerData;