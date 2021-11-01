const create = require('./create')
const update = require('./update')
const getCount = require('./getCount')
const deleteCourse = require('./deleteCourse')

const getCourse = require('./getCourse')
const getCategoryCourse = require('./getCategoryCourse')
const populerCategoryCourse = require('./populerCategoryCourse')
const detailCourse = require('./detailCourse')
const searchCourse = require('./searchCourse')

module.exports = {
  create,
  update,
  getCount,
  deleteCourse,
  getCategoryCourse,
  populerCategoryCourse,
  getCourse,
  detailCourse,
  searchCourse
}