module.exports = function(sequelize, DataTypes) {
    var Comments = sequelize.define("Comments", {
        Comment: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [2, 1000]
            }
        }
    });

    Comments.associate = function(models) {
        // We're saying that a Post should belong to a User
        // A Post can't be created without an User due to the foreign key constraint
        Comments.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        // We're saying that a Post should belong to a Category
        // A Post can't be created without an Category due to the foreign key constraint
        Comments.belongsTo(models.UserPosts, {
            foreignKeyConstraint: true,
            onDelete: 'cascade',
            hooks: true
        });
    };

    return Comments;
};