import mongoose, { models } from "mongoose";

export type ICategory = {
  _id: string;
  name: string;
};

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

const CategoryModel =
  models.Category || mongoose.model("Category", CategorySchema);

export default CategoryModel;
