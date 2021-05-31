const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const Ddos = require('ddos');

const config = require('./app/config/index');

const RouteV1 = require(`./app/routes/${config.envApp}/v1/route`); // eslint-disable-line

const app = express();

app.set('trust proxy', true);

const ddos = new Ddos({burst:10,limit:5,testmode:true,whitelist:['192.180.0.1', 'localhost']});
// app.use(ddos.express);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

app.get('/', (req, res) => {
  res.send('Hello Docker\n');
});

// health check MS
app.get('/api/products/health', (req, res) => {
  res.send(`${config.msConfig.name} up and running`);
});

app.use('/api/products',
  RouteV1);


app.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).send({ code: 'error', message: 'internal error not handled' });
});

module.exports = app;
