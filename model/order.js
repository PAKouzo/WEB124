import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'inventories',
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    }
});
const OrdersModel = mongoose.model('orders', orderSchema);

export default OrdersModel;
