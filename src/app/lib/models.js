/* 

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20,
  },
  lastname: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
    
  },
  date: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
    unique: true,
  },
}, {
  timestamps: true
});

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  img: {
    type: String,
  },
  desc: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
 */