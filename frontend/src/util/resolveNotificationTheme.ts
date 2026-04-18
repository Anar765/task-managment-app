import { CheckCircle2, TriangleAlert, CircleX, Info } from "lucide-react";

export function resolveNotificationTheme(type: "success" | "warning" | "error" | "info") {
    switch(type) {
        case "success":
            return {
                Icon: CheckCircle2,
                color: "text-emerald-500"
            }
        case "warning":
            return {
                Icon: TriangleAlert,
                color: "text-yellow-500"
            }
        case "error":
            return {
                Icon: CircleX,
                color: "text-red-500"
            }
        default:
            return {
                Icon: Info,
                color: "text-blue-500"
            }
    }
}