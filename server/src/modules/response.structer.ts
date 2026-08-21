import type { Response } from "express"

export const error = (res: Response, error: [] | null = [], message: string = "error", statusCode: number = 400) => {
    return res.status(statusCode).json({
        errors: error,
        message: message
    })
}

export const success = (res: Response, records: [] | null = [], message: string = "success", statusCode: number = 400) => {

    return res.status(statusCode).json({
        message: message,
        records
    })

}