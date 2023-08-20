const express = require('express');
const config = require('../config.js');
const user = require('./components/user/network')

const app = express();

//router

app.listen(config.api.port,()=>{console.log(`escuchando por el puerto ${config.api.port}`)});

app.use('/api/user', user)