import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const { username, email, role, password } = req.body;

        if(!username || !email || !role || !password) {
            return res.status(400).json({
                message: "Please provide username, email, role, and password"
            });
        }

        const existing = await User.findOne({ email })

        if(existing) {
            return res.status(400).json({
                message: "An account with this email already exists",
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
            message: "Account successfully created.",
            user: {id: user._id, email: user.email, username: user.username, role: user.role}
        });

    } catch(error) {
        res.status(500).json({
            error: error.message,
            message: "Something went wrong while creating the account"
        })
    }
}

const loginUser = async(req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).json({
                message: "Please provide both email and password"
            })
        }

        const existing = await User.findOne({ email });

        if(!existing) {
            return res.status(404).json({
                message: "No account found with this email"
            });
        }

        if(existing.password !== password) {
            return res.status(403).json({
                message: "Invalid email or password"
            });
        }

        res.status(202).json({
            message: "Login successful",
            user: {
                id: existing._id,
                username: existing.username,
                email
            }
        })

    } catch(error) {
        res.status(500).json({
            error: error.message,
            message: "Something went wrong while logging in"
        })
    }
}

export {
    registerUser,
    loginUser
}