const fs = require('fs');
const cheerio = require('cheerio');
const got = require('got');
const { constants } = require('crypto');


const scraper = (vgmUrl) => {
    return got(vgmUrl).then(response => {
    const $ = cheerio.load(response.body);
    return {
        price:$('.price-section__values').find('span')[0].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data
    }
})
}


module.exports = scraper;