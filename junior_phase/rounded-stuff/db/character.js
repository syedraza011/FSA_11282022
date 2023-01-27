const Sequelize = require('sequelize');
const db =  require('./_db')

//creates character for sequelize structure
const Character = db.define('character',{
    name:{
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    health:{
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
})

module.exports = Character;