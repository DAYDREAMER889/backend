import express from "express";

import {signUp, signIn} from "../controllers/user.controller.js"

const userRouter = express.Router();

userRouter.post("/signup", signUp);
userRouter.post("/signin", signIn);

export default userRouter;