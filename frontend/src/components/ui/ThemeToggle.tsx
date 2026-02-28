import { Sun, Moon } from "lucide-react";
import { useContext } from "react";
import { AppContext } from "../../App";

const ThemeToggle = () => {
    const { isDarkMode, setIsDarkMode } = useContext(AppContext);

    return (
        <button
            onClick={() => setIsDarkMode(prevState => !prevState)}
            className={`${isDarkMode ?  "bg-neutral-600 hover:bg-neutral-500" : "bg-neutral-100 hover:bg-neutral-200" } rounded-md p-2`}
        >
            {!isDarkMode ? <Sun /> : <Moon className="text-white" />}
        </button>
    )
}

export default ThemeToggle