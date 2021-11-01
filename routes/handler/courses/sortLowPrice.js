const { Course } = require('../../../models');

module.exports = async (req, res) => {
  const sortLowPrice =  await Course.findAll({
    attributes: ['id', 'name', 'price', 'type', 'category'],
    order: [
      ['price', 'ASC'],
  ],
  })

  return res.json({
    status: 'success', 
    data: sortLowPrice
  });
}