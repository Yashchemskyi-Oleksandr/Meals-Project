const Router = require("express");
const router = new Router();
const categoriesRouter = require("./categoriesRouter");
const mealsRouter = require("./mealsRouter");
const infoRouter = require("./informationRouter");

router.use("/categories", categoriesRouter);
router.use("/meals", mealsRouter);
router.use("/info", infoRouter);

module.exports = router;
