import Joi from "joi";

const commentValidator = Joi.object({
    postId: Joi.number().min(1).max(100).required(),
    name: Joi.string().regex(/^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/).required().messages({
        "string.pattern.base": "Name must contains only letters, min 1 symbol, max 20 symbols",
        "string.required": "This field is required",
    }),
    email: Joi.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/).required().messages({
        "string.pattern.base": "Example:john.smith@gmail.com",
        "string.required": "This field is required"
    }),
    body: Joi.string().required()
});

export {commentValidator}