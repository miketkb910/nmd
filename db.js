const mongoose = require('mongoose')
const mongoURI = "mongodb://abcuser:abcpass@mongo:27017/abcdb?authSource=admin";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
