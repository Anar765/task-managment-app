import { Calendar, Tag, ChevronDown, ChevronUp, Trash2, PencilLine } from "lucide-react";
import { useContext, useState, useMemo, useCallback, useEffect } from "react";
import type { Task } from "../../types/tasks.type";
import { taskCategoryStyle, taskIconStyle, taskPriorityStyle, type Style } from "../../util/getTaskStyles";
import { AppContext } from "../../App";
import UpdateTaskForm from "./UpdateTaskForm";

const nextStep = {
    "Not started": "In progress",
    "In progress": "Completed",
    "Completed": "Not started",
    "Overdue": "Completed"
}

const TaskCard = ({id, title, description, category, status, priority, date}: Task) => {
    const { user, setTasks, setResponse } = useContext(AppContext);

    // 1. State to handle toggle
    const [isExpanded, setIsExpanded] = useState(false);
    const [isUpdateTestFormOpen, setIsUpdateTaskFormOpen] = useState(false);

    const isCompleted = status === "Completed";
    const isInProgress = status === "In progress";

    const isPastDeadline = useMemo(() => new Date().getTime() > date.getTime(), [date]);
    const isOverdue = isPastDeadline && !isCompleted;
    const effectiveStatus = isOverdue ? "Overdue" : status;

    const priorityStyles: Style = taskPriorityStyle(priority);
    const categoryStyles: Style = taskCategoryStyle(category);
    const { Icon, styles } = taskIconStyle(effectiveStatus);

    const deleteTask = async() => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/${user?.id}/tasks/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if(response.ok) {
                setTasks((prevState) => prevState.filter(task => task.id !== id))
            }

            const json = await response.json();
            setResponse(json.message);
            console.log(json);
        } catch(error) {
            console.log(error);
        }
    };

    const updateTask = useCallback(async(updatedFields: Partial<Task>) => {

        const formattedFields = {
            ...updatedFields,
            date: updatedFields.date ? new Date(updatedFields.date) : date
        };
        
        // e.preventDefault();

        // const formData = new FormData(e.currentTarget);

        // const updatedTask: Task = {
        //     title: formData.get("title") as string,
        //     description: formData.get("description") as string,
        //     status,
        //     priority: formData.get("priority") as string,
        //     category: formData.get("category") as string,
        //     date: new Date(formData.get("date") as string)
        // };
        try {

            const fullUpdatedTask = { id, title, description, category, status, priority, ...formattedFields }

            const response = await fetch(`${import.meta.env.VITE_API_URL}/${user?.id}/tasks/update/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(fullUpdatedTask)
            });

            if (!response.ok) {
                throw new Error(`Failed to update task: ${response.statusText}`);
            }

            const json = await response.json();

            // Update the task in the state
            setTasks((prevState) =>
                prevState.map((task) => task.id === id ? fullUpdatedTask : task)
            );

            // Close the form
            setIsUpdateTaskFormOpen(false);
            setResponse(json.message);
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }, [id, title, description, category, status, priority, date, user?.id, setTasks, setResponse]);

    const toggleStatus = () => {
        // Use the mapping logic. If Overdue -> Completed.
        const newStatus = nextStep[effectiveStatus as keyof typeof nextStep] || "Not started";
        updateTask({ status: newStatus });
    }

    useEffect(() => {
        if(isPastDeadline && status !== "Overdue" && status !== "Completed") {
            updateTask({ status: "Overdue"});
        }
    }, [isPastDeadline, status]);

    return (
        <>
            <div 
                // 2. toggle state on click
                onClick={() => setIsExpanded(!isExpanded)}
                className={`task-container
                    ${isInProgress ? "border-indigo-200 dark:border-indigo-800 border-l-4" : "border-gray-100 dark:border-gray-700"}
                    ${isOverdue ? "bg-red-50/30 dark:bg-red-900/10 border-red-200" : ""}
                    ${isExpanded ? "ring-1 ring-indigo-50 dark:ring-indigo-900/50" : ""}
                `}
            >
                <div className="flex items-start gap-3 sm:gap-4">
                    <button onClick={(e) => {e.stopPropagation(), toggleStatus()}} className="mt-1 shrink-0">
                        <Icon className={`w-5 h-5 ${styles}`} />
                    </button>

                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1 sm:mb-2">
                            {/* 3. Logic: If expanded, wrap text. If closed, truncate. */}
                            <h3 
                                title={title} 
                                className={`font-semibold text-gray-900 dark:text-white wrap-break-words ${isCompleted && "line-through text-gray-400"} ${isExpanded ? "" : "truncate"}`}
                            >
                                {title}
                            </h3>
                            
                            <span className={`shrink-0 text-[10px] sm:text-xs px-2 py-1 ${priorityStyles.bgColor} ${priorityStyles.textColor} rounded-full font-medium`}>
                                {priority}
                            </span>
                        </div>

                        {/* 4. Logic: If expanded, show all. If closed, clamp to 2 lines. */}
                        <p 
                            title={description} 
                            className={`text-sm text-gray-600 dark:text-gray-400 mb-4 wrap-break-words ${isCompleted && "line-through opacity-50"} ${isExpanded ? "" : "line-clamp-2"}`}
                        >
                            {description}
                        </p>

                        <div className="flex-between-center flex-wrap gap-y-2 gap-x-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex-hor-center flex-wrap gap-4">
                                <div className="flex-hor-center gap-1">
                                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    <span>
                                        {isCompleted ? "Finished" : (isOverdue ? "Overdue" : "Due")}: {date.toLocaleString("en-US", { month: "short", day: "numeric" })}
                                    </span>
                                </div>
                                <div className="flex-hor-center gap-1">
                                    <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    <span className={`px-2 py-0.5 ${categoryStyles.bgColor} ${categoryStyles.textColor} rounded text-[10px] sm:text-xs`}>
                                        {category}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2">

                                <button onClick={(e) => {e.stopPropagation(), setIsUpdateTaskFormOpen(true)}} aria-label="Edit task" className="bg-blue-600 rounded p-1">
                                    <PencilLine className="w-4 h-4 text-white" />
                                </button>

                                <button onClick={(e) => {e.stopPropagation(), deleteTask()}} aria-label="Delete task" className="bg-red-600 rounded p-1">
                                    <Trash2 className="w-4 h-4 text-white" />
                                </button>

                                {/* Optional: Visual hint that the card can be toggled */}
                                <div className="text-gray-500 dark:text-gray-300">
                                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isUpdateTestFormOpen && <UpdateTaskForm updateTask={updateTask} setIsUpdateTaskFormOpen={setIsUpdateTaskFormOpen} task={{title, description, category, status, priority, date}} />}
        </>
    )
}

export default TaskCard