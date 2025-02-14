const mongoose = require('mongoose');
const User = require('./models/User');
const users = require('./UsersData.json');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log("MongoDB Connected");

  try {
    // Insert all users from UsersData.json into the database
    await User.insertMany(users);
    console.log("Users Imported Successfully!");
  } catch (error) {
    console.error("Error importing users:", error);
  } finally {
    mongoose.connection.close();  // Close database connection after operation
  }
}).catch(err => console.log("MongoDB Connection Error:", err));
