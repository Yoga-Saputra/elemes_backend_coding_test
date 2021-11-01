const express = require('express');
const router = express.Router();
const coursesHandler = require('./handler/courses')
const verifyToken = require('../middleware/verifyToken')
const rolePermission = require('../middleware/rolePermission')


// admin permission
router.post('/create', verifyToken, rolePermission('admin'),  coursesHandler.create)
router.put('/update/:id', verifyToken, rolePermission('admin'),  coursesHandler.update)
router.get('/getTotal', verifyToken, rolePermission('admin'),  coursesHandler.getCount)
router.post('/delete/:id', verifyToken, rolePermission('admin'),  coursesHandler.deleteCourse);

// user permission
// get category course
// router.get('/', verifyToken, rolePermission('admin'),  coursesHandler.getAllCourses)

module.exports = router;
