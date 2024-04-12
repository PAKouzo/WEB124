import { Router } from "express";
import addInventories from "../controllers/inventory.js";
const inventoryRouter = Router();

inventoryRouter.post("/add", addInventories.add);
inventoryRouter.get("/get", addInventories.get);
inventoryRouter.get("/get/instock", addInventories.getInstock);

export default inventoryRouter;
