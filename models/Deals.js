const mongoose = require('mongoose');

const dealsSchema = new mongoose.Schema({
  oid: {type: Number, required: true},  
  title: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  brand: {type: String},
  category: { type: String, required: true },
  price: { type: Number, required: true },
  discount: {type: String}
}, { timestamps: true });

mongoose.models = {}


export default mongoose.model("Deals", dealsSchema);  