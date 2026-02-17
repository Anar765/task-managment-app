import { Filter } from "lucide-react";
import Header from "../../components/Dashboard/Header";
import SideBar from "../../components/Dashboard/SideBar";
import StatsCards from "../../components/Dashboard/StatsCards";
import TaskCards from "../../components/Dashboard/TaskCards";
import { useState } from "react";
import type { Task } from "../../types/tasks.type";
import NewTaskForm from "../../components/Dashboard/NewTaskForm";

const DashboardPage = () => {

  const [isNewTaskFormOpen, setIsNewTaskFormOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)

    const task: Task = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      status: "Not completed",
      priority: formData.get("priority") as string,
      category: formData.get("category") as string,
      date: new Date(formData.get("date") as string)
    }

    console.log(task);
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">

      <Header setIsNewTaskFormOpen={setIsNewTaskFormOpen} />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">        
        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Task List */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">All Tasks</h2>
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>

            <TaskCards />
          </div>

          <SideBar />
          
        </div>
      </div>

      {isNewTaskFormOpen && <NewTaskForm handleSubmit={handleSubmit} setIsNewTaskFormOpen={setIsNewTaskFormOpen} />}
    </div>
  )
}

export default DashboardPage