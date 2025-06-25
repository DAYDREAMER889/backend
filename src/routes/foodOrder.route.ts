import express from "express";

import { createFoodOrder } from "../controllers/foodOrder.controller.js";

const foodOrderRouter = express.Router();

foodOrderRouter.post("/", createFoodOrder);

export default foodOrderRouter;


