import { Router } from "express";
import { Login } from "../controller/user.controller";
import ValidationSchema from "../middlewares/validation";
import { loginSchema } from "../validations/user";
import { AddProduct } from "../controller/product.controller";
export const adminRoute = Router();

// ADMIN============
adminRoute.post("/login", ValidationSchema(loginSchema), Login);
// adminRoute.post("/register");
adminRoute.post("/add-product", AddProduct);
