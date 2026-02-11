import { features } from "../../data/featuresData";
import Feature from "./Feature";

const Features = () => {
    return (
        <>
            {/* Features Section */}
            <section id="features" className="py-20 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Everything you need to stay organized
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Built with developers in mind. All the features you need, none of the bloat.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            return <Feature
                                key={index}
                                title={feature.title}
                                text={feature.text}
                                Icon={feature.Icon}
                                color={feature.color}
                                gradient={feature.gradient}
                                IconColor={feature.IconColor}
                            />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features