const mongoose = require('mongoose')
const mongoURI = "mongodb://abcuser:abcpass@mongo:27017/abcdb?authSource=admin";

// if node and mongo deployed on container manually then mongoURI = "mongodb://abcuser:abcpass@mongo:27017/abcdb?authSource=admin" and mongoose.connect(mongoURI) like that
// process.env.mongoURI if we use coolify to deploy both 

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect("mongodb://root:ZWDYpuem7HoBuHRxcUTGRNuVLL5sgaz3fm2SqZrCQfRkPGHGHSuhZDb2ONVNo6nC@z8cck48g4ws0k0ccgkc40kok:27017/?directConnection=true");
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
