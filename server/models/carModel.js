const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarModel = new Schema(
  {
    model_name: { type: String, required: true },
    car_type: { type: String, required: true },
    car_image: { type: String, required: true },
    car_brand: { type: Schema.Types.ObjectId, ref: "car_brands" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("car_models", CarModel);