const { MongoClient } = require("mongodb");
require("dotenv").config();

let database;

const initDb = async () => {
  if (database) {
    return database;
  }

  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    database = client.db("cse341");
    console.log("Connected to MongoDB");
    return database;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getDb = () => {
  if (!database) {
    throw new Error("Database not initialized");
  }
  return database;
};

module.exports = {
  initDb,
  getDb,
};