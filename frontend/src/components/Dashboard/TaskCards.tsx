import TaskCard from "./TaskCard";
import { useContext } from "react";
import { AppContext } from "../../App";

const TaskCards = () => {

    const { tasks } = useContext(AppContext);

    return (
        <>  
            {tasks.length !== 0 ? tasks.map((task) => {
                return <TaskCard
                    key={task.id}
                    id={task.id}
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