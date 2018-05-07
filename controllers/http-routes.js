module.exports = (app) => {
    app.get("/", (req, res) => {
        //res.redirect('/gems/all')
        res.send("hello")
    });
    app.get("/signup", (req, res) => {
        res.render("signup")
    })
}