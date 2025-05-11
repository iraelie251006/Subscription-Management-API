import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String, 
        required: [true, "User Name is required"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters long"],
        maxLength: [50, "Name must be at most 50 characters long"],
    },
    email: {
        type: String, 
        required: [true, "User Email is required"],
        lowercase: true,
        unique: true,
        trim: true,
        match: [/\S+@\S+.\S+/, "Please fill valid email."],
    },
    password: {
        type: String,
        required: [true, "User Password is required"],
        minLength: [6, "Password must be at least 6 characters long"],
    }
}, {timestamps: true})

const User = model("User", userSchema);

export default User;

