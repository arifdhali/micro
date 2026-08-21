import Joi from "joi";

export const AddProductSchema = Joi.object({
    name: Joi.string().trim().required().messages({
        "string.empty": "Name is required",
        "any.required": "Name is required",
    }),

    description: Joi.string().trim().required().messages({
        "string.empty": "Description is required",
        "any.required": "Description is required",
    }),

    short_description: Joi.string().trim().allow(""),

    price: Joi.number().positive().required().messages({
        "number.positive": "Price must be positive",
        "number.base": "Price must be a number",
        "any.required": "Price is required",
    }),

    compare_price: Joi.number().positive().required().messages({
        "number.positive": "Compare price must be positive",
        "number.base": "Compare price must be a number",
        "any.required": "Compare price is required",
    }),

    stock: Joi.number().integer().min(0).required().messages({
        "number.base": "Stock must be a number",
        "number.integer": "Stock must be an integer",
        "number.min": "Stock cannot be negative",
        "any.required": "Stock is required",
    }),

    category_id: Joi.number().integer().required().messages({
        "number.base": "Category ID must be a number",
        "number.integer": "Category ID must be an integer",
        "any.required": "Category ID is required",
    }),

    status: Joi.string()
        .valid("active", "inactive")
        .default("active"),
});