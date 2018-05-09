const db = requere("../models");

module.exports = {
    isLoggedIn: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash("error", "You must be signed in to do that!");
        res.redirect("/login");
    }

}