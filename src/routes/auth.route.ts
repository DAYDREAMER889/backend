import express from "express";
import { createUser } from "../controllers/user.controller.js";
import {
    getRefresh,
    getSignIn,
    createUser,
    getResetPasswordRequest,
    getVerifyPassword,
    getResetPassword,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.get("/refresh", getRefresh);
authRouter.post("/signin", getSignIn);
authRouter.post("/signup", createUser);
authRouter.post("/reset-password-request", getResetPasswordRequest);
authRouter.get("/verify-password", getVerifyPassword);
authRouter.post("/reset-password", getResetPassword);

export default authRouter;
