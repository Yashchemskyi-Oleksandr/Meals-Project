const { Router } = require("express");
const router = new Router();
const {
  updateInformationSchema,
} = require("../routes/schemas/informationSchemas");
const validation = require("../middleware/validation");

const {
  create,
  update,
  get,
} = require("../controllers/information.controller");

router.get("/", get);

router.post("/", create);

router.put("/", validation(updateInformationSchema), update);

module.exports = router;
