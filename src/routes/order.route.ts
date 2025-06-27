import express from "express";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  deleteOrder,
} from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.get("/", getAllOrders);
orderRouter.post("/", createOrder);
orderRouter.get("/:orderId", getOrderById);
orderRouter.delete("/:orderId", deleteOrder);

export default orderRouter;
