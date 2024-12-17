import mongoose, { Model, Document } from "mongoose";

// Define the User schema interface
interface IUser extends Document {
  email: string;
  userName: string;
  image?: string; // Optional
  createdAt?: Date;
  updatedAt?: Date;
}

// Create the schema
const userSchema = new mongoose.Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    userName: { type: String, required: true },
    image: { type: String },
  
  },
  { timestamps: true } // Automatically manages `createdAt` and `updatedAt`
);

// Ensure the model is defined properly
const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
