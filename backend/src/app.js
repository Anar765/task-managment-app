import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import userRouter from "./routes/user.route.js";
import taskRouter from "./routes/task.route.js";

const app = express();

app.use(express.json())
app.use(mongoSanitize());
app.use(helmet());
app.use(cookieParser());
app.use(cors({
    origin: `http://localhost:${process.env.FRONTEND_PORT}`,
    credentials: true
}));

app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter);

export default app;