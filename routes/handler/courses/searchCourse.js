const { Course } = require('../../../models');

const { Op } = require("sequelize");

module.exports = async (req, res) => {
  const nameCourse = req.query.name_course || [];
  const userId = req.query.user_ids || [];
  const priceCourse = req.query.price_course || [];
  const typeCourse = req.query.type_course || [];
  const categoryCourse = req.query.category_course || [];

  const searchCourse =  await Course.findAll({
    attributes: ['id', 'name', 'price', 'type', 'category'],
    where: {
      [Op.or]: [
        { name: nameCourse },
        { id: userId },
        { price: priceCourse },
        { type: typeCourse },
        { category: categoryCourse }
      ]
    }
  });
  return res.json({
    status: 'success', 
    data: searchCourse
  });
} 