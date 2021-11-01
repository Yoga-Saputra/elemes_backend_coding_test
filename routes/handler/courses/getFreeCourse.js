const { Course } = require('../../../models');

module.exports = async (req, res) => {
  const getFreeCourse =  await Course.findAll({
    attributes: ['id', 'name', 'price', 'type', 'category'],
    where: {type: "free"}
  })

  return res.json({
    status: 'success', 
    data: getFreeCourse
  });
}