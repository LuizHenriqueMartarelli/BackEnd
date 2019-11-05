const db = require('../config/conection');

const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

const employeeModel = sequelize.define('employee',{
    E_ID : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    E_FIRSTNAME: {
        type: Sequelize.toString(100),
        allowNull: false
    },
    E_EMAIL: {
        type: Sequelize.toString(100),
        allowNull: false
    },
    E_PASSWORD: {
        type: Sequelize.toString(100),
        allowNull: false
    }
},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'employee'
});

module.exports = employeeModel;