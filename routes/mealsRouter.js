const Router = require("express");
const router = new Router();
const {
  createMealsSchema,
  updateMealsSchema,
} = require("../routes/schemas/mealsSchemas");
const validation = require("../middleware/validation");
const {
  create,
  getAll,
  getById,
  removeById,
  updateById,
  getByCategories,
} = require("../controllers/meals.controller");

router.get("/", getAll);

router.get("/edit-meal/:id", getById);

router.get("/:id", getByCategories);

router.put("/:id", validation(updateMealsSchema), updateById);

router.post("/", validation(createMealsSchema), create);

router.delete("/:id", removeById);

module.exports = router;
