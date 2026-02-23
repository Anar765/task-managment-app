import TaskCard from "./TaskCard";
import { useContext } from "react";
import { AppContext } from "../../App";
import type { FilterParams } from "../../types/filterParams.type";

const TaskCards = ({ searchTask, filterParams } : { searchTask: string, filterParams: FilterParams }) => {

    const { tasks } = useContext(AppContext);
    const filteredTasks = tasks.filter((task) => {
        // Check if the search term matches the title
        const matchesSearch = task.title.toLowerCase().includes(searchTask.toLowerCase());

        // Check if filters match (or if the filter is set to "All" / empty)
        const matchesPriority = filterParams.priority === "" || task.priority === filterParams.priority;
        const matchesStatus = filterParams.status === "" || task.status === filterParams.status;
        const matchesCategory = filterParams.category === "" || task.category === filterParams.category;

        return matchesSearch && matchesPriority && matchesStatus && matchesCategory;
    });

    return (
        <>  
            {tasks.length !== 0 ? (filteredTasks.length !== 0 ? filteredTasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        {...task}
                    />
                )) : 
                <p className="text-center">You don't have tasks with these properties.</p>
            ) : 
                <p className="text-center">You haven't created any tasks yet.</p>
            }
        </>
    )
}

export default TaskCards