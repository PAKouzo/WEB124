import { Router } from "express";
import addOrders from "../controllers/order.js";
const orderRouter = Router();

orderRouter.post("/add", addOrders.add);
orderRouter.get("/get", addOrders.get);

export default orderRouter;
