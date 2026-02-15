import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minLength: 1,
            maxLength: 16
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        role: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minLength: 6,
            maxLength: 30
        }
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("Users", userSchema);