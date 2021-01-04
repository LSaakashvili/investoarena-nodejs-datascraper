const express = require('express');
const axios = require('axios');

const formatPrices = data => {
    return data.map(el => {
        return {
            x:el[0],
            t:el[1],
        }
    })
}
const crypto = async(req,res) => {
    const days = req.params.days;
    const id = req.params.id;
    await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`)
    .then(response => {
        if (response) {
            res.json(formatPrices(response.data.prices))
        }
    })
    .catch(err => {
        res.json("ERR")
    })
}

module.exports = crypto;