import { Router } from "express"
import { createTask, getTasks, updateTask } from "../controllers/task.controller.js";

const taskRouter = Router({ mergeParams: true });

taskRouter.route('/create').post(createTask);
taskRouter.route('/get').get(getTasks);
taskRouter.route('/update/:taskId').patch(updateTask)

export default taskRouter;