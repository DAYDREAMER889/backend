import express from "express";

import foodsRouter from "./routes/food.route.js";
import authRouter from "./routes/auth.route.js";

const server = express();
server.use(express.json());

const port = 3000;


server.use("/auth", authRouter);

server.get("/", (_request, response) => {
  response.send("Hello Dashka");
});

server.listen(port, () => {
  console.log("Server aslaa");
});