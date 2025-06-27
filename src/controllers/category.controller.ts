import { Request, Response } from "express";
import { Category } from "../models/category.model.js";

export const getAllCategory = async (request: Request, response: Response) => {
  try {
    const category = await Category.find();

    response.json({
      success: true,
      data: category,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const createCategory = async (request: Request, response: Response) => {
  try {
    const category = await Category.find();

    response.json({
      success: true,
      data: category,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const deleteCategory = async (request: Request, response: Response) => {
  try {
    const { foodCategoryId } = request.params;
    const category = await Category.findById(foodCategoryId);

    response.json({
      success: true,
      data: category,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const uptadeCategory = async (request: Request, response: Response) => {
  try {
    const { foodCategoryId } = request.params;
    const uptadedCategory = request.body;

    const category = await Category.findByIdAndUpdate(
      foodCategoryId,
      uptadedCategory,
      {
        new: true,
      }
    );

    response.json({
      success: true,
      data: category,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
