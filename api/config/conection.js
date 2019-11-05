const Sequelize = require('sequelize').Sequelize;
const Constants = require('../../consts');

const sequelize = new Sequelize(
    Constants.db,
    Constants.dbUser,
    Constants.dbPassword,
    Constants.dbParametros
);

const db = {
    sequelize,
    Sequelize
};

module.exports = db;
