import { createContext, useEffect, useState, type Dispatch, type SetStateAction } from "react";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage";
import LoginPage from "./pages/Auth/LoginPage";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage";
import SignUpPage from "./pages/Auth/SignUpPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/Error/NotFoundPage.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import type { User } from "./types/user.type.ts";
import type { Task } from "./types/tasks.type.ts";
import type { ResponseProps } from "./types/FeedbackType.type.ts";

interface Context {
  tasks: Task[],
  user: User | undefined,
  setTasks: Dispatch<SetStateAction<Task[]>>,
  isDarkMode: boolean,
  setIsDarkMode: Dispatch<SetStateAction<boolean>>,
  response: ResponseProps | null,
  setResponse: Dispatch<SetStateAction<ResponseProps | null>>
}

export const AppContext = createContext<Context>({
  tasks: [],
  user: undefined,
  setTasks: () => {},
  isDarkMode: false,
  setIsDarkMode: () => {},
  response: {
    type: "success",
    message: ""
  },
  setResponse: () => {}
});

const App = () => {

  const [user, setUser] = useState<User | undefined>(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : undefined;
  });
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("DevTasksTheme");
    return savedTheme !== null ? JSON.parse(savedTheme) : false;
  });
  const [response, setResponse] = useState<ResponseProps | null>(null);

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

  useEffect(() => {
    if(isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("DevTasksTheme", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <AppContext.Provider value={{ tasks, user, setTasks, isDarkMode, setIsDarkMode, response, setResponse }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/dashboard/:username" element={<DashboardPage user={user} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App