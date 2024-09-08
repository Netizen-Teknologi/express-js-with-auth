const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const UserModel = sequelize.define('orderia_tb_user', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        phoneNumber: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                is: /^\+?[1-9]\d{1,14}$/
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        x_created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        x_updated_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },

    },
    { 
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false 
    }
    )

    return UserModel;
}