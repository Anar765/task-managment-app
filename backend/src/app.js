import express from "express";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import taskRouter from "./routes/task.route.js";

const app = express();

app.use(express.json())
app.use(cors({
    origin: `http://localhost:${process.env.FRONTEND_PORT}`,
    credentials: true
}))

app.use("/api/users", userRouter);
app.use("/api/:userId/tasks", taskRouter);

export default app;