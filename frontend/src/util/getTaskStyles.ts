import { Circle, Clock, CheckCircle2, CircleAlert } from "lucide-react";
import type { LucideProps } from "lucide-react";

export interface TaskIcon {
    Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
    styles: string
} 

export interface Style {
    textColor: string,
    bgColor: string
}

export const taskPriorityStyle = (priority: string): Style => {
    switch(priority) {
        case "Low":
            return {
                textColor: "text-gray-700 dark:text-gray-300",
                bgColor: "bg-gray-100 dark:bg-gray-900/70"
            };
        case "Medium":
            return {
                textColor: "text-yellow-700 dark:text-yellow-400",
                bgColor: "bg-yellow-100 dark:bg-yellow-900/30"
            };
        case "High":
            return {
                textColor: "text-red-700 dark:text-red-400",
                bgColor: "bg-red-100 dark:bg-red-900/30"
            };
        default:
            return {
                textColor: "text-cyan-700 dark:text-cyan-400",
                bgColor: "bg-cyan-100 dark:bg-cyan-900/30"
            };
    }
};

export const taskCategoryStyle = (category: string): Style => {
    switch(category) {
        case "Frontend":
            return {
                textColor: "text-blue-700 dark:text-blue-400",
                bgColor: "bg-blue-100 dark:bg-blue-900/30"
            };
        case "Backend":
            return {
                textColor: "text-purple-700 dark:text-purple-400",
                bgColor: "bg-purple-100 dark:bg-purple-900/30"
            };
        case "Database":
            return {
                textColor: "text-green-700 dark:text-green-400",
                bgColor: "bg-green-100 dark:bg-green-900/30"
            };
        case "DevOps":
            return {
                textColor: "text-orange-700 dark:text-orange-400",
                bgColor: "bg-orange-100 dark:bg-orange-900/30"
            };
        case "Testing":
            return {
                textColor: "text-pink-700 dark:text-pink-400",
                bgColor: "bg-pink-100 dark:bg-pink-900/30"
            };
        default:
            return {
                textColor: "text-gray-700 dark:text-gray-300",
                bgColor: "bg-gray-100 dark:bg-gray-900/50"
            };
    }
};

export const taskIconStyle = (status: string): TaskIcon => {
    switch(status) {
        case "Not started":
            return {
                Icon: Circle,
                styles: "text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            };
        case "In progress":
            return {
                Icon: Clock,
                styles: "text-blue-500"
            };
        case "Completed":
            return {
                Icon: CheckCircle2,
                styles: "text-green-500"
            };
        case "Overdue":
            return {
                Icon: CircleAlert,
                styles: "text-red-500"
            };
        default:
            return {
                Icon: Circle,
                styles: "text-gray-400 hover:text-indigo-600 transition-colors"
            };
    }
}