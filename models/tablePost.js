module.exports = function(sequelize, DataTypes) {
    var UserPosts = sequelize.define("UserPosts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 100]
            }
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 200]
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 1000]
            }
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'https://pulpandpixel.ca/assets/uploads/2014/04/gem_city_guide_vancouver_logo_design_1-color-knockout-white_1-color-knockout-white.png'
        },
        likes: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        dislikes: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        }
    });

    UserPosts.associate = function(models) {
        // We're saying that a Post should belong to a User
        // A Post can't be created without an User due to the foreign key constraint
        UserPosts.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        // We're saying that a Post should belong to a Category
        // A Post can't be created without an Category due to the foreign key constraint
        UserPosts.belongsTo(models.Category, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return UserPosts;
};