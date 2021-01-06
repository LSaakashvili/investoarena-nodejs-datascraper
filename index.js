const express = require('express')
const app = express()
const Router = require('./router/router');
const path = require('path');

app.use('/', Router);

app.listen(process.env.PORT || 5500, (err) => {
    if (err) throw err;
    console.log("Server is running on 4000");
})