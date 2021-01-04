const express = require('express');
const axios = require('axios');

const formatPrices = data => {
    return data.map(el => {
        return {
            x:el.value,
            t:el.dateTime
        }
    })
}

const ticker = async(req,res) => {
    const id = req.params.id;
    await axios.get(`https://www.bloomberg.com/markets2/api/history/${id}/PX_LAST?timeframe=1_YEAR&period=daily&volumePeriod=daily`, {
        headers:{
"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
"accept-encoding": "gzip, deflate, br",
"accept-language": "en-US,en;q=0.9",
"cache-control": "max-age=0",
"if-none-match": "W/2776-45NGszGfd3AzNxmaJWisKk4fcxc",
"sec-fetch-dest": "document",
"sec-fetch-mode": "navigate",
"sec-fetch-site": "none",
"sec-fetch-user": "?1",
"upgrade-insecure-requests": "1",
"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
        }
    })
    .then(response => {
        res.json(response.data[0].price);
    })
}

module.exports = ticker;