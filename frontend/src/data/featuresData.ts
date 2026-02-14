import type { LucideProps } from "lucide-react";
import { Code2, Target, BarChart3, Tag, MessageSquare, Zap } from "lucide-react";

export interface FeatureType {
    title: string,
    text: string,
    Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
    borderColor: string,
    bgColor: string,
    gradient: string,
    IconColor: string
}

export const features: FeatureType[] = [
    {
        title: "Developer Categories",
        text: "Organize tasks by Backend, Frontend, Database, DevOps, and Testing. Categories that actually make sense.",
        Icon: Code2,
        borderColor: "border-purple-100",
        bgColor: "bg-purple-100",
        gradient: "from-purple-50",
        IconColor: "text-purple-600"
    },
    {
        title: "Priority Management",
        text: "Set priorities and due dates. Visual indicators help you focus on what matters most.",
        Icon: Target,
        borderColor: "border-blue-100",
        bgColor: "bg-blue-100",
        gradient: "from-blue-50",
        IconColor: "text-blue-600"
    },
    {
        title: "Progress Tracking",
        text: "Real-time statistics and progress tracking. See your productivity at a glance.",
        Icon: BarChart3,
        borderColor: "border-green-100",
        bgColor: "bg-green-100",
        gradient: "from-green-50",
        IconColor: "text-green-600"
    },
    {
        title: "Smart Tagging",
        text: "Tag your tasks with keywords. Quick templates for common dev tasks like auth, API, testing.",
        Icon: Tag,
        borderColor: "border-orange-100",
        bgColor: "bg-orange-100",
        gradient: "from-orange-50",
        IconColor: "text-orange-600"
    },
    {
        title: "Task Comments",
        text: "Add comments and notes to tasks. Keep all context in one place for better collaboration.",
        Icon: MessageSquare,
        borderColor: "border-pink-100",
        bgColor: "bg-pink-100",
        gradient: "from-pink-50",
        IconColor: "text-pink-600"
    },
    {
        title: "Lightning Fast",
        text: "Built with React and modern web technologies. Instant updates, no page reloads needed.",
        Icon: Zap,
        borderColor: "border-indigo-100",
        bgColor: "bg-indigo-100",
        gradient: "from-indigo-50",
        IconColor: "text-indigo-600"
    }
]