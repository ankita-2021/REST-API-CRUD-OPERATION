const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://ankitachakrawarti:Misscoder2023@cluster0.ked8um1.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("MongoDB database  is Connected");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
