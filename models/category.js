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
        //Category.bulkCreate([{
        //    category_name: "Art",
        //},
        // {
        //category_name: "Outdoors"
        // },
        //{
        //category_name: "Events"
        //}, {
        //category_name: "Others"
        //}
        //]).then(() => { return Category.findAll() }).then((category) => { console.log(category) })
    return Category;
}