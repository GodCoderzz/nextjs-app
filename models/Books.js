const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true }
}, { timestamps: true });

mongoose.models = {}


export default mongoose.model("Books", booksSchema);  