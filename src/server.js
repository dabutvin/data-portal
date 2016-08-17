
/**
 * Module dependencies
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler = require('error-handler'),
    morgan = require('morgan'),
    routes = require('./node/routes'),
    api = require('./node/routes/api'),
    http = require('http'),
    path = require('path'),
    dotenv = require('dotenv'),
    cookieParser = require('body-parser'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

var app = module.exports = express();

dotenv.config({ silent: true });

var env = require('./node/shared/env');

var db = require('./node/shared/db');
var constellation = require('./node/routes/constellation');
var home = require('./node/routes/home');

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

app.use(cookieParser.json());
app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

var User = [
    {
        id: 'user1',
        password: 'password1'
    }
]

passport.use(new LocalStrategy(
    function (username, password, done) {
        var found = false;
        for (var i = 0; i < User.length; i++) {
            if (username === User[i].id && password === User[i].password) {
                found = true;
                return done(null, User[i]);
            }
        }
        if (!found) {
            return done(null, false);
        }
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    for (var i = 0; i < User.length; i++) {
        if (id === User[i].id) {
            done(null, User[i]);
        }
    }
});

// development only
if (env.env === 'development') {
    //app.use(express.errorHandler());
    app.use(function (req, res, next) {        // TODO remove cross origin req
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
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

app.post('/login',
    passport.authenticate('local', { failureRedirect: '/api/name' }),
    function (req, res) {
        res.redirect('/api/homes');
    }
);

// JSON API
app.get('/api/name', api.name);
app.use('/api/constellation', constellation);
app.use('/api/homes', home);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


/**
 * Start Server
 */
db.sqlConnect().then(function () {
    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
});
