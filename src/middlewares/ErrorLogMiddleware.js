const ErrorLog = (err, req, res, next) => {
    console.error('ErrorLogMiddleware: ', err); // Log error

    next(err); // NEXT TO ERROR LOG CONTROLLER
}

exports.ErrorLog = ErrorLog;