const { Schema, model, Types } = require("mongoose");

const CustomerSchema = new Schema(
  {
    cusNo: { type: String, required: true },
    cusId: { type: String },
    cusPwd: { type: String },
    cusName: { type: String },
    cusTel: { type: String },
    cusAddr: { type: String },
  },
  { timestamps: true }
);

const Cust = model("cust", CustomerSchema);
module.exports = { Cust };
