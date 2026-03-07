import type { LucideProps } from "lucide-react";
import { Code2, Target, BarChart3, Tag, MessageSquare, Zap } from "lucide-react";

export interface FeatureCardStyles {
    borderColor: string,
    bgColor: string,
    gradient: string,
    IconColor: string
}

export interface FeatureType {
    title: string,
    text: string,
    Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
    lightMode: FeatureCardStyles,
    darkMode: FeatureCardStyles
}

export const features: FeatureType[] = [
    {
        title: "Developer Categories",
        text: "Organize tasks by Backend, Frontend, Database, DevOps, and Testing. Categories that actually make sense.",
        Icon: Code2,
        lightMode: {
            borderColor: "border-purple-100",
            bgColor: "bg-purple-100",
            gradient: "from-purple-50",
            IconColor: "text-purple-600"
        },
        darkMode: {
            borderColor: "border-purple-800",
            bgColor: "bg-purple-900/30",
            gradient: "from-purple-900/20",
            IconColor: "text-purple-400"
        }
    },
    {
        title: "Priority Management",
        text: "Set priorities and due dates. Visual indicators help you focus on what matters most.",
        Icon: Target,
        lightMode: {
            borderColor: "border-blue-100",
            bgColor: "bg-blue-100",
            gradient: "from-blue-50",
            IconColor: "text-blue-600"
        },
        darkMode: {
            borderColor: "border-blue-800",
            bgColor: "bg-blue-900/30",
            gradient: "from-blue-900/20",
            IconColor: "text-blue-400"
        }
    },
    {
        title: "Progress Tracking",
        text: "Real-time statistics and progress tracking. See your productivity at a glance.",
        Icon: BarChart3,
        lightMode: {
            borderColor: "border-green-100",
            bgColor: "bg-green-100",
            gradient: "from-green-50",
            IconColor: "text-green-600"
        },
        darkMode: {
            borderColor: "border-green-800",
            bgColor: "bg-green-900/30",
            gradient: "from-green-900/20",
            IconColor: "text-green-400"
        }
    },
    {
        title: "Smart Tagging",
        text: "Tag your tasks with keywords. Quick templates for common dev tasks like auth, API, testing.",
        Icon: Tag,
        lightMode: {
            borderColor: "border-orange-100",
            bgColor: "bg-orange-100",
            gradient: "from-orange-50",
            IconColor: "text-orange-600"
        },
        darkMode: {
            borderColor: "border-orange-800",
            bgColor: "bg-orange-900/30",
            gradient: "from-orange-900/20",
            IconColor: "text-orange-400"
        }
    },
    {
        title: "Task Comments",
        text: "Add comments and notes to tasks. Keep all context in one place for better collaboration.",
        Icon: MessageSquare,
        lightMode: {
            borderColor: "border-pink-100",
            bgColor: "bg-pink-100",
            gradient: "from-pink-50",
            IconColor: "text-pink-600"
        },
        darkMode: {
            borderColor: "border-pink-800",
            bgColor: "bg-pink-900/30",
            gradient: "from-pink-900/20",
            IconColor: "text-pink-400"
        }
    },
    {
        title: "Lightning Fast",
        text: "Built with React and modern web technologies. Instant updates, no page reloads needed.",
        Icon: Zap,
        lightMode: {
            borderColor: "border-indigo-100",
            bgColor: "bg-indigo-100",
            gradient: "from-indigo-50",
            IconColor: "text-indigo-600"
        },
        darkMode: {
            borderColor: "border-indigo-800",
            bgColor: "bg-indigo-900/30",
            gradient: "from-indigo-900/20",
            IconColor: "text-indigo-400"
        }
    }
]