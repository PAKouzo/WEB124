import OrdersModel from "../model/order.js";
import dotenv from "dotenv";

dotenv.config();
const addOrders = {
  add: async (req, res) => {
    const { id, item, price, quantity } = req.body;

    const add = await OrdersModel.create({
      id,
      item,
      price,
      quantity,
    });
    res.status(201).send({
      message: "Register successful",
      data: add
    });
  },
  get: async (req, res) => {
    try {
      const orders = await OrdersModel.find().populate('item');
      res.status(200).send({
        message: "Getting successful",
        data: orders
      })
    } catch (err) {
      res.status(500).send({
        message: "Error getting orders",
        data: null,
        error: err.message
      })
    }
  }
};

export default addOrders;
