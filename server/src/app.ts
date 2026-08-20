import express from "express";
import cors from "cors";
const app = express();

app.use(cors({
    origin: [],
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT']
}))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




export default app;