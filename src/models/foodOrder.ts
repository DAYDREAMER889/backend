import mongoose from "mongoose";

const { Schema, model, Types } = mongoose;

const foodOrder = new Schema({
  user: { type: Types.ObjectId, ref: "User" },
  totalPrice: Number,
  foodOrderItems: [String],
  status: { type: String, enum: ["PENDING", "DELIVERED", "CANCELED"] },
});

export const FoodOrder = model("FoodOrder", foodOrder);
