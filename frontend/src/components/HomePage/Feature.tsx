import type { FeatureCardStyles } from "../../data/featuresData";
import type { LucideIcon } from "lucide-react";

interface FeatureProps {
    title: string;
    text: string;
    Icon: LucideIcon;
    stylesByTheme: FeatureCardStyles;
}

const Feature = ({ title, text, Icon, stylesByTheme }: FeatureProps) => {
    return (
        <>
            <div className={`bg-linear-to-br ${stylesByTheme.gradient} to-white dark:to-gray-800 rounded-2xl p-8 border ${stylesByTheme.borderColor}`}>
                <div className={`w-12 h-12 ${stylesByTheme.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${stylesByTheme.IconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                    {text}
                </p>
            </div>
        </>
    )
}

export default Feature