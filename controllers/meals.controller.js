const { required } = require("joi");
const { Meals, Categories } = require("../models/models");

const { Sequelize } = require("sequelize");

const create = async (req, res) => {
  try {
    const { categoryName } = await Categories.findByPk(req.body.categoryId);
    const meal = await Meals.create({
      ...req.body,
      categoryName,
    });
    res.status(201).json(meal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const categoryIds = [];
    if (req.query?.categoryId) {
      categoryIds.push(...req.query.categoryId.split(","));
    }

    let meals;

    if (categoryIds.length > 0) {
      meals = await Meals.findAll({
        include: [
          ///// as join
          {
            model: Categories, /// table that we want to join
            required: true, /// хотим испольозовать inner join если не будет то буде left/right
            where: {
              id: {
                /// то что ищем тоесть id
                [Sequelize.Op.in]: categoryIds, ///////// сравниваем массив адй / seuelize.op.in - ми сравниваем массив елементов / еквивалентно оператору in в SQL
              },
            },
          },
        ],
      });
    } else {
      meals = await Meals.findAll({
        order: [["createdAt", "DESC"]],
      });
    }

    res.status(200).json(meals);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const meal = await Meals.findByPk(req.params.id);
    res.status(200).json(meal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getByCategories = async (req, res) => {
  try {
    const id = req.params.id;
    let mealsByCategory = await Meals.findAll({
      where: { categoryId: id, availability: true },
    });
    res.status(200).json(mealsByCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const { categoryName } = await Categories.findByPk(data.categoryId);
    data.categoryName = categoryName;

    await Meals.update(data, { where: { id } });
    const updatedMeal = await Meals.findByPk(id);

    res.status(200).json(updatedMeal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const removeById = async (req, res) => {
  try {
    await Meals.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Success" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  removeById,
  updateById,
  getByCategories,
};
