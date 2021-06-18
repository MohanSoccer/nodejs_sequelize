const ApiError = require("./api.exception")

const apiErrorHandler = (err,req,res,next)  => {
    if(err instanceof ApiError) {
        res.status(err.code).json({
            code: err.code,
            message: err.message
        })
        return;
    }
    res.status(500).json({
        code: 500,
        message: 'Something went wrong'
    });
}

module.exports = apiErrorHandler;