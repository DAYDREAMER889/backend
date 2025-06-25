import express from "express";
// import authRouter from "./routes/auth.route.js";
import foodsRouter from "./routes/food.route.js";
import mongoose from "mongoose";
import { Category } from "./models/category.model.js";
import categoryRouter from "./routes/category.route.js";
import orderRouter from "./routes/order.route.js";
import dotenv from "dotenv"

dotenv.config();


mongoose.connect(process.env.MONGO_URL as string);

const server = express();
server.use(express.json());

const port = process.env.PORT;

// server.use("/auth", authRouter);
server.use("/food", foodsRouter);
server.use("/category", categoryRouter);
server.use("/foodOrder", foodsRouter);
server.use("/order", orderRouter);




server.get("/", (_request, response) => {
  response.send("Hello");
});

server.listen(port, () => {
  console.log("Server aslaa");
});