const db = require('../config/conection');

const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

const studantsModel = sequelize.define('CADASTRO_PESSOA', {
    PES_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    PES_NOME: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    PES_SOBRENOME: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    PES_IDADE: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    PES_PHONE: {
        type: Sequelize.BIGINT,
    },
    PES_CPF: {
        type: Sequelize.BIGINT,
        allowNull: false
    }
},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'CADASTRO_PESSOA'
});

module.exports = studantsModel;