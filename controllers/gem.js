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
module.exports = (app) => {
    app.post("/newgem", (req, res) => {
        if (req.user) {
            let post = req.body;
            console.log(req.body);
            post.UserId = req.user.id;
            db.UserPosts.create(post).then((result) => {
                res.render('show', {
                    user: req.user,
                    gems: gems
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
                res.render("gems", { user: req.user, gems: gems })

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
                res.render("show", {
                    user: req.user,
                    gem: gem,

                })
                console.log(gem.User)
            } else {
                res.status(404).send({});
            }
        })
    })

    app.get("/gems/art", (req, res) => {
        db.UserPosts.findAll({
            where: {
                category_name: Art
            }
        }).then((gems) => {
            res.render("art", {
                gems: gems
            })

        })
    })

    app.get("/gems/events", (req, res) => {
        db.UserPosts.findAll({
            where: {
                category_name: Events
            }
        }).then((gems) => {
            res.render("events", {
                gems: gems
            })
        })
    })

    app.get("/gems/outdoors", (req, res) => {
        db.UserPosts.findAll({
            where: {
                category_name: Outdoors
            }
        }).then((gems) => {
            res.render("outdoors", {
                gems: gems
            })
        })
    })

    app.get("/gems/others", (req, res) => {
        db.UserPosts.findAll({
            where: {
                category_name: Others
            }
        }).then((gems) => {
            res.render("others", {
                gems: gems
            })
        })
    })
}