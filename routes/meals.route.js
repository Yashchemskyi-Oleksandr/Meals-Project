const { Router } = require("express");
// const mealsController = require("../controllers/meals.controller");
const {
  createMeal,
  getAllMeals,
  getByIdMeal,
  removeByIdMeal,
  updateByIdMeal,
} = require("../controllers/meals.controller");

const { route } = require("./categories.route");

const router = Router();

router.post("/", createMeal);

//// получение всех блюд
router.get("/", getAllMeals);

/// получение по id /// google
router.get("/:id", getByIdMeal);

/// удаление всех блюд
// router.delete("/", mealsController.removeAll);

/// удаление блюд по id
router.delete("/:id", removeByIdMeal);

/// обновление блюд по id
router.put("/:id", updateByIdMeal); /// change to patch

module.exports = router;

// info:

////// model(generate by terminal command) => router(don't forget connect to app.js) => controller => services

/////
