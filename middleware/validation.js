const validation = (schema, property) => {
  return (req, res, next) => {
    console.log(req.body);
    const { error } = schema.validate(req.body);
    if (!error) {
      next();
    } else {
      let errorMessage = "";
      for (const err of error.details) {
        errorMessage +=
          "" +
          err.path.join(" > ") +
          err.message.slice(err.message.lastIndexOf('"') + 1) +
          "";
      }
      res.status(400).send({ message: errorMessage });
    }
  };
};

module.exports = validation;
