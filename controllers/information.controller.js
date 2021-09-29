const { Info } = require("../models/models");

const create = async (req, res) => {
  try {
    const information = await Info.create({
      address: req.body.address,
      contacts: req.body.contacts,
      wiFi: req.body.wiFi,
    });
    res.status(201).json(information);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const get = async (req, res) => {
  try {
    const information = await Info.findOne(req.body);
    res.status(200).send(information);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const data = req.body;

    await Info.update(data, { where: {} });
    const updatedInfo = await Info.findOne();

    res.status(200).json(updatedInfo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  create,
  get,
  update,
};
