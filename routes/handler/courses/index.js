const create = require('./create')
const update = require('./update')
const getCount = require('./getCount')
const deleteCourse = require('./deleteCourse')

const getCourse = require('./getCourse')
const getCategoryCourse = require('./getCategoryCourse')
const populerCategoryCourse = require('./populerCategoryCourse')
const detailCourse = require('./detailCourse')
const searchCourse = require('./searchCourse')
const sortHighPrice = require('./sortHighPrice')
const sortLowPrice = require('./sortLowPrice')
const getFreeCourse = require('./getFreeCourse')

module.exports = {
  create,
  update,
  getCount,
  deleteCourse,
  getCategoryCourse,
  populerCategoryCourse,
  getCourse,
  detailCourse,
  searchCourse,
  sortHighPrice,
  sortLowPrice,
  getFreeCourse
}
