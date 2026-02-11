import type { FeatureType } from "../../data/featuresData";

const Feature = ({ title, text, Icon, color, gradient, IconColor }: FeatureType) => {
    return (
        <>
            <div className={`bg-linear-to-br from-${gradient} to-white rounded-2xl p-8 border border-${color}`}>
                <div className={`w-12 h-12 bg-${color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${IconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">
                    {text}
                </p>
            </div>
        </>
    )
}

export default Feature