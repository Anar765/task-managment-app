import { Calendar, Tag, ChevronDown, ChevronUp, Trash2, PencilLine } from "lucide-react";
import { useState } from "react";
import type { Task } from "../../types/tasks.type";
import { taskCategoryStyle, taskIconStyle, taskPriorityStyle, type Style } from "../../util/getTaskStyles";

const TaskCard = ({title, description, category, status, priority, date}: Task) => {
    // 1. State to handle toggle
    const [isExpanded, setIsExpanded] = useState(false);

    const priorityStyles: Style = taskPriorityStyle(priority);
    const categoryStyles: Style = taskCategoryStyle(category);
    const { Icon, styles } = taskIconStyle(status);

    const isCompleted = status === "Completed";
    const isInProgress = status === "In progress";

    return (
        <div 
            // 2. toggle state on click
            onClick={() => setIsExpanded(!isExpanded)}
            className={`task-container
                ${isInProgress ? "border-indigo-200 border-l-4" : "border-gray-100"}
                ${isExpanded ? "ring-1 ring-indigo-50" : ""}
            `}
        >
            <div className="flex items-start gap-3 sm:gap-4">
                <button className="mt-1 shrink-0">
                    <Icon className={`w-5 h-5 ${styles}`} />
                </button>

                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1 sm:mb-2">
                        {/* 3. Logic: If expanded, wrap text. If closed, truncate. */}
                        <h3 
                            title={title} 
                            className={`font-semibold text-gray-900 wrap-break-words ${isCompleted && "line-through text-gray-400"} ${isExpanded ? "" : "truncate"}`}
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
                        className={`text-sm text-gray-600 mb-4 wrap-break-words ${isCompleted && "line-through opacity-50"} ${isExpanded ? "" : "line-clamp-2"}`}
                    >
                        {description}
                    </p>

                    <div className="flex-between-center flex-wrap gap-y-2 gap-x-4 text-xs sm:text-sm text-gray-500">
                        <div className="flex-hor-center flex-wrap gap-4">
                            <div className="flex-hor-center gap-1">
                                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                <span>
                                    {isCompleted ? "Done" : "Due"}: {date.toLocaleString("en-US", { month: "short", day: "numeric" })}
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

                            <button aria-label="Edit task" className="bg-blue-600 rounded p-1">
                                <PencilLine className="w-4 h-4 text-white" />
                            </button>

                            <button aria-label="Delete task" className="bg-red-600 rounded p-1">
                                <Trash2 className="w-4 h-4 text-white" />
                            </button>

                            {/* Optional: Visual hint that the card can be toggled */}
                            <div className="text-gray-500">
                                {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskCard