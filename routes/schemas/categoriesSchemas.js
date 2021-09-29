const Joi = require("joi");

const categoriesValidators = {
  categoryName: Joi.string().min(4).max(30).required(),
};

const createCategoriesSchema = Joi.object({
  ...categoriesValidators,
});

const updateCategorySchema = Joi.object({
  id: Joi.string().guid({ version: "uuidv4" }),
  ...categoriesValidators,
});

module.exports = { createCategoriesSchema, updateCategorySchema };
