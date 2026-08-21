import express from "express";
import cors from "cors";
import { adminRoute } from "./routes/index.route"
import errorMiddleware from "./middlewares/error";
import dotenv from "dotenv";
dotenv.config();

const app = express();




app.use(cors({
    origin: [],
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT']
}))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api/admin", adminRoute);


app.use(errorMiddleware);



export default app;