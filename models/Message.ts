import mongoose, { Schema, type Document } from "mongoose"

export interface IMessage extends Document {
  name: string
  email: string
  message: string
  createdAt: Date
}

const MessageSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minlength: [2, "Name must be at least 2 characters long."],
    maxlength: [100, "Name cannot exceed 100 characters."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    trim: true,
    lowercase: true,
    match: [/.+@.+\..+/, "Please enter a valid email address."],
  },
  message: {
    type: String,
    required: [true, "Message is required."],
    trim: true,
    minlength: [10, "Message must be at least 10 characters long."],
    maxlength: [1000, "Message cannot exceed 1000 characters."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Message || mongoose.model<IMessage>("Message", MessageSchema)
