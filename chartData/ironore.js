const express = require('express');
const axios = require('axios');

const formatPrices = data => {
    return data.map(el => {
        return {
            x:el.Close,
            t:el.Date
        }
    })
}
const ironore = async(req,res) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today =  yyyy + mm + dd;

    await axios.get(`https://markets.businessinsider.com/Ajax/Chart_GetChartData?instrumentType=Commodity&tkData=300002,89,0,333&from=${today - 10000}&to=${today}`, {
        Headers:{
            "Remote Address": "23.58.222.9:443"
        }
    })
    .then(response => {
        if (response) {
            res.json(formatPrices(response.data))
        }
    })
    .catch(err => {
        res.json("ERR")
    })
}

module.exports = ironore;