import { Task } from "../models/task.model.js";
import mongoose from "mongoose";

const createTask = async(req, res) => {
    try {
        const { title, description, category, status, difficulty, date } = req.body;
        const { userId } = req.params;

        if(!title || !description || !category || !status || !difficulty || !date) {
            return res.status(400).json({
                message: "All fields are important"
            });
        }

        const task = await Task.create({
            title,
            description,
            category,
            status,
            difficulty,
            date,
            userId
        });

        res.status(201).json({
            message: "Task created successfully",
            task: {
                id: task._id,
                title: task.title,
                description: task.description,
                category: task.category,
                status: task.status,
                difficulty: task.difficulty,
                date: task.date,
                userId: task.userId
            }
        });
        
    } catch(error) {
        res.status(500).json({
            error: error.message,
            message: "Internal Server Error"
        })
    }
}

const getTasks = async(req, res) => {
    try {
        const { userId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({
                message: "Invalid user ID"
            });
        }

        const tasks = await Task.find({ userId });
        res.status(200).json(tasks);
    } catch(error) {
        res.status(500).json({
            error: error.message,
            message: "Internal Server Error"
        });
    }
}

const updateTask = async(req, res) => {
    try {

        const { userId, taskId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(taskId)) {
            return res.status(400).json({
                message: "Invalid task ID"
            });
        }

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({
                message: "Invalid user ID format"
            });
        }

        if(Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: "No data provided for update"
            });
        }

        // Meaning of { new: true } -> Return the updated document instead of the old one.
        const taskObj = await Task.findOneAndUpdate({ _id: taskId, userId }, req.body, { new: true });

        if (!taskObj) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task updated successfully",
            task: taskObj
        });
    } catch(error) {
        res.status(500).json({
            error: error.message,
            message: "Internal Server Error"
        });
    }
}

export {
    createTask,
    getTasks,
    updateTask
}
