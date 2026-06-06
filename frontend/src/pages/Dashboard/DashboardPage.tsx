import Header from "../../components/Dashboard/Header";
import SideBar from "../../components/Dashboard/SideBar";
import StatsCards from "../../components/Dashboard/StatsCards";
import TaskCards from "../../components/Dashboard/TaskCards";
import { useContext, useEffect, useState } from "react";
import type { Task } from "../../types/tasks.type";
import TaskForm from "../../components/Dashboard/TaskForm.tsx";
import TasksFilter from "../../components/Dashboard/TasksFilter";
import type { User } from "../../types/user.type";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../App";
import type { FilterParams } from "../../types/filterParams.type";
import Notification from "../../components/ui/Notification";
import apiFetch from "../../hooks/apiFetch.ts";

const DashboardPage = ({ user } : { user: User | undefined }) => {
  const { username } = useParams();
  const navigate = useNavigate();
  const { setTasks, setResponse, accessToken, setAccessToken, setUser } = useContext(AppContext);

  const [searchTask, setSearchTask] = useState("");
  const [isNewTaskFormOpen, setIsNewTaskFormOpen] = useState(false);
  const [filterParams, setFilterParams] = useState<FilterParams>({
    priority: "",
    status: "",
    category: ""
  });

  useEffect(() => {
    if(!accessToken) {
      navigate('/login');
    }
  }, [accessToken]);

  useEffect(() => {
    if(user && username !== user.username) {
      navigate('/');
    }
  }, [user, username]);

  const handleNewTaskSubmit = async (task: any) => {

    const newTask: Task = { ...task, status: "Not started", date: new Date(task.date) }

    try {
      const response = await apiFetch(
        `${import.meta.env.VITE_API_URL}/tasks/create`,
        {
          method: "POST",
          body: JSON.stringify(newTask)
        },
        accessToken,
        (newToken) => setAccessToken(newToken),
        () => {
          setUser(undefined);
          setAccessToken(null);
          navigate('/login');
          localStorage.removeItem("user");
        }
      );

      const json = await response.json();

      if (!response.ok) {
        if(response.status === 422) {
          setResponse({
            type: "warning",
            message: json.message
          });
          return;
        }

        throw new Error(`Failed to create task: ${response.statusText}`);
      }

      setTasks((prevState) => [...prevState, { ...json.task, date: new Date(json.task.date)}]);
      setResponse({
        type: "success",
        message: json.message
      });
      setIsNewTaskFormOpen(false);

    } catch(error: any) {

      if(error.message === "Session Expired") {
        return;
      }

      setResponse({
        type: "error",
        message: "Something went wrong. Please try again later"
      });
      console.log(error);
    }
  }

  const handleFilterParamsSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const filter: FilterParams = {
      priority: formData.get('priority') as string,
      status: formData.get('status') as string,
      category: formData.get('category') as string
    };

    setFilterParams(filter);
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      <Notification />
      <Header setIsNewTaskFormOpen={setIsNewTaskFormOpen} setSearchTask={setSearchTask} />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">        
        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Task List */}
          <div className="lg:col-span-2 space-y-4">
            <TasksFilter filterParams={filterParams} setFilterParams={setFilterParams} handleFilterParamsSubmit={handleFilterParamsSubmit} />
            <TaskCards searchTask={searchTask} filterParams={filterParams} />
          </div>

          <SideBar />
          
        </div>
      </div>

      {isNewTaskFormOpen && <TaskForm handleTaskSubmit={handleNewTaskSubmit} setIsTaskFormOpen={setIsNewTaskFormOpen} />}
    </div>
  )
}

export default DashboardPage