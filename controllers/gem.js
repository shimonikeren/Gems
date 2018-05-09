const db = require("../models");
const USER_ATTR = ['username', 'firstname', 'lastname'];
const POST_ATTR = [
    'id',
    'title',
    'category',
    'address',
    'description',
    'image',
    'createdAt',
];
module.exports = (app) => {
    app.post("/newgem", (req, res) => {
        if (req.user) {
            let post = req.body;
            console.log(req.body);
            post.UserId = req.user.id;
            db.UserPosts.create(post).then((result) => {
                res.render('gems');
                //res.json({ id: result.id });


            }).catch((error) => {
                res.json({ msg: error.message });
            })
        } else {
            res.status(404).send()
        }
    });

    app.get("/gems/all", (req, res) => {
        db.UserPosts.findAll({}).then((gems) => {
            if (!req.user) {
                res.render("gems", { gems: gems })

            } else {
                res.render("gems", { user: req.user, gems: gems })
                console.log(gems)
            }
        })
    });
    //app.get("/gems/owner", (req, res) => {
    //if (req.user) {
    //db.UserPosts.findAll({
    // where: { UserId: reg.user.id },
    //order: [
    // ['createdAt', 'DESC']
    //]
    //})
    //}
    //}).then((user_posts) => {
    //if (!user_posts) {
    //res.render('gems', { user: req.user })
    //   //}
    //})
}