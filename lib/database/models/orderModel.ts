import mongoose, { Schema, models } from "mongoose";

export type IOrder = {
  createdAt: Date;
  stripeId: string;
  totalAmount: string;
  event: mongoose.Types.ObjectId; // Correct reference type
  buyer: mongoose.Types.ObjectId; // Correct reference type
};

const OrderSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now() },
  stripeId: { type: String, required: true },
  totalAmount: { type: String },
  event: {
    type: Schema.Types.ObjectId, // Correct usage
    ref: "Event",
  },
  buyer: {
    type: Schema.Types.ObjectId, // Correct usage
    ref: "User",
  },
});

const OrderModel = models.Order || mongoose.model("Order", OrderSchema); // Correct model naming

export default OrderModel;
