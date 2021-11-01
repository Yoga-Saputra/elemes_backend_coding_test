const { Course } = require('../../../models');

module.exports = async (req, res) => {
  const getCategoryCourse =  await Course.findAll({
    attributes: ['category']
  })

  return res.json({
    status: 'success', 
    data: getCategoryCourse
  });
}