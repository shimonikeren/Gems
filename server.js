const express = require('express'),
    bodyParser = require('body-parser'),
    exphbs = require('express-handlebars'),
    passport = require('passport'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passportLocalSequelize = require('passport-local-sequelize');
db = require("./models");


let app = express();
PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
//the codeline below allows to express static images in addition to the files 
app.use('/public', express.static('public'))
app.use(cookieParser());
app.use(session({ secret: 'super-secret' }));

app.use(passport.initialize());
app.use(passport.session());
// passport config
passport.use(db.User.createStrategy());
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

//require routes
require("./controllers/http-routes.js")(app);
require("./controllers/signup.js")(app);
require("./controllers/gem.js")(app);
require("./controllers/comment")(app);
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log('Listening on port %s', PORT);
    });
});