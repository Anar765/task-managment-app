import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    if(!cookies?.jwt) return res.status(401).json({ message: "Unauthorizated" });
    const refreshToken = cookies.jwt;

    const foundUser = await User.findOne({ refreshToken }).exec();
    if(!foundUser) return res.status(403).json({ message: "Forbidden" });

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if(err || foundUser._id.toString() !== decoded.id) {
                return res.status(403).json({ message: "Forbidden" });
            }

            const accessToken = jwt.sign(
                {
                    id: decoded.id,
                    username: foundUser.username,
                    role: foundUser.role
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "15m" }
            );

            res.json({ accessToken });
        }
    );
}

export {
    handleRefreshToken
}