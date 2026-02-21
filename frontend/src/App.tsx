import { createContext, useEffect, useState } from "react";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage";
import LoginPage from "./pages/Auth/LoginPage";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage";
import SignUpPage from "./pages/Auth/SignUpPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import type { User } from "./types/user.type.ts";
import type { Task } from "./types/tasks.type.ts";

export const TaskContext = createContext<Task[]>([]);

const App = () => {

  const [user, setUser] = useState<User | undefined>(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : undefined;
  });
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      if(!user) return;
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${user?.id}/tasks/get`);

        if(!response.ok) {
          throw new Error(`status code - ${response.status}, message - ${response.statusText}`);
        }

        const data = await response.json();

        setTasks(data.map((task: any) => ({
          ...task,
          date: new Date(task.date)
        })));
      } catch (error) {
        console.log(error);
      }
    };

    getTasks();
  }, [user]);

  return (
    <TaskContext.Provider value={tasks}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/dashboard/:username" element={<DashboardPage user={user} />} />
          <Route path="*" element={<h1>Not Found</h1>}/>
        </Routes>
      </BrowserRouter>
    </TaskContext.Provider>
  );
}

export default App