// const CategoriesService = require("../server/models/categories");
const { Categories } = require("../server/models");
// const {
//   create,
//   removeById,
//   // removeAll,
//   getAll,
// } = require("../services/categories.service");

// create // exports.create = async (req, res) => {
//   res.json(await create(req.body));
// };

const createCategories = async (req, res) => {
  try {
    await Categories.create({
      name: req.body.name,
    });
    res.status(201).json({ message: "Success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err);
  }
};

// first // exports.getAll = async (req, res) => res.send(await getAll());

const getAllCategories = async (req, res) => {
  try {
    const findAll = await Categories.findAll(req.params.id);
    res.status(201).send({ findAll });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err);
  }
};

// second /// exports.removeById = async (req, res) =>
//   res.json(await removeById(req.params.id));

const removeCategoriesById = async (req, res) => {
  try {
    await Categories.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ message: "Remove by ID" });
    // console.log("categories remove id =", id);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err);
  }
};

// third //// exports.removeAll = async (req, res) => res.json(await removeAll());

module.exports = { createCategories, getAllCategories, removeCategoriesById };
