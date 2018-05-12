const db = require("../models");
const USER_ATTR = ['username', 'firstname', 'lastname'];
const POST_ATTR = [
    'id',
    'title',
    'category',
    'address',
    'description',
    'image',
    'createdAt'
];
const COMM_ATTR = ['id', 'Comment', 'createdAt', 'updatedAt', 'UserId', 'UserPostId'];
module.exports = (app) => {
    app.get('/gems/comments/:id', (req, res) => {
        db.Comments.findAll({
            where: { UserPostId: req.param.id },
            include: [{
                model: db.UserPosts,
                attributes: POST_ATTR
            }]
        }).then((comments) => {
            if (comments) {
                res.render("show")
            }
        })
    })
    app.post("/gems/comments/:id/add", (req, res) => {


        if (req.user) {



            //let Comments = {
            // Comment: req.body,
            // userPostId: req.params.id,
            // UserId: req.userId
            //};


            db.Comments.create({
                Comment: req.body.comment,
                UserId: req.user.id,
                UserPostId: req.params.id
            }).then((comments) => {
                res.render('show', { user: req.user, comments: comments })
            }).catch((error) => {
                res.json({
                    msg: error.message
                });
            })
        } else {
            res.status(404).send()
        }

    })

}