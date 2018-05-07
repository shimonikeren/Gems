module.exports = (app) => {
    app.get("/", (req, res) => {
        //res.redirect('/gems/all')
        res.render("index")
    });
    app.get("/signup", (req, res) => {
        res.render("signup")
    })
}