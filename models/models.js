const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Categories = sequelize.define("categories", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  categoryName: {
    type: DataTypes.STRING,
    unique: {
      msg: "This categoryName is already exist.",
      fields: ["categoryName"],
    },
    allowNull: false,
  },
});

const Meals = sequelize.define("meals", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  img: { type: DataTypes.STRING, allowNull: false },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: "This name is already exist.",
      fields: ["name"],
    },
  },
  description: { type: DataTypes.STRING },
  weight: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.STRING, allowNull: false },
  availability: { type: DataTypes.BOOLEAN, defaultValue: true },
  categoryName: { type: DataTypes.STRING, allowNull: false },
});

const Info = sequelize.define("info", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  address: {
    type: DataTypes.STRING,
  },
  contacts: { type: DataTypes.STRING },
  wiFi: { type: DataTypes.STRING },
});

Categories.hasMany(Meals, {
  onDelete: "CASCADE",
  foreignKey: "categoryId",
});
Meals.belongsTo(Categories);

module.exports = {
  Categories,
  Meals,
  Info,
};
