module.exports = (app) => {
    app.get("/", (req, res) => {
        //res.redirect('/gems/all')
        res.render("index")
    });
    app.get("/signup", (req, res) => {
        res.render('signup', { user: req.user });
    })
    app.get('/login', (req, res) => {
        res.render('login', { user: req.user })
    })
}