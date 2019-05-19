//const debug = require('debug')('app:startup');
//const config = require('config');
//const morgan = require('morgan');
//const helmet = require('helmet');
//const Joi = require('joi');
const logger = require('./middleware/logger');

const products = require('./routes/products');
const home = require('./routes/home');

const express = require('express');
const app = express();

//app.set('view engine', 'pug');
//app.set('views', './views') //defoult

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));
app.use(express.static('./public'));
//app.use(helmet());

app.use('/api/products', products);
app.use('/', home);

app.use(logger);

//NODE_ENV
//const environment = process.env.NODE_ENV;
//console.log(environment);//undefine

//const appenv = app.get('env');
//console.log(appenv);//development

//debug
//if( app.get('env') === 'development'){
  //  app.use(morgan('tiny'))
  //debug('morgan enabled...')// console.log();}

//configuration
//console.log('Application Name: ' + config.get('name'));
//console.log('Mail Service: ' + config.get('mail.host'));
//console.log('Mail password: ' + config.get('mail.password'));


const port = process.env.PORT || 5656;
    app.listen(port, () => console.log(`listening on port ${port}...`));