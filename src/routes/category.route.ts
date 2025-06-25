import express from "express";

import {
    getAllCategory,
    createCategory,
    deleteCategory,
    uptadeCategory,
} from "../controllers/category.controller.js"

const categoryRouter = express.Router();

categoryRouter.get("/", getAllCategory);
categoryRouter.post("/", createCategory);
categoryRouter.patch("/foodCategoryId", uptadeCategory);
categoryRouter.delete("/foodCategoryId", deleteCategory);


export default categoryRouter;


