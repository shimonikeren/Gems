const passportLocalSequelize = require('passport-local-sequelize');
module.exports = (sequelize, DataTypes) => {
    const User = passportLocalSequelize.defineUser(sequelize, {
        email: {
            type: DataTypes.STRING,
            validate: { isEmail: true }
        },
        firstname: {
            type: DataTypes.STRING,
            defaultValue: null

        },
        lastname: {
            type: DataTypes.STRING,
            defaultValue: null


        }
    });
    User.associate = function(models) {
        // Associating User with Posts
        // When User is deleted, also delete any associated Posts
        User.hasMany(models.UserPosts, { onDelete: 'cascade' });
    };

    return User;
};