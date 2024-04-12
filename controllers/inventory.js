import InventoryModel from "../model/inventory.js";
import dotenv from "dotenv";

dotenv.config();
const addInventories = {
  add: async (req, res) => {
    const { id, sku, description, instock } = req.body;

    const add = await InventoryModel.create({
      id,
      sku,
      description,
      instock,
    });
    res.status(201).send({
      message: "Register successful",
      data: add,
    });
  },
  get: async (req, res) => {
    try {
      const inventories = await InventoryModel.find();
      res.status(200).send({
        message: "Getting inventories successfully",
        data: inventories,
      });
    } 
    catch (err) {
      res.status(500).send({
        message: "Getting inventories failed",
        data: null,
        error: err.message,
      });
    }
  },
  getInstock: async (req, res) => {
    try {
      const { instock } = req.query;
      const inventories = await InventoryModel.find({instock: { $lt: instock }});
      res.status(200).send({
        message:"Getting inventories which have instock less than 100 successfully",
        data: inventories,
      });
    } 
    catch (err) {
      res.status(500).send({
        message: "Getting inventories failed",
        data: null,
        error: err.message,
      });
    }
  },
};
export default addInventories;
