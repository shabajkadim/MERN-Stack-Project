import { Router } from "express";
import { AddProduct } from "../Controller/Product.Controller.js";

const router=Router()

router.post("/add-product",AddProduct)

export default router