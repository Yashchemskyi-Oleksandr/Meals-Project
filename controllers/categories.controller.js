const { Categories } = require("../models/models");

const create = async (req, res) => {
  try {
    let { categoryName } = req.body;
    const newCategory = await Categories.create({
      categoryName,
    });
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const categories = await Categories.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const removeById = async (req, res) => {
  try {
    await Categories.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const updateById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    await Categories.update(data, {
      where: {
        id: id,
      },
    });
    const updated = await Categories.findByPk(id);

    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const category = await Categories.findByPk(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  create,
  getAll,
  removeById,
  updateById,
  getById,
};
