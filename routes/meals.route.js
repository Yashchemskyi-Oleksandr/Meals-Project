const { Router } = require("express");
const mealsController = require("../controllers/meals.controller");
const { route } = require("./categories.route");

const router = Router();

router.post("/", mealsController.create);

//// получение всех блюд
router.get("/", mealsController.getAll);

/// получение по id /// google
router.get("/:id", mealsController.getById);

/// удаление всех блюд
// router.delete("/", mealsController.removeAll);

/// удаление блюд по id
router.delete("/:id", mealsController.removeById);

/// обновление блюд по id
router.put("/:id", mealsController.updateById); /// change to patch

module.exports = router;

// info:

////// model(generate by terminal command) => router(don't forget connect to app.js) => controller => services

/////
