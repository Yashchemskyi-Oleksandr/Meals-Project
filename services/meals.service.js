// const { Meals } = require("../server/models");

// class MealsService {
// static async create(body) {
//   console.log(body);
//   await Meals.create({
//     name: body.name,
//     description: body.description,
//     weight: body.weight,
//     price: body.price,
//     img_path: body.img_path,
//     categoriesId: body.categoriesId,
//   });
// }
// static async getAll() {
//   const meals = await Meals.findAll();
//   return meals;
// }
// static async getById(id) {
//   const meal = await Meals.findByPk(id);
//   return meal;
// }
// static async removeAll() {
//   await Meals.destroy({
//     where: {},
//   });
// }
// static async removeById(id) {
//   await Meals.destroy({
//     where: {
//       id: id,
//     },
//   });
// }
// static async updateById(req) {
//   const id = req.params.id;
//   const data = req.body;
//   console.log(id);
//   console.log(data);
//   const meal = await Meals.update(data, {
//     where: {
//       id: id,
//     },
//   });
//   return meal;
// }
// }

// module.exports = MealsService;
