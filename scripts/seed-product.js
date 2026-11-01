const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/product");

dotenv.config();

async function seedProduct() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Product.deleteMany({ pid: "P001" });

    await Product.create({
      pid: "P001",
      pname: "Laptop",
      price: 15000000,
      quantity: 10
    });

    console.log("Da them san pham mau P001");

    await mongoose.connection.close();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

seedProduct();