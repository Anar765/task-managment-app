import { Router } from "express"
import { createTask, deleteTask, getTasks, updateTask } from "../controllers/task.controller.js";
import verifyJWT from "../middleware/verifyJWT.js";

const taskRouter = Router();

taskRouter.use(verifyJWT);

taskRouter.route('/create').post(createTask);
taskRouter.route('/get').get(getTasks);
taskRouter.route('/update/:taskId').patch(updateTask);
taskRouter.route('/delete/:taskId').delete(deleteTask)

export default taskRouter;