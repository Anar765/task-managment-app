import { useContext, useEffect, useMemo } from "react";
import { AppContext } from "../../App";

import { resolveNotificationTheme } from "../../util/resolveNotificationTheme";

const Notification = () => {
    const { response, setResponse } = useContext(AppContext);
    const IconStyles = useMemo(() => {
        return resolveNotificationTheme(response ? response.type : "success");
    }, [response]);

    const { Icon, color }: any = IconStyles;

    useEffect(() => {
        if(response) {
            const timer = setTimeout(() => {
                setResponse(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [response, setResponse]);

    if(!response) return null;

    return (
        <div className="fixed w-60 top-10 right-1/2 translate-x-1/2 rounded py-3 px-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-center z-50 flex items-center justify-center gap-2 shadow-xl border border-gray-100 dark:border-gray-700 animate-appearance">
            <Icon className={`w-5 h-5 ${color}`} />
            <span className="text-sm font-medium">{response.message}</span>
        </div>
    );
};

export default Notification;