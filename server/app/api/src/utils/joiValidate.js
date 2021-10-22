import Joi from "joi";
import createHttpError from "http-errors";

const Schema = Joi.object({
    name:
        Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
    email:
        Joi.string()
            .min(3)
            .max(30)
            .required()
}).options({ abortEarly: false });

async function ValidateMiddleware(req, res, next) {
    try {
        await Schema.validateAsync(req.body);
        next();
    } catch (error) {
        next(createHttpError(422, error));
    }
}


export {
    ValidateMiddleware,
};
