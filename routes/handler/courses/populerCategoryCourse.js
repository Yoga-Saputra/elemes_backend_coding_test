const { Course } = require('../../../models');

module.exports = async (req, res) => {
  const populerCategoryCourse =  await Course.findAll({
    where: {category: 'populer'},
    attributes: ['category'],
    group: ['category']
  })

  return res.json({
    status: 'success', 
    data: populerCategoryCourse
  });
}