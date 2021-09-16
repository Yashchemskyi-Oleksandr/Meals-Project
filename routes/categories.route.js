const { Router } = require("express");
// const categoriesController = require("../controllers/categories.controller");
const {
  createCategories,
  getAllCategories,
  removeCategoriesById,
} = require("../controllers/categories.controller");

const router = Router();

router.post("/", createCategories); /// create cat

router.get("/", getAllCategories); /// get all cats

// router.delete("/", categoriesController.removeAll); /// delete all cats

router.delete("/:id", removeCategoriesById); /// delete cat by id

module.exports = router;
