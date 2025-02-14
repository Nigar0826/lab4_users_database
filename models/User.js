const mongoose = require('mongoose');

// Define User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, minlength: 4 },
  email: { type: String, required: true, match: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/ },
  address: {
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: { type: String, required: true, match: /^[a-zA-Z\s]+$/ },
    zipcode: { type: String, required: true, match: /^\d{5}-\d{4}$/ },
    geo: {
      lat: { type: String, required: true },
      lng: { type: String, required: true }
    }
  },
  phone: { type: String, required: true, match: /^1-\d{3}-\d{3}-\d{4}$/ },
  website: { type: String, required: true, match: /^(https?:\/\/)[\w-]+(\.[\w-]+)+/ },
  company: {
    name: { type: String, required: true },
    catchPhrase: { type: String, required: true },
    bs: { type: String, required: true }
  }
});

// Export the User model
module.exports = mongoose.model('User', userSchema);
