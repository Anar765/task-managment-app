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
import apiFetch from "./hooks/apiFetch.ts";

interface Context {
  user: User | undefined,
  setUser: Dispatch<SetStateAction<User | undefined>>
  tasks: Task[],
  setTasks: Dispatch<SetStateAction<Task[]>>,
  isDarkMode: boolean,
  setIsDarkMode: Dispatch<SetStateAction<boolean>>,
  response: ResponseProps | null,
  setResponse: Dispatch<SetStateAction<ResponseProps | null>>,
  accessToken: string | null,
  setAccessToken: Dispatch<SetStateAction<string | null>>
}

export const AppContext = createContext<Context>({
  user: undefined,
  setUser: () => {},
  tasks: [],
  setTasks: () => {},
  isDarkMode: false,
  setIsDarkMode: () => {},
  response: {
    type: "success",
    message: ""
  },
  setResponse: () => {},
  accessToken: null,
  setAccessToken: () => {}
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
  const [accessToken, setAccessToken] = useState<string | null>(() => {
    const savedToken = localStorage.getItem("accessToken");
    return savedToken ? JSON.parse(savedToken) : null;
  });

  useEffect(() => {
    const persistLogin = async() => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/refresh`, {
          method: "GET",
          credentials: "include"
        });

        if(res.ok) {
          const data = await res.json();
          setAccessToken(data.accessToken);
          localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
        }
      } catch (error) {
        console.log("No active session found.");
      }
    };

    if(!accessToken) persistLogin();
  }, []);

  useEffect(() => {
    const getTasks = async () => {
      if(!accessToken) return;
      try {
        const response = await apiFetch(
          `${import.meta.env.VITE_API_URL}/tasks/get`,
          {},
          accessToken,
          (newToken) => setAccessToken(newToken),
          () => {
            setUser(undefined);
            setAccessToken(null);
            localStorage.removeItem("user");
          }
        );

        if(!response.ok) {
          setResponse({
            type: "error",
            message: response.statusText
          })
          throw new Error(`status code - ${response.status}, message - ${response.statusText}`);
        }

        const data = await response.json();

        setTasks(data.map((task: any) => ({
          ...task,
          date: new Date(task.date)
        })));
      } catch (error) {
        setResponse({
          type: "error",
          message: "Something went wrong. Please try again later"
        });
        console.log(error);
      }
    };

    getTasks();
  }, [accessToken]);

  useEffect(() => {
    if(isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("DevTasksTheme", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <AppContext.Provider value={{ user, setUser, tasks, setTasks, isDarkMode, setIsDarkMode, response, setResponse, accessToken, setAccessToken }}>
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