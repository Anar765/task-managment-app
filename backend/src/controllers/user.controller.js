import { User } from "../models/user.model.js";
import path from "node:path";
import fsPromises from "node:fs/promises";
import fs from "node:fs";
import bcrypt from "bcrypt";

/**
 * The purpose of keeping user data in a separate JSON file is to avoid recreating users every time I forget a password and to practice working with fsPromises and path in Node.js. 
 * !!! However, storing plain text passwords is not secure and should only be used for learning purposes, not in real applications.
 */

const __dirname = import.meta.dirname;
const usersDataFilePath = path.join(__dirname, '..', 'users.json');
const salt = 10;

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

        if(!fs.existsSync(usersDataFilePath)) {
            await fsPromises.writeFile(usersDataFilePath, "[]");
        }

        const usersData = await fsPromises.readFile(usersDataFilePath);

        if(!usersData) {
            await fsPromises.writeFile(usersDataFilePath, "[]");
        }

        const parsedData = JSON.parse(usersData);
        parsedData.push({username, email, role, password});
        await fsPromises.writeFile(usersDataFilePath, JSON.stringify(parsedData, null, 2));

        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            username,
            email,
            role,
            password: hashedPassword,
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

        const isMatch = await bcrypt.compare(password, existing.password);

        if(isMatch) {
            return res.status(202).json({
                message: "Login successful",
                user: {
                    id: existing._id,
                    username: existing.username,
                    email
                }
            });
        }

        if(password === existing.password) {
            existing.password = await bcrypt.hash(password, salt);

            await existing.save();

            return res.status(202).json({
                message: "Login successful",
                user: {
                    id: existing._id,
                    username: existing.username,
                    email
                }
            });
        }
        
        res.status(403).json({
            message: "Invalid email or password"
        });

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