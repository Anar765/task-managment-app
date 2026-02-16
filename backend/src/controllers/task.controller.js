import { Task } from "../models/task.model.js";

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

export {
    createTask
}
