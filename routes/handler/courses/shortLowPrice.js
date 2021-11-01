const { Course } = require('../../../models');

module.exports = async (req, res) => {
  const shortLowPrice =  await Course.findAll({
    attributes: ['id', 'name', 'price', 'type', 'category'],
    order: [
      ['price', 'ASC'],
  ],
  })

  return res.json({
    status: 'success', 
    data: shortLowPrice
  });
}