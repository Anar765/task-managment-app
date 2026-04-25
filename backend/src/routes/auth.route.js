import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";
import { handleRefreshToken } from "../controllers/refreshToken.controller.js";

const authRouter = Router();

authRouter.route('/register').post(registerUser);
authRouter.route('/login').post(loginUser);
authRouter.route('/refresh').get(handleRefreshToken);

export default authRouter;