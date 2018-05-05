module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
      category: DataTypes.String,
      allowNull: false,
    });
    return Category;
  };
  