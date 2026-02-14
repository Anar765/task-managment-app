import { Calendar, Tag } from "lucide-react";
import type { Task } from "../../types/tasks.type";
import { taskCategoryStyle, taskIconStyle, taskPriorityStyle, type Style } from "../../util/getTaskStyles";

const TaskCard = ({title, description, category, status, priority, date}: Task) => {

    const priorityStyles: Style = taskPriorityStyle(priority);
    const categoryStyles: Style = taskCategoryStyle(category);
    const { Icon, styles } = taskIconStyle(status);

    return (
        <div className={`bg-white rounded-xl p-6 border ${status === "In progress" && "border-indigo-200 border-l-4"} hover:shadow-md transition-shadow cursor-pointer`}>
            <div className="flex items-start gap-4">
                <button className="mt-1">
                    <Icon className={`w-5 h-5 ${styles}`} />
                </button>
                <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                        <h3 className={`font-semibold text-gray-900 ${status === "Completed" && "line-through"}`}>{title}</h3>
                        <span className={`text-xs px-2 py-1 ${priorityStyles.bgColor} ${priorityStyles.textColor} rounded-full font-medium`}>{priority}</span>
                    </div>
                    <p className={`text-sm text-gray-600 mb-3 ${status === "Completed" && "line-through"}`}>
                    {description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{status === "Completed" ? "Completed" : "Due"}: {date.toLocaleString("en-US", {
                                month: "short",
                                day: "numeric"
                            })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Tag className="w-4 h-4" />
                            <span className={`px-2 py-0.5 ${categoryStyles.bgColor} ${categoryStyles.textColor} rounded`}>{category}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskCard