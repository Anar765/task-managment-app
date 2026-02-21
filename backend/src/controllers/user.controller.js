import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const { username, email, role, password } = req.body;

        if(!username || !email || !role || !password) {
            return res.status(400).json({
                message: "All fields are important"
            });
        }

        const existing = await User.findOne({ email })

        if(existing) {
            return res.status(400).json({
                message: "User already exists",
                user
            });
        }

        const user = await User.create({
            username,
            email,
            role,
            password,
            loggedIn: false
        });

        res.status(201).json({
            message: "User registered",
            user: {id: user._id, email: user.email, username: user.username, role: user.role}
        });

    } catch(error) {
        res.status(500).json({
            error: error.message,
            message: "Internal Server Error"
        })
    }
}

const loginUser = async(req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).json({
                message: "All fields are important"
            })
        }

        const existing = await User.findOne({ email });

        if(!existing) {
            return res.status(404).json({
                message: "User is not registered"
            });
        }

        if(existing.password !== password) {
            return res.status(403).json({
                message: "Password is incorrect"
            });
        }

        res.status(202).json({
            message: "Welcome back",
            user: {
                id: existing._id,
                username: existing.username,
                email
            }
        })

    } catch(error) {
        res.status(500).json({
            error: error.message,
            message: "Internal Server Error"
        })
    }
}

export {
    registerUser,
    loginUser
}