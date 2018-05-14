const passport = require('passport');
const db = require('../models');
module.exports = (app) => {
    app.post('/signup', (req, res, next) => {
        db.User.register(
            req.body['username'],
            req.body['password'],
            (err, registeredUser) => {
                console.log(err);
                if (err) {
                    console.log(err.class);
                    return res.render('signup', {
                        title: 'Invalid username. Try again.',
                        users: null
                    });
                };
                registeredUser.email = req.body['email'];
                registeredUser.firstname = req.body['firstname'] || null;
                registeredUser.lastname = req.body['lastname'] || null;

                registeredUser.save();
                passport.authenticate("local")(req, res, () => { res.redirect("/") })
            }
        )
    });
    app.post("/login", (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                console.log("wrong password");
                return res.render('login', {
                    title: 'Invalid username or password. Try again.',
                    users: null
                });

            }
            req.logIn(user, (err) => {
                if (err) {
                    return next(err)
                }
                return res.redirect('/');

            });
        })(req, res, next);
    });
    app.get("/logout", (req, res, next) => {
        req.logout();
        req.session.destroy((err) => {
            if (err) {
                return next(err);
            }
            res.redirect("/");
        })
    })
}