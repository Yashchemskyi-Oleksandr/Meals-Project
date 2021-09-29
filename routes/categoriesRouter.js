const { Router } = require("express");
const router = new Router();

const {
  createCategoriesSchema,
  updateCategorySchema,
} = require("../routes/schemas/categoriesSchemas");

const validation = require("../middleware/validation");

const {
  create,
  getAll,
  removeById,
  updateById,
  getById,
} = require("../controllers/categories.controller");

router.get("/", getAll);

router.get("/:id", getById);

router.post("/", validation(createCategoriesSchema), create);

router.patch("/:id", validation(updateCategorySchema), updateById);

router.delete("/:id", removeById);

module.exports = router;
