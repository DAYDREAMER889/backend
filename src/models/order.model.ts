import mongoose from "mongoose";

const { Schema, model } = mongoose;

const order = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  totalPrice: Number,
  FoodOrderItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "Food",
    },
  ],
  createdAt: Date,
  updatedAt: Date,
});

export const Order = model("Order", order);
