const db = require("../models");
const { ErrorLogRepository } = require("../repositories/ErrorLogRepository");

const handleError = async (err, req, res, next) => {
    try {
        console.error('ErrorLogController:', err); // Log error
        
        // store error to database
        const resultStoreLog = await ErrorLogRepository.storeErrorLog(err);
        console.log("resultStoreLog: ", resultStoreLog.message)

        res.status(500).json({
            data: resultStoreLog.data,
            message: process.env.APP_DEBUG === "true" ? err.message : 'Internal Server Error',
            ...(process.env.APP_DEBUG === "true" ? { stack: err.stack } : {}) // Include stack trace in development

        });
    } catch (err) {
        console.error('ErrorLogController on catch :', err); // Log error
        res.status(500).json({
            message: process.env.APP_DEBUG === "true" ? err.message : 'Internal Server Error',
            ...(process.env.APP_DEBUG === "true" ? { stack: err.stack } : {}) // Include stack trace in development

        });

    }
}

exports.ErrorLogController = { handleError };