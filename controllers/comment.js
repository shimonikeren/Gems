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
    app.get.('/gems/:postId/comments', (req, res) => {



        }
    })
}