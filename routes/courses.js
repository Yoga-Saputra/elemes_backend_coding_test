const express = require('express');
const router = express.Router();
const coursesHandler = require('./handler/courses')
const verifyToken = require('../middleware/verifyToken')
const rolePermission = require('../middleware/rolePermission')


// admin permission
router.post('/create', verifyToken, rolePermission('admin'),  coursesHandler.create)
router.put('/update/:id', verifyToken, rolePermission('admin'),  coursesHandler.update)
router.get('/get-total', verifyToken, rolePermission('admin'),  coursesHandler.getCount)
router.post('/delete/:id', verifyToken, rolePermission('admin'),  coursesHandler.deleteCourse);

// user permission
router.get('/detail-course/:id', verifyToken, rolePermission('user'),  coursesHandler.detailCourse)
router.get('/get-course', verifyToken, rolePermission('user'),  coursesHandler.getCourse)
router.get('/category-course', verifyToken, rolePermission('user'),  coursesHandler.getCategoryCourse)
router.get('/populer-category-course', verifyToken, rolePermission('user'),  coursesHandler.populerCategoryCourse)
router.post('/search-course', verifyToken, rolePermission('user'),  coursesHandler.searchCourse)

module.exports = router;
