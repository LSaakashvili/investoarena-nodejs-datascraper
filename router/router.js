const express = require('express');
const router = express.Router();
const coffee = require('../chartData/coffee');
const palladium = require('../chartData/palladium');
const platinum = require('../chartData/platinum');
const crypto = require('../chartData/crypto');
const gold = require('../chartData/gold');
const silver = require('../chartData/silver');
const cocoa = require('../chartData/cocoa');
const soybeanoil = require('../chartData/soybeanoil');
const heatingoil = require('../chartData/heatingoil');
const naturalgas = require('../chartData/naturalgas');
const ethanol = require('../chartData/ethanol');
const coal = require('../chartData/coal');
const gasoline = require('../chartData/gasoline');
const ticker = require('../chartData/ticker');
const scraper = require('../scrapData/scraper');
const fs = require('fs');
const cheerio = require('cheerio');
const got = require('got');
const cors = require('cors');
const MetalsData = require('../Core/MetalsData');
const GasData = require('../Core/GasData');
const AgricultureData = require('../Core/AgricultureData');
const aluminum = require('../chartData/aluminum');
const uranium = require('../chartData/uranium');
const lead = require('../chartData/lead');
const ironore = require('../chartData/ironore');
const copper = require('../chartData/copper');
const nickel = require('../chartData/nickel');
const zinc = require('../chartData/zinc');
const tin = require('../chartData/tin');
const cotton = require('../chartData/cotton');
const oats = require('../chartData/oats');
const lumber = require('../chartData/lumber');
const leanhog = require('../chartData/leanhog');
const corn = require('../chartData/corn');
const feedercattle = require('../chartData/feedercattle');
const milk = require('../chartData/milk');
const orangejuice = require('../chartData/orangejuice');
const sugar = require('../chartData/sugar');
const rice = require('../chartData/rice');
const soybeans = require('../chartData/soybeans');
const tickerScraper = require('../scrapData/tickerScraper');
const tickerData = require('../scrapData/tickerData');

router.use(cors({ origin:true }))

router.get('/', (req, res) => {
    res.send("Nodejs API")
});

