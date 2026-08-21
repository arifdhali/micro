import type { ErrorRequestHandler } from "express";
import { error } from "../modules/response.structer";

interface JoiErrorDetail {
    path: (string | number)[];
    message: string;
}

const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
    if (err.isJoi) {
        let erros = err.details.map((detail: JoiErrorDetail) => {
            return {
                field: detail.path[0],
                message: detail.message
            }
        })
        error(res, erros, "Validation error", 400)
    }
    error(res, null, err.message, err.status);
    next(err);
}

export default errorMiddleware;