const express = require('express');
const  ArrayResponse  = require('../../../response/array-response/array.response');
const router = express.Router();
const StudentService = require('../../services/student/student.service');
const joi = require('../../viewmodels/student/student.model');
let studentService = new StudentService();

router.get('/', async (req,res,next) => {
    const response = new ArrayResponse();
    const oModel = await studentService.GetAll();
    response.pageNumber = 1
    response.pageSize = 10;
    response.totalRecords = 20;
    res.json(response);
})

router.post('/', joi.studentValidation, async (req,res,next) => {
    let oPost = await studentService.Post(req.body);
    res.json(oPost);
})

module.exports = router;