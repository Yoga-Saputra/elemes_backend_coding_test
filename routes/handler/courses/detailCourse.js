const { Course } = require('../../../models');

module.exports = async(req, res) => {

  const id = req.params.id;
  const course = await Course.findByPk(id);

  if (!course) {
    return res.status(404).json({
      status: 'error',
      message: 'course not found'
    });
  }

  return res.json({
    status: 'success',
    data: {
      id: course.id,
      name: course.name,
      price: course.price,
      type: course.type,
      category: course.category
    }
  });
}