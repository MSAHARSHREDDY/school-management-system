const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  rollNo: {
    type: Number,
    default: null,
  },
  class: {
    type: Number,
    default: null,
  },
  otp:{
    type: Number,
    default: null,
  },

  isLogin: {
    type: Boolean,
    default: false,
  },
  passwordChange: {
    type: Boolean,
    default: false,
  },
  otpVerified: {
    type: Boolean,
    default: false,
  },
 

  createdAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
});

module.exports = { studentSchema };
