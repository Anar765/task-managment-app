import TaskCard from "./TaskCard";
import type { Task } from "../../types/tasks.type";
import { useContext } from "react";
import { TaskContext } from "../../App";

const TaskCards = () => {

    const tasks : Task[] = useContext(TaskContext);

    return (
        <>  
            {tasks.length !== 0 ? tasks.map((task) => {
                return <TaskCard
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    category={task.category}
                    status={task.status}
                    priority={task.priority}
                    date={task.date}
                />
            }) : 
                <p className="text-center">You haven't created any tasks yet.</p>
            }
        </>
    )
}

export default TaskCards