const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const course = sequelize.define('course', {
        courseName: {
            type: DataTypes.STRING
        },
        studentId: {
          type: DataTypes.INTEGER
      }
    },{
        freezeTableName: true
    });

    course.associate = function (models)  {
      course.belongsTo(models.student);
      };

    return course;
}