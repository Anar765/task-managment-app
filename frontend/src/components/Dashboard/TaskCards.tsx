import TaskCard from "./TaskCard";
import { useEffect, useState } from "react";
import type { Task, TaskDTO } from "../../types/tasks.type";

const TaskCards = () => {

    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const getTasks = async () => {
            try {
                const response = await fetch("./tasksData.json");
                if(!response.ok) {
                    throw new Error("Fetch Error: can't fetch tasks data");
                }
                const data: TaskDTO[] = await response.json();
                const tasks: Task[] = data.map((task: any) => ({
                    ...task,
                    date: new Date(task.date)
                }));

                setTasks(tasks)
            } catch(err) {
                console.log(err);
            }
        };

        getTasks();
    }, []);

    return (
        <>  
            {tasks.map((task, index) => {
                return <TaskCard
                    key={index}
                    title={task.title}
                    description={task.description}
                    category={task.category}
                    status={task.status}
                    priority={task.priority}
                    date={task.date}
                />
            })}
        </>
    )
}

export default TaskCards