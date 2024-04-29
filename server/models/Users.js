const mongoose = require("mongoose");
const { Schema, model } = mongoose;
// const { Schema, model } = require('mongoose');
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  // firstname
  // lastname
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  // username: {
  //     type: String,
  //     required: true,
  //     unique: true,
  //     trim: true,
  //   },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
});
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const somePassword = 12;
    this.password = await bcrypt.hash(this.password, somePassword);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
