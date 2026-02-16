import { Router } from "express"
import { createTask } from "../controllers/task.controller.js";

const taskRouter = Router({ mergeParams: true });

taskRouter.route('/create').post(createTask);

export default taskRouter;