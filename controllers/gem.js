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
    'published',
];
module.exports = (app) => {
    app.post("/newgem", (req, res) => {
        if (req.user) {
            let post = req.body;
            console.log(req.body);
            post.UserId = req.user.id;
            db.UserPosts.create(post).then((result) => {
                res.render('new');
                //res.json({ id: result.id });


            }).catch((error) => {
                res.json({ msg: error.message });
            })
        } else {
            res.status(404).send()
        }
    })
}