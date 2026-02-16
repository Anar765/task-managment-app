import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema.create(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        difficulty: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const Task = mongoose.model("Tasks", taskSchema);