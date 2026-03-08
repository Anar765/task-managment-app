import { Circle, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { useContext } from "react";
import { AppContext } from "../../App";

const StatsCards = () => {

  const { tasks } = useContext(AppContext);
  const totalTasks = tasks.length;
  const inProgressTasks = tasks.filter((task) => task.status === "In progress").length;
  const CompletedTasks = tasks.filter((task) => task.status === "Completed").length;
  const OverdueTasks = tasks.filter((task) => task.status === "Overdue").length;

  return (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="stats-card">
          <div className="flex-between-center mb-2">
            <span className="text-gray-600 dark:text-gray-400 text-sm">Total Tasks</span>
            <Circle className="w-5 h-5 text-gray-400 dark:text-gray-500" />
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalTasks}</p>
        </div>
        
        <div className="stats-card">
          <div className="flex-between-center mb-2">
            <span className="text-gray-600 dark:text-gray-400 text-sm">In Progress</span>
            <Clock className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{inProgressTasks}</p>
        </div>
        
        <div className="stats-card">
          <div className="flex-between-center mb-2">
            <span className="text-gray-600 dark:text-gray-400 text-sm">Completed</span>
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">{CompletedTasks}</p>
        </div>
        
        <div className="stats-card">
          <div className="flex-between-center mb-2">
            <span className="text-gray-600 dark:text-gray-400 text-sm">Overdue</span>
            <AlertCircle className="w-5 h-5 text-red-500" />
          </div>
          <p className="text-3xl font-bold text-red-600 dark:text-red-400">{OverdueTasks}</p>
        </div>
      </div>
    </>
  )
}

export default StatsCards