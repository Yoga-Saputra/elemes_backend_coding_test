const { Course } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async(req, res) => {
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

  const id = req.params.id;
  const course = await Course.findByPk(id);
  if (!course) {
    return res.status(404).json({
      status: 'error',
      message: 'course not found'
    });
  }
  const {
    name, type, price, category
  } = req.body;

  await course.update({
    name,
    type,
    price,
    category
  });

  return res.json({
    status: 'success',
    data: {
      id: course.id,
      name,
      type,
      price,
      category
    }
  });
}