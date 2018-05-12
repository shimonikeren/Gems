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
    'likes',
    'dislikes'
];
module.exports = (app) => {
    app.post("/newgem", (req, res) => {
        if (req.user) {
            let post = req.body;
            //console.log("gem  " + req.body);
            //console.log(res.json(req.body))
            post.UserId = req.user.id;
            db.UserPosts.create(post).then((gem) => {
                res.render('show', {
                    user: req.user,
                    gem: gem
                });
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
    app.get("/gems/owner", (req, res) => {
        if (req.user) {
            let condition = {
                UserId: req.user.id
            };
            db.UserPosts.findAll({
                where: condition,
                order: [
                    ['createdAt', 'DESC']
                ],
                incude: [{
                    model: db.User,
                    attributes: USER_ATTR
                }]

            }).then((gems) => {
                let author = req.user;
                author.owner = true;
                res.render("gems", {
                    user: req.user,
                    gems: gems,
                    user: author,
                    msg: "My Gems"
                })

            })
        }
    });
    app.get("/gems/:id", (req, res) => {
        db.UserPosts.findOne({
            where: { id: req.params.id },
            include: [{
                model: db.User,
                attributes: USER_ATTR
            }]
        }).then((gem) => {
            if (gem) {
                if (req.user) {
                    if (req.user.id == gem.UserId) {

                        let author = req.user;
                        author.owner = true;
                        console.log(author)
                        console.log(gem.UserId)
                        console.log(req.user.id)
                        res.render("show", {
                            gem: gem,
                            user: author
                        })
                        console.log(gem.User)
                    } else {
                        res.render("show", {
                            user: req.user,
                            gem: gem,
                        })
                    }
                } else {
                    res.render("show", {
                        user: req.user,
                        gem: gem,
                    })
                }
            } else {
                res.status(404).send({});
            }


        })
    })

    app.get("/gems/category/art", (req, res) => {
        console.log("Art Route");
        db.UserPosts.findAll({
            where: { category: "Art" }
        }).then((gems) => {
            res.render("gems", {
                user: req.user,
                gems: gems,
                msg: "Art"
            })

        })
    })
    app.get("/gems/category/outdoors", (req, res) => {
        console.log("Art Route");
        db.UserPosts.findAll({
            where: {
                category: "Outdoors"
            }
        }).then((gems) => {
            res.render("gems", {
                user: req.user,
                gems: gems,
                msg: "Outdoots"
            })

        })
    })

    app.get("/gems/category/events", (req, res) => {
        db.UserPosts.findAll({
            where: {
                category: "Events"
            }
        }).then((gems) => {
            res.render("gems", {
                gems: gems,
                msg: "Events"
            })
        })
    })



    app.get("/gems/category/other", (req, res) => {
        db.UserPosts.findAll({
            where: {
                category: "Other"
            }
        }).then((gems) => {
            res.render("gems", {
                gems: gems,
                msg: "Others"
            })
        })
    })



    app.delete("/gems/:id/delete", (req, res) => {
        db.UserPosts.destroy({
            where: {
                id: req.params.id
            }
        }).then((gems) => {
            res.status(200).send();

        })

    })
    app.put("/gems/vote/like/:id", (req, res) => {

        let val = 1;

        db.UserPosts.update({
            likes: db.sequelize.literal("likes + 1")
        }, {
            where: { id: req.params.id }
        }).then((result) => {
            res.status(200).send();
        })


    })
    app.put("/gems/vote/dislike/:id", (req, res) => {

        let val = 1;

        db.UserPosts.update({
            dislikes: db.sequelize.literal("dislikes + 1")
        }, {
            where: {
                id: req.params.id
            }
        }).then((result) => {
            res.status(200).send();
        })


    })
}