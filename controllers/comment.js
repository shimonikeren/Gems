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
    app.get('/comments/:id/all', (req, res) => {
        let curPostId = req.params.id
        db.Comments.findAll({
            where: { UserPostId: req.params.id },
            include: [{
                model: db.UserPosts,
                attributes: POST_ATTR
            }, {
                model: db.User,
                attributes: USER_ATTR
            }]
        }).then((comments) => {
            if (comments) {

                res.render("comments", {
                    comments: comments,
                    curPostId: curPostId,
                    user: req.user,
                })
            }
        })
    })
    app.post("/comments/:id/add", (req, res) => {
        let curPostId = req.params.id
        if (req.user) {
            db.UserPosts.findOne({
                where: { id: req.params.id },
                include: [{
                    model: db.User,
                    attributes: USER_ATTR
                }]
            }).then((gem) => {
                db.Comments.create({
                    Comment: req.body.comment,
                    UserId: req.user.id,
                    UserPostId: req.params.id
                }).then((comments) => {
                    //res.json(comments)
                    db.Comments.findAll({
                        where: {
                            UserPostId: req.params.id
                        },
                        include: [{
                            model: db.UserPosts,
                            attributes: POST_ATTR
                        }, {
                            model: db.User,
                            attributes: USER_ATTR
                        }]
                    }).then((comments) => {
                        res.render("comments", {
                                comments: comments,
                                curPostId: curPostId,
                                user: req.user,
                            })
                            //res.json(comments)

                    })


                })
            })


        } else {
            res.status(404).send()
        }
    })

}