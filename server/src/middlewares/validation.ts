import type { NextFunction, Request, Response } from "express";

const ValidationSchema = (schema: any) => {

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await schema.validateAsync(req.body, { abortEarly: false });
            next();
        } catch (err) {
            next(err)
        }

    }
}

export default ValidationSchema;