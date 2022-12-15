const validate = require('express-validator')
module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define(
        "users", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            Name: {
                type: Sequelize.STRING(150),
                allowNull: false,
                validate: {
                    notEmpty: true,
                    max: 12,
                    min: 3,
                }
            },
            Mobile: {
                type: Sequelize.STRING(12),
                allowNull: false,
                // validate: {

                //     notEmpty: true,
                //     max: 13,
                //     min: 3,

                // }
            },
            Email: {
                type: Sequelize.STRING(250),
                allowNull: false

            },
            Password: {
                type: Sequelize.STRING(12),
                allowNull: false,
                validate: {

                    notEmpty: true,
                    max: 13,
                    min: 3,

                }

            }
        }

        , {
            freezeTableName: true,
            //   timestamps: true,
            //   createdAt: "created_at",
            //   updatedAt: "updated_at"
        }
    );

    return model;
};