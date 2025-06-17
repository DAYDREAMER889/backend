import express from "express";
import {
    getRefresh,
    getSignIn,
    getSignUp,
    getResetPasswordRequest,
    getVerifyPassword,
    getResetPassword,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.get("/refresh", getRefresh);
authRouter.post("/signin", getSignIn);
authRouter.post("/signup", getSignUp);
authRouter.post("/reset-password-request", getResetPasswordRequest);
authRouter.get("/verify-password", getVerifyPassword);
authRouter.post("/reset-password", getResetPassword);

export default authRouter;
