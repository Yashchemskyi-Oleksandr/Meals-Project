const { Meals } = require("../server/models");
// const MealsService = require("../services/meals.service");
// const {
//   // create,
//   getAll,
//   getById,
//   // removeAll,
//   removeById,
//   updateById,
// } = require("../services/meals.service");

// one /// exports.create = async (req, res) => res.json(await create(req.body));

const createMeal = async (req, res) => {
  try {
    const meal = await Meals.create({
      name: req.body.name,
      description: req.body.description,
      weight: req.body.weight,
      price: req.body.price,
      img_path: req.body.img_path,
      categoriesId: req.body.categoriesId,
    });
    res.status(201).json({ meal });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err);
  }
};

// two // exports.getAll = async (req, res) => res.send(await getAll());

const getAllMeals = async (req, res) => {
  try {
    const meals = await Meals.findAll();
    res.status(201).json({ meals });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err);
  }
};

// three // exports.getById = async (req, res) => res.send(await getById(req.params.id));

const getByIdMeal = async (req, res) => {
  try {
    const mealID = await Meals.findByPk(req.params.id);
    res.status(200).json({ mealID });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err);
  }
};

// four // exports.removeById = async (req, res) =>
//   res.json(await removeById(req.params.id));

const removeByIdMeal = async (req, res) => {
  try {
    await Meals.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Success" });
  } catch (err) {
    res.status(404).json({ message: err.message });
    console.log(err);
  }
};

// exports.removeAll = async (req, res) => res.json(await removeAll());

// five //exports.updateById = async (req, res) => res.json(await updateById(req));

const updateByIdMeal = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    await Meals.update(data, {
      where: {
        id: id,
      },
    });
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err);
  }
};

module.exports = {
  createMeal,
  getAllMeals,
  getByIdMeal,
  removeByIdMeal,
  updateByIdMeal,
};

////// test catch

/////
// exports.getById = async (req, res) => {
//   const id = req.params.id;

//   MealsService.findByPk(id)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Error retrieve" + id,
//       });
//     });
// };
/////

// create and save a new meal
// exports.create = (req, res) => {
//   if (!req.body) {
//     req.status(400).send({
//       message: "Content can not be ampty!",
//     });
//     return;
//   }

/// create a meal
// const meal = {
//   name: req.body.name,
//   description: req.body.description,
//   weight: req.body.weight,
//   price: req.body.price,
//   img_path: req.body.img_path,
//   categoriesId: req.body.categoriesId,
// };

// res.json(await create(req.body));

//   MealsService.create({
//     name: req.body.name,
//     description: req.body.description,
//     weight: req.body.weight,
//     price: req.body.price,
//     img_path: req.body.img_path,
//     categoriesId: req.body.categoriesId,
//   })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Some error occured while creating the Meals",
//       });
//       console.log(err);
//     });
// };
