const { Course } = require('../../../models');

module.exports = async (req, res) => {
  const shortHighPrice =  await Course.findAll({
    attributes: ['id', 'name', 'price', 'type', 'category'],
    order: [
      ['price', 'DESC'],
  ],
  })

  return res.json({
    status: 'success', 
    data: shortHighPrice
  });
}