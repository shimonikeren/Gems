module.exports = (app) => {
    app.get("/", (req, res) => {
        //res.redirect('/gems/all')
        res.redirect("gems/all")
    });
    app.get("/signup", (req, res) => {
        res.render('signup', { user: req.user });
    });
    app.get('/login', (req, res) => {
        res.render('login', { user: req.user })

    });
    app.get("/newgem", (req, res) => {
        res.render("newgem", { user: req.user })
    })

    //app.post('/newgem', (req, res) => {
    //res.render("new")
    //})

}