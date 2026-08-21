import Joi from "joi";

export const loginSchema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).lowercase().required().messages({
        "string.email": "Please provide a valid email address",
        "string.empty": "Email is required",
        "any.required": "Email is required"
    }),
    password: Joi.string()
        .required()
        .min(5)
        .messages({
            "string.empty": "Password is required",
            "string.min": "Password must be greater than 4",
            "any.required": "Password is required",
        }),
})
