const { Router } = require("express");
const categoriesController = require("../controllers/categories.controller");

const router = Router();

router.get("/", categoriesController.getAll); /// get all cats

router.post("/", categoriesController.create); /// create cat

// router.delete("/", categoriesController.removeAll); /// delete all cats

router.delete("/:id", categoriesController.removeById); /// delete cat by id

module.exports = router;
