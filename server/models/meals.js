"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Meals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Meals.belongsTo(models.Categories, {
        foreignKey: "categoriesId",
        // onDelete: "CASCADE",
      });
    }
  }
  Meals.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      weight: DataTypes.INTEGER,
      price: DataTypes.DECIMAL,
      img_path: DataTypes.STRING,
      // categoriesId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Meals",
    }
  );
  return Meals;
};
