const { Course, User } = require('../../../models');

module.exports = async (req, res) => {
  const courses =  await Course.count()
  const total_courses_free =  await Course.count({
    where: {type: 'free'}
  })

  const total_user = await User.count()

  return res.json({
    status: 'success', 
    data: {
      total_user,
      total_course: courses,
      total_courses_free,
    }
  });
}