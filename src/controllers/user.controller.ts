import { Request, Response } from "express";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";

export const signIn = async (request: Request, response: Response) => {
  try {
    const { name, password } = request.body;

    const user = await User.findOne({ name });

    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        response.status(200).json({
          success: true,
          message: "Authenticated",
        });
      } else {
        response.status(200).json({
          success: false,
          message: "not authenticated",
        });
      }
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const signUp = async (request: Request, response: Response) => {
  const { name, password } = request.body;

  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    bcrypt.hash(password, salt, async (err, hash) => {
      const createdUser = await User.create({
        name: name,
        password: hash,
      });

      response.status(200).json({
        success: true,
        data: createdUser,
      });
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
 