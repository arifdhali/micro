import type { NextFunction, Request, Response } from "express";
import { prisma } from "../lib/prisma"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { success } from "../modules/response.structer";


export const Login = async (req: Request, res: Response, next: NextFunction) => {
    let error:any;
    const { email, password } = req.body;
    try {
        const isUser = await prisma.user.findUnique({
            where: { email, status: 1 }
        })

        if (!isUser) {
            error = new Error("User does not exists");
            error.status = 404;
            throw error;
        }

        let passwordCorrectOorNot = bcrypt.compare(password, isUser.password);

        if (!passwordCorrectOorNot) {
            error = new Error("User credintals is not valid");
            error.status = 404;
            throw error;
        }

        const payload = {
            id: isUser.id,
            name: isUser.name,
            email: isUser.email,
            role: isUser.role
        }
        let token = jwt.sign(payload, process.env.JWT_LOGIN_SECRET_KEY as any, {
            expiresIn: "15m"
        })

        // auth token
        res.cookie("auth_token", token, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000,
            path: "/",
            sameSite: "lax",
            secure: false,
        });
        if (!isUser.refresh_token) {
            const refreshToken = jwt.sign(payload, process.env.JWT_LOGIN_SECRET_KEY as any, {
                expiresIn: "1d"
            });
            await prisma.user.update({
                where: { email },
                data: {
                    refresh_token: refreshToken
                }
            })
        }

        success(res, null, "User login successfull", 200);

    } catch (err) {
        next(err)
    }


}