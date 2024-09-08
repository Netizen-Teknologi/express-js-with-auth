const db = require("../models")

const ErrorLogModel = db.error_logs;

const storeErrorLog = async (data) => {
    const x_data = {
        message: data.message,
        stack: data.stack,
        x_created_at: db.Sequelize.literal("now()"),
    }

    const result = await ErrorLogModel.create(x_data);

    const response = {
        code: 200,
        message: 'Create log sucessfully',
        data: {
            error_log_id: result.id 
        }
    }

    return response;

}

exports.ErrorLogRepository = { storeErrorLog }