const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarBrand = new Schema(
  {
    title: { type: String, required: true },
    country_of_origin: { type: String, required: true },
    website_link: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("car_brands", CarBrand);
