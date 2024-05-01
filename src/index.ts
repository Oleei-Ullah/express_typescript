import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app : Express = express();
const port = process.env.PORT || 3000;

app.get('/', ( req: Request, res: Response ) => {
    res.status(200).send("Express + Typescript");
})

app.listen(port, () => {
    console.log(`[SERVER]: Sever is running on "http://localhost:${3000}"`);
})