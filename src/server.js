
/**
 * Module dependencies
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler = require('error-handler'),
    morgan = require('morgan')
    sql = require('mssql'),
    routes = require('./node/routes'),
    api = require('./node/routes/api'),
    http = require('http'),
    path = require('path'),
    dotenv = require('dotenv');

var app = module.exports = express();

dotenv.config({ silent: true });

var env = require('./node/shared/env');

var constellation = require('./node/routes/constellation');

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// development only
if (env.env === 'development') {
    //app.use(express.errorHandler());
}

// production only
if (env.env === 'production') {
    // TODO
}

var db = require('./node/shared/db');

/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
//app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/name', api.name);
app.use('/api/constellation', constellation);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});