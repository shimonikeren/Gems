const express = require('express'),
    bodyParser = require('body-parser'),
    exphbs = require('express-handlebars'),
    passport = require('passport'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passportLocalSequelize = require('passport-local-sequelize');


const app = express();
PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cookieParser());
app.use(session({ secret: 'super-secret' }));

app.use(passport.initialize());
app.use(passport.session());
// passport config
//require routes
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.listen(PORT, console.log('Server active on port ' + PORT));