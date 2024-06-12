const globalErrorHandler = (err, req, res, next) => {
    const code = err.code || 500;
    res.status(code).send({
        code: err.code,
        message: err.message || "Internal Server Error!"
    })
   
};

module.exports = globalErrorHandler;