const { Sequelize } = require('sequelize');



const sequelize = new Sequelize('trasdfp', 'root', 'Mohaasdfn@1996', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const modelDefiners = [
    require('./models/course'),
    require('./models/student')
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

const { student, course } = sequelize.models;

student.hasMany(course);
course.belongsTo(student);


// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;