import { Request, Response } from "express";
import {FoodOrder} from "../models/foodOrder.js"


export const createFoodOrder = async (request: Request, response: Response) => {
  try {
   const foodOrder = request.body;
   const createdOrder = await FoodOrder.create(foodOrder);

    response.json({
      success: true,
      data: createdOrder,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};


export const getAllFoodOrders = async (request: Request, response: Response) => {
  try {
   
   const orders = await FoodOrder.find().populate("user");

    response.json({
      success: true,
      data: orders,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
