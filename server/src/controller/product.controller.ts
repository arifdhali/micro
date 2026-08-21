import type { NextFunction, Request, Response } from "express";
import { prisma } from "../lib/prisma"
import { success } from "../modules/response.structer";
import path from "path";


export const AddProduct = async (req: Request, res: Response, next: NextFunction) => {

    try {

        // 
        let s = path.join(process.cwd(), "upload", "products");
        console.log(s)
        const { name, description, short_description, price, compare_price, stock } = req.body;

        // slug , sku






    } catch (error) {
        next(error)
    }

}