router.get('/chart/coffee/', coffee);
router.get('/chart/palladium/', palladium);
router.get('/chart/platinum/', platinum);
router.get('/chart/gold/', gold);
router.get('/chart/silver/', silver);
router.get('/chart/cocoa/', cocoa);
router.get('/chart/soybeanoil/', soybeanoil);
router.get('/chart/heatingoil/', heatingoil);
router.get('/chart/naturalgas/', naturalgas);
router.get('/chart/uranium', uranium);
router.get('/chart/ethanol/', ethanol);
router.get('/chart/coal/', coal);
router.get('/chart/gasoline/', gasoline);
router.get('/chart/aluminum/', aluminum);
router.get('/chart/lead', lead);
router.get('/chart/ironore', ironore);
router.get('/chart/copper', copper);
router.get('/chart/nickel', nickel);
router.get('/chart/zinc', zinc);
router.get('/chart/tin', tin);
router.get('/chart/cotton', cotton);
router.get('/chart/oats', oats);
router.get('/chart/lumber', lumber);
router.get('/chart/leanhog', leanhog);
router.get('/chart/corn', corn);
router.get('/chart/feedercattle', feedercattle);
router.get('/chart/milk', milk);
router.get('/chart/orangejuice', orangejuice);
router.get('/chart/sugar', sugar);
router.get('/chart/rice', rice);
router.get('/chart/soybeans', soybeans);
router.get('/chart/ticker/:id/', ticker);
router.get('/data/ticker/:id/:valuta', tickerScraper);
router.get('/data/tickers', tickerData);
router.get('/data/coffee', (req,res) => {
    got('https://markets.businessinsider.com/commodities/coffee-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Coffee",
        description:"Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. When coffee berries turn from green to bright red in color – indicating ripeness – they are picked, processed, and dried. Dried coffee seeds (referred to as beans) are roasted to varying degrees, depending on the desired flavor. Roasted beans are ground and then brewed with near-boiling water to produce the beverage known as coffee.",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:0.00
})})});
router.get('/data/rhodium', (req,res) => {
    got('https://markets.businessinsider.com/commodities/rhodium-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Rhodium",
        description:"Rhodium is a chemical element with the symbol Rh and atomic number 45. It is an ultra-rare, silvery-white, hard, corrosion-resistant, and chemically inert transition metal. It is a noble metal and a member of the platinum group. It has only one naturally occurring isotope, 103Rh. Naturally occurring rhodium is usually found as free metal, as an alloy with similar metals, and rarely as a chemical compound in minerals such as bowieite and rhodplumsite. It is one of the rarest and most valuable precious metals.",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:0.00
})})});
router.get('/data/uranium', (req,res) => {
    got('https://markets.businessinsider.com/commodities/uranium-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Natural Gas",
        description:"Uranium is a chemical element with the symbol U and atomic number 92. It is a silvery-grey metal in the actinide series of the periodic table. A uranium atom has 92 protons and 92 electrons, of which 6 are valence electrons. Uranium is weakly radioactive because all isotopes of uranium are unstable; the half-lives of its naturally occurring isotopes range between 159,200 years and 4.5 billion years",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:'0',
        open:'0',
})})});
router.get('/data/naturalgas', (req,res) => {
    got('https://markets.businessinsider.com/commodities/natural-gas-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Natural Gas",
        description:"Natural gas (also called fossil gas; sometimes just gas), is a naturally occurring hydrocarbon gas mixture consisting primarily of methane, but commonly including varying amounts of other higher alkanes, and sometimes a small percentage of carbon dioxide, nitrogen, hydrogen sulfide, or helium.[2] It is formed when layers of decomposing plant and animal matter are exposed to intense heat and pressure under the surface of the Earth over millions of years.[3] The energy that the plants originally obtained from the sun is stored in the form of chemical bonds in the gas.[4] Natural gas is a fossil fuel.",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/oilwti', (req,res) => {
    got('https://markets.businessinsider.com/commodities/oil-price?type=wti').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Oil WTI",
        description:"West Texas Intermediate (WTI) can refer to a grade or a mix of crude oil, and/or the spot price, the futures price, or the assessed price for that oil; colloquially WTI usually refers to the price of the New York Mercantile Exchange (NYMEX) WTI Crude Oil futures contract or the contract itself. The WTI oil grade is also known as Texas light sweet, although oil produced from any location can be considered WTI if the oil meets required qualifications.[1] Spot and futures prices of WTI are used as a benchmark in oil pricing. This grade is described as light crude oil because of its relatively low density, and sweet because of its low sulfur content.",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/oilbrent', (req,res) => {
    got('https://markets.businessinsider.com/commodities/oil-price?type=brent').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Oil Brent",
        description:"Brent Crude may refer to any or all of the components of the Brent Complex, a physically and financially traded oil market based around the North Sea of Northwest Europe; colloquially, Brent Crude usually refers to the price of the ICE Brent Crude Oil futures contract or the contract itself",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/aluminum', (req,res) => {
    got('https://markets.businessinsider.com/commodities/aluminum-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Aluminium",
        description:"Aluminium (aluminum in American and Canadian English) is a chemical element with the symbol Al and atomic number 13. It is a silvery-white, soft, non-magnetic and ductile metal in the boron group. By mass, aluminium is the most abundant metal in the Earth's crust and the third most abundant element (after oxygen and silicon)",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/palladium', (req,res) => {
    got('https://markets.businessinsider.com/commodities/palladium-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Palladium",
        description:"Palladium is a chemical element with the symbol Pd and atomic number 46. It is a rare and lustrous silvery-white metal discovered in 1803 by the English chemist William Hyde Wollaston. He named it after the asteroid Pallas, which was itself named after the epithet of the Greek goddess Athena, acquired by her when she slew Pallas",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/platinum', (req,res) => {
    got('https://markets.businessinsider.com/commodities/platinum-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Platinum",
        description:"Platinum is a chemical element with the symbol Pt and atomic number 78. It is a dense, malleable, ductile, highly unreactive, precious, silverish-white transition metal. Its name is derived from the Spanish term platino, meaning little silver.",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/gold', (req,res) => {
    got('https://markets.businessinsider.com/commodities/gold-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Gold",
        description:"Gold is a chemical element with the symbol Au (from Latin: aurum) and atomic number 79, making it one of the higher atomic number elements that occur naturally. In a pure form, it is a bright, slightly reddish yellow, dense, soft, malleable, and ductile metal. Chemically, gold is a transition metal and a group 11 element. It is one of the least reactive chemical elements and is solid under standard conditions.",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/silver', (req,res) => {
    got('https://markets.businessinsider.com/commodities/silver-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Silver",
        description:"Silver is a chemical element with the symbol Ag (from the Latin argentum, derived from the Proto-Indo-European h₂erǵ: shiny or white) and atomic number 47. A soft, white, lustrous transition metal, it exhibits the highest electrical conductivity, thermal conductivity, and reflectivity of any metal.",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/cocoa', (req,res) => {
    got('https://markets.businessinsider.com/commodities/cocoa-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Cocoa",
        description:"The cocoa bean or simply cocoa (/ˈkoʊ.koʊ/), which is also called the cacao bean or cacao (/kəˈkaʊ/),[1] is the dried and fully fermented seed of Theobroma cacao, from which cocoa solids (a mixture of nonfat substances) and cocoa butter (the fat) can be extracted. Cocoa beans are the basis of chocolate, and Mesoamerican foods including tejate, an indigenous Mexican drink that also includes maize.",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/soybeanoil', (req,res) => {
    got('https://markets.businessinsider.com/commodities/soybean-oil-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Soybeanoil",
        description:"Soybean oil is a vegetable oil extracted from the seeds of the soybean (Glycine max). It is one of the most widely consumed cooking oils and the second most consumed vegetable oil.[2] As a drying oil, processed soybean oil is also used as a base for printing inks (soy ink) and oil paints.",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/soybeans', (req,res) => {
    got('https://markets.businessinsider.com/commodities/soybeans-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Soybeans",
        description:"Soy beans contain significant amounts of phytic acid, dietary minerals and B vitamins. Soy vegetable oil, used in food and industrial applications, is another product of processing the soybean crop. Soybean is the most important protein source for feed farm animals (that in turn yields animal protein for human consumption)",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/heatingoil', (req,res) => {
    got('https://markets.businessinsider.com/commodities/heating-oil-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Heating Oil",
        description:"Heating oil is a low viscosity, liquid petroleum product used as a fuel oil for furnaces or boilers in buildings. Home heating oil is often abbreviated as HHO.[1]Heating oil consists of a mixture of petroleum-derived hydrocarbons in the 14- to 20-carbon atom range that condense between 250 and 350 °C (482 and 662 °F) during oil refining",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/ethanol', (req,res) => {
    got('https://markets.businessinsider.com/commodities/ethanol-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Ethanol",
        description:"Ethanol is an important industrial chemical; it is used as a solvent, in the synthesis of other organic chemicals, and as an additive to automotive gasoline (forming a mixture known as a gasohol). Ethanol is also the intoxicating ingredient of many alcoholic beverages such as beer, wine, and distilled spirits.",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/coal', (req,res) => {
    got('https://markets.businessinsider.com/commodities/coal-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Coal",
        description:"Coal is a combustible black or brownish-black sedimentary rock, formed as rock strata called coal seams. Coal is mostly carbon with variable amounts of other elements; chiefly hydrogen, sulfur, oxygen, and nitrogen.[1] Coal is formed when dead plant matter decays into peat and is converted into coal by the heat and pressure of deep burial over millions of years",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/gasoline', (req,res) => {
    got('https://markets.businessinsider.com/commodities/rbob-gasoline').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"RBOB Gasoline",
        description:"Gasoline or petrol is a clear petroleum-derived flammable liquid that is used primarily as a fuel in most spark-ignited internal combustion engines. It consists mostly of organic compounds obtained by the fractional distillation of petroleum, enhanced with a variety of additives",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/lead', (req,res) => {
    got('https://markets.businessinsider.com/commodities/lead-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Lead",
        description:"Lead is a chemical element with the symbol Pb (from the Latin plumbum) and atomic number 82. It is a heavy metal that is denser than most common materials. Lead is soft and malleable, and also has a relatively low melting point. When freshly cut, lead is silvery with a hint of blue; it tarnishes to a dull gray color when exposed to air",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/ironore', (req,res) => {
    got('https://markets.businessinsider.com/commodities/iron-ore-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Iron Ore",
        description:"Iron ores[1] are rocks and minerals from which metallic iron can be economically extracted. The ores are usually rich in iron oxides and vary in color from dark grey, bright yellow, or deep purple to rusty red.",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/copper', (req,res) => {
    got('https://markets.businessinsider.com/commodities/copper-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Copper",
        description:"Copper is a chemical element with the symbol Cu (from Latin: cuprum) and atomic number 29. It is a soft, malleable, and ductile metal with very high thermal and electrical conductivity. A freshly exposed surface of pure copper has a pinkish-orange color.",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/nickel', (req,res) => {
    got('https://markets.businessinsider.com/commodities/nickel-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Nickel",
        description:"Nickel is a chemical element with the symbol Ni and atomic number 28. It is a silvery-white lustrous metal with a slight golden tinge. Nickel belongs to the transition metals and is hard and ductile.",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/zinc', (req,res) => {
    got('https://markets.businessinsider.com/commodities/zinc-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Zinc",
        description:"Zinc is a chemical element with the symbol Zn and atomic number 30. Zinc is a slightly brittle metal at room temperature and has a blue-silvery appearance when oxidation is removed. It is the first element in group 12 (IIB) of the periodic table",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/tin', (req,res) => {
    got('https://markets.businessinsider.com/commodities/tin-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Tin",
        description:"Tin is a chemical element with the symbol Sn (from Latin: stannum) and atomic number 50. Tin is a silvery metal that characteristically has a faint yellow hue. Tin, like indium, is soft enough to be cut without much force.",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/corn', (req,res) => {
    got('https://markets.businessinsider.com/commodities/corn-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Corn",
        description:"Maize, also known as corn (American English), is a cereal grain first domesticated by indigenous peoples in southern Mexico about 10,000 years ago. The leafy stalk of the plant produces pollen inflorescences and separate ovuliferous inflorescences called ears that yield kernels or seeds, which are fruits.",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/cotton', (req,res) => {
    got('https://markets.businessinsider.com/commodities/cotton-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Cotton",
        description:"Cotton is a soft, fluffy staple fiber that grows in a boll, or protective case, around the seeds of the cotton plants of the genus Gossypium in the mallow family Malvaceae. The fiber is almost pure cellulose. Under natural conditions, the cotton bolls will increase the dispersal of the seeds.",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/oats', (req,res) => {
    got('https://markets.businessinsider.com/commodities/oats-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Oats",
        description:"The oat (Avena sativa), sometimes called the common oat, is a species of cereal grain grown for its seed, which is known by the same name (usually in the plural, unlike other cereals and pseudocereals). While oats are suitable for human consumption as oatmeal and oat milk, one of the most common uses is as livestock feed. Oats are associated with lower blood cholesterol when consumed regularly.",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/lumber', (req,res) => {
    got('https://markets.businessinsider.com/commodities/lumber-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Lumber",
        description:"Lumber, also known as timber, is a type of wood that has been processed into beams and planks, a stage in the process of wood production. Lumber is mainly used for structural purposes but has many other uses as well. There are two main types of lumber. It may be supplied either rough-sawn, or surfaced on one or more of its faces",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/livecattle', (req,res) => {
    got('https://markets.businessinsider.com/commodities/live-cattle-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Live Cattle",
        description:"Live cattle is a type of futures contract that can be used to hedge and to speculate on fed cattle prices. Cattle producers, feedlot operators, and merchant exporters can hedge future selling prices for cattle through trading live cattle futures, and such trading is a common part of a producer's price risk management program.",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/leanhog', (req,res) => {
    got('https://markets.businessinsider.com/commodities/lean-hog-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Lean Hog",
        description:"Lean Hog is a type of hog (pork) futures contract that can be used to hedge and to speculate on pork prices. Lean Hog futures and options are traded on the Chicago Mercantile Exchange (CME), which introduced Lean Hog futures contracts in 1966.[1] The contracts are for 40,000 pounds of Lean Hogs, and call for cash settlement based on the CME Lean Hog Index, which is a two-day weighted average of cash markets. Minimum tick size for the contract is $0.00025 per pound ($10 per contract).",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/feedercattle', (req,res) => {
    got('https://markets.businessinsider.com/commodities/feeder-cattle-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Feeder Cattle",
        description:"Feeder cattle are steers (castrated males) or heifers (females who have not dropped a calf) mature enough to undergo backgrounding as backgrounding cattle, or mature enough to be directly fattened prior to slaughter. Backgrounding occurs at backgrounding operations and fattening occurs at a feedlot.",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/milk', (req,res) => {
    got('https://markets.businessinsider.com/commodities/milk-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Milk",
        description:"Milk is a nutrient-rich liquid food produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals, including breastfed human infants before they are able to digest solid food.",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/orangejuice', (req,res) => {
    got('https://markets.businessinsider.com/commodities/orange-juice-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Orange Juice",
        description:"Orange juice is a liquid extract of the orange tree fruit, produced by squeezing or reaming oranges. It comes in several different varieties, including blood orange, navel oranges, valencia orange, clementine, and tangerine.",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/sugar', (req,res) => {
    got('https://markets.businessinsider.com/commodities/sugar-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Sugar",
        description:"Sugar is the generic name for sweet-tasting, soluble carbohydrates, many of which are used in food. Table sugar, granulated sugar, or regular sugar, refers to sucrose, a disaccharide composed of glucose and fructose. Simple sugars, also called monosaccharides, include glucose, fructose, and galactose",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/rice', (req,res) => {
    got('https://markets.businessinsider.com/commodities/rice-price').then(response => {
    const $ = cheerio.load(response.body);
    res.json({
        name:"Rice",
        description:"Rice is the seed of the grass species Oryza glaberrima (African rice) or Oryza sativa (Asian rice). As a cereal grain, it is the most widely consumed staple food for a large part of the world's human population, especially in Asia and Africa.",
        price:$('.price-section__values').find('span')[0].children[0].data,
        ch:$('.price-section__values').find('span')[2].children[0].data,
        chp:$('.price-section__values').find('span')[3].children[0].data,
        close:$('.snapshot__data-item')[0].children[0].data.trim(),
        open:$('.snapshot__data-item')[1].children[0].data.trim(),
})})});
router.get('/data/metals/', MetalsData);
router.get('/data/gas/', GasData);
router.get('/data/agriculture/', AgricultureData);

module.exports = router;