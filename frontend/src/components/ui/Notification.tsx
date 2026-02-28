import { useContext } from "react";
import { AppContext } from "../../App";
import { CheckCircle2 } from "lucide-react";

const Notification = () => {
    const { response } = useContext(AppContext);

    if (!response) return null;

    return (
        <div 
            // The 'key' forces the element to re-mount and restart animation when response changes
            key={response}
            className="fixed w-60 top-10 right-1/2 translate-x-1/2 rounded py-3 bg-gray-50 text-black text-center z-50 flex items-center justify-center gap-2 shadow-lg animate-appearance"
        >
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-medium">{response}</span>
        </div>
    );
};

export default Notification;