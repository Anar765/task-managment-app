import Header from "../../components/Dashboard/Header";
import SideBar from "../../components/Dashboard/SideBar";
import StatsCards from "../../components/Dashboard/StatsCards";
import TaskCards from "../../components/Dashboard/TaskCards";
import { useContext, useEffect, useState } from "react";
import type { Task } from "../../types/tasks.type";
import NewTaskForm from "../../components/Dashboard/NewTaskForm";
import TasksFilter from "../../components/Dashboard/TasksFilter";
import type { User } from "../../types/user.type";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../App";

const DashboardPage = ({ user } : { user: User | undefined }) => {

  const [isNewTaskFormOpen, setIsNewTaskFormOpen] = useState(false);
  const { username } = useParams();
  const navigate = useNavigate();
  const { setTasks } = useContext(AppContext);

  useEffect(() => {
    if(user && username !== user.username) {
      navigate('/');
    }
  }, [user, username]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    try {
      const formData = new FormData(e.currentTarget)

      const task: Task = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        status: "Not completed",
        priority: formData.get("priority") as string,
        category: formData.get("category") as string,
        date: new Date(formData.get("date") as string)
      };

      const response = await fetch(`${import.meta.env.VITE_API_URL}/${user?.id}/tasks/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task)
      });

      if (!response.ok) {
        throw new Error(`Failed to create task: ${response.statusText}`);
      }

      const json = await response.json();

      setTasks((prevState) => [...prevState, task]);

      console.log(json);
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">

      <Header setIsNewTaskFormOpen={setIsNewTaskFormOpen} />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">        
        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Task List */}
          <div className="lg:col-span-2 space-y-4">
            <TasksFilter />
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