import { Sun, Moon } from "lucide-react";
import { useContext, useEffect } from "react";
import { AppContext } from "../../App";

const ThemeToggle = () => {
    const { isDarkMode, setIsDarkMode } = useContext(AppContext);

    useEffect(() => {
        localStorage.setItem("DevTasksTheme", JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    return (
        <button
            onClick={() => setIsDarkMode(prevState => !prevState)}
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Theme"
        >
            {isDarkMode ? <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" /> : <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />}
        </button>
    )
}

export default ThemeToggle