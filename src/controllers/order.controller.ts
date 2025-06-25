import { Request, Response } from "express";
import { Order } from "../models/order.model.js";


export const getAllOrders = async (request: Request, response: Response) => {
    try {
        const orders = await Order.find().populate("user food");
    
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

export const createOrder = async (request: Request, response: Response) => {
     try {
        const order = request.body;
        const createdOrder = await Order.create(order);

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

    export const getOrderById = async (request: Request, response: Response) => {
        try {
            const { orderId } = request.params; // 6853b667726e33f014c6f024
            const order = await Order.findById(orderId).populate("user food");
         
            response.json({
                success: true,
                data: order,
            });
                 } catch (error) {
                    response.status(444).json({
                         success: false,
                         error: error,
                     });
                }
                          };

                          export const deleteOrder = async (request: Request, response: Response) => {
                                try {
                                    const { orderId } = request.params; // 6853b667726e33f014c6f024
                                    const deletedOrder = await Order.findByIdAndDelete(orderId);
                                 
                                    
                                    response.json({
                                        success: true,
                                        message: "Order deleted successfully",
                                    });
                                }
                                catch (error) {
                                    response.status(444).json({
                                        success: false,
                                        error: error,
                                    });
                                }
                                };




