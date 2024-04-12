import { Router } from "express";
import authRouter from "./users.js";
import orderRouter from "./order.js";
import inventoryRouter from "./inventory.js";
const router = Router();

router.use("/users", authRouter);
router.use("/orders", orderRouter);
router.use("/inventories", inventoryRouter);

export default router;
