import { Router } from "express"
import { createTask, getTasks } from "../controllers/task.controller.js";

const taskRouter = Router({ mergeParams: true });

taskRouter.route('/create').post(createTask);
taskRouter.route('/get').get(getTasks);

export default taskRouter;