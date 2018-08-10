const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    let Cat = sequelize.define("Cat",{
        //TODO
        name: {
            type: Sequelize.TEXT, // google search sequelize model definition

        },
        nickname: {
            type:Sequelize.TEXT,
        },
        price: {
            type: Sequelize.DOUBLE,
        }


    },{
        timestamps:false
    });

    return Cat;
};