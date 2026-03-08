import { useContext } from "react";
import { AppContext } from "../../App";
import getTasksCompletionPercentage from "../../util/getTasksCompletionPercentage";

const SideBar = () => {

    const { tasks } = useContext(AppContext);

    const frontendTasks = tasks.filter((task) => task.category === "Frontend").length;
    const backendTasks = tasks.filter((task) => task.category === "Backend").length;
    const databaseTasks = tasks.filter((task) => task.category === "Database").length;
    const devOpsTasks = tasks.filter((task) => task.category === "DevOps").length;
    const testingTasks = tasks.filter((task) => task.category === "Testing").length;
    const completedTasks = tasks.filter((task) => task.status === "Completed").length;
    const totalTasks = tasks.length;

    return (
        <>
            {/* Sidebar - Quick Actions & Info */}
            <div className="space-y-6">
                {/* Categories */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Categories</h3>
                    <div className="space-y-3">
                        <button className="sidebar-category">
                            <div className="flex-hor-center gap-3">
                                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                <span className="text-gray-700 dark:text-gray-300">Backend</span>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{backendTasks}</span>
                        </button>

                        <button className="sidebar-category">
                            <div className="flex-hor-center gap-3">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                <span className="text-gray-700 dark:text-gray-300">Frontend</span>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{frontendTasks}</span>
                        </button>

                        <button className="sidebar-category">
                            <div className="flex-hor-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-gray-700 dark:text-gray-300">Database</span>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{databaseTasks}</span>
                        </button>

                        <button className="sidebar-category">
                            <div className="flex-hor-center gap-3">
                                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                <span className="text-gray-700 dark:text-gray-300">DevOps</span>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{devOpsTasks}</span>
                        </button>

                        <button className="sidebar-category">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                                <span className="text-gray-700 dark:text-gray-300">Testing</span>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{testingTasks}</span>
                        </button>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
                    <h3 className="font-semibold mb-2">Today's Progress</h3>
                    <p className="text-3xl font-bold mb-4">{getTasksCompletionPercentage(completedTasks, totalTasks)}%</p>
                    <p className="text-sm text-indigo-100">
                    You've completed {completedTasks} out of {totalTasks} tasks scheduled for today. Keep up the great work!
                    </p>
                </div>
            </div>
        </>
    )
}

export default SideBar