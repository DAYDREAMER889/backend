import express from "express";
import authRouter from "./routes/auth.route.js";
import foodsRouter from "./routes/food.route.js";
import mongoose from "mongoose";


mongoose.connect(
  ""
);

const server = express();
server.use(express.json());

const port = 3000;

server.use("/auth", authRouter);
server.use("/food", foodsRouter);

server.get("/", (_request, response) => {
  response.send("Hello Dashka");
});

server.listen(port, () => {
  console.log("Server aslaa");
});