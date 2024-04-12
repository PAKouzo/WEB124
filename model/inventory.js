import mongoose from "mongoose";
const inventorySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instock: {
    type: Number,
    required: true,
  },
});
const InventoryModel = mongoose.model("inventories", inventorySchema);

export default InventoryModel;
