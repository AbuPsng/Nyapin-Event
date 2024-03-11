import mongoose, { models } from "mongoose";

export type IOrder = {
  createdAt: Date;
  stripeId: string;
  totalAmount: string;
  event: {
    _id: string;
    title: string;
  };
  buyer: {
    _id: string;
    firstName: string;
    lastName: string;
  };
};

const OrderSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now() },
  stripeId: { type: String, required: true },
  totalAmount: { type: String },
  event: {
    _id: mongoose.Schema.Types.ObjectId,
    ref: "Event",
  },
  buyer: {
    _id: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const OrderModel = models.Category || mongoose.model("Order", OrderSchema);

export default OrderModel;
