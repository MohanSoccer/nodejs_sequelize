const ApiError = require("../../../response/api.exception");

const Joi = require('joi');
const ArrayResponse = require("../../../response/array-response/array.response");

const studentValidation = async (req, res, next) => {

    try {
        const schema = Joi.object().keys({
            name: Joi.string().required(),
            age: Joi.string().required()
        });

        const { error } = schema.validate(req.body);

        if (error) {
            next(new ApiError(400, error.details[0].message));
            return;
        } else {
            next();
        }
    } catch (err) {
        next(new ApiError(400, err));
    }
}

module.exports.studentValidation = studentValidation;
