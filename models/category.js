module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    });
    Category.associate = (models) => {
        Category.hasMany(models.UserPosts, {
            onDelete: "cascade"
        });
    }
    return Category;
}