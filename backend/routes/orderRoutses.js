import express from "express";
import { placeOrder } from "../middelware/ordercontroller.js";

const router = express.Router();

router.post("/", placeOrder);

export default router;
