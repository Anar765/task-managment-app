import type { LucideProps } from "lucide-react";
import { Code2, Target, BarChart3, Tag, MessageSquare, Zap } from "lucide-react";

export interface FeatureType {
    title: string,
    text: string,
    Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
    color: string,
    gradient: string,
    IconColor: string
}

export const features: FeatureType[] = [
    {
        title: "Developer Categories",
        text: "Organize tasks by Backend, Frontend, Database, DevOps, and Testing. Categories that actually make sense.",
        Icon: Code2,
        color: "purple-100",
        gradient: "purple-50",
        IconColor: "text-purple-600"
    },
    {
        title: "Priority Management",
        text: "Set priorities and due dates. Visual indicators help you focus on what matters most.",
        Icon: Target,
        color: "blue-100",
        gradient: "blue-50",
        IconColor: "text-blue-600"
    },
    {
        title: "Progress Tracking",
        text: "Real-time statistics and progress tracking. See your productivity at a glance.",
        Icon: BarChart3,
        color: "green-100",
        gradient: "green-50",
        IconColor: "text-green-600"
    },
    {
        title: "Smart Tagging",
        text: "Tag your tasks with keywords. Quick templates for common dev tasks like auth, API, testing.",
        Icon: Tag,
        color: "orange-100",
        gradient: "orange-50",
        IconColor: "text-orange-600"
    },
    {
        title: "Task Comments",
        text: "Add comments and notes to tasks. Keep all context in one place for better collaboration.",
        Icon: MessageSquare,
        color: "pink-100",
        gradient: "pink-50",
        IconColor: "text-pink-600"
    },
    {
        title: "Lightning Fast",
        text: "Built with React and modern web technologies. Instant updates, no page reloads needed.",
        Icon: Zap,
        color: "indigo-100",
        gradient: "indigo-50",
        IconColor: "text-indigo-600"
    }
]