const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const ErrorLogModel = sequelize.define('orderia_tb_error_logs', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        message: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        stack: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        x_created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },

    },
    { 
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false 
    }
    )

    return ErrorLogModel;
}