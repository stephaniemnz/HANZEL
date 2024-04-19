const Joi = require('joi');

exports.validateUser = (data) => {
    const schema = Joi.object({
        username: Joi.string().alphanumeric().min(3).max(30).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    });
    return schema.validate(data);
};