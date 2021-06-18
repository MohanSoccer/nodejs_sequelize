
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    let student = sequelize.define('student', {
        name: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        },
        createdAt: {
            type: DataTypes.DATE
        },
        createdBy: {
            type: DataTypes.INTEGER
        }
    }, 
    {
        freezeTableName: true,
    });

    student.associate = function (models) {
        student.hasMany(models.course , { foreignKey: 'studentId'});
    };


    return student;
}