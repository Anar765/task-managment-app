import { Router } from "express"
import { createTask } from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.route('/create').post(createTask);

export default taskRouter;