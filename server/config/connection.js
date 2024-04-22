const mongoose = require("mongoose");

// URL from environment or default to local MongoDB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://acuspikecris:MOL628826@clustercris.shb0f7p.mongodb.net/HANZEL-GALLERY";

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Event for successful connection
db.on("connected", () => {
  console.log(`Mongoose connection open to ${MONGODB_URI}`);
});

// Event for connection error
db.on("error", (err) => {
  console.error(`Mongoose connection error: ${err}`);
  process.exit(1); // Terminate the application with an error code
});

// Event for disconnection
db.on("disconnected", () => {
  console.log("Mongoose connection disconnected");
});

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
  db.close(() => {
    console.log("Mongoose connection disconnected through app termination");
    process.exit(0); // Exit without error code
  });
});

module.exports = db;
