const { Sequelize, DataTypes } = require('sequelize');

const {models} = require('../../sequelize');

class StudentService {
    async GetAll() {
        try {
        return await models.student.findAll({
            include: [{ model: models.course }]
        });
    } catch(err) {
        console.log(err);
    }
    }

    async Post(data) {
        console.log(data);
        let oModel =  await models.student.create({
            name: data.name,
            age: data.age,
            createdAt: new Date(),
            createdBy: 1
        });
       oModel = await oModel.save();

       let oCourse = await models.course.create({
            courseName: 'some course',
            studentId : oModel.id
       })

       await oCourse.save();

        return oModel;
    }
}

module.exports = StudentService;