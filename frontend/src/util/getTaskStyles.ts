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
                textColor: "text-gray-700",
                bgColor: "bg-gray-100"
            };
        case "Medium":
            return {
                textColor: "text-yellow-700",
                bgColor: "bg-yellow-100"
            };
        case "High":
            return {
                textColor: "text-red-700",
                bgColor: "bg-red-100"
            };
        default:
            return {
                textColor: "text-cyan-700",
                bgColor: "bg-cyan-100"
            };
    }
};

export const taskCategoryStyle = (category: string): Style => {
    switch(category) {
        case "Frontend":
            return {
                textColor: "text-blue-700",
                bgColor: "bg-blue-100"
            };
        case "Backend":
            return {
                textColor: "text-purple-700",
                bgColor: "bg-purple-100"
            };
        case "Database":
            return {
                textColor: "text-green-700",
                bgColor: "bg-green-100"
            };
        case "DevOps":
            return {
                textColor: "text-orange-700",
                bgColor: "bg-orange-100"
            };
        case "Testing":
            return {
                textColor: "text-pink-700",
                bgColor: "bg-pink-100"
            };
        default:
            return {
                textColor: "text-gray-700",
                bgColor: "bg-gray-100"
            };
    }
};

export const taskIconStyle = (status: string): TaskIcon => {
    switch(status) {
        case "Not started":
            return {
                Icon: Circle,
                styles: "text-gray-400 hover:text-indigo-600 transition-colors"
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