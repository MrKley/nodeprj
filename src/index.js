const express = require('express');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes/index');
const ejs = require('ejs');
const app = express();

//setings
app.set('port', 3000);
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'))

//middlewares


//routes
app.use(routes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//listening server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});