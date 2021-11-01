const { Course } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    name: 'string',
    type: { type: "enum", values: [ "free", "premium" ] },
    price: { type: "number", positive: true, integer: true },
    category: { type: "enum", values: ["all-level","beginner","intermediate","advance","populer"] },
  }

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      status: 'error',
      message: validate
    });
  }
  const data = {
    name: req.body.name,
    type: req.body.type,
    price: req.body.price,
    category: req.body.category
  };

  const createCourse = await Course.create(data);

  return res.json({
    status: 'success',
    data: createCourse
  });
}