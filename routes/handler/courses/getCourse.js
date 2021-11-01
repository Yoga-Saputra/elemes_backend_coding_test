const { Course } = require('../../../models');

module.exports = async (req, res) => {
  const getCourse =  await Course.findAll({
    attributes: ['id', 'name', 'price', 'type', 'category']
  })

  return res.json({
    status: 'success', 
    data: getCourse
  });
}