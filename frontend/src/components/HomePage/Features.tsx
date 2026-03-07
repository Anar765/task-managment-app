import { useContext } from "react";
import { features } from "../../data/featuresData";
import Feature from "./Feature";
import { AppContext } from "../../App";

const Features = () => {

    const { isDarkMode } = useContext(AppContext);

    return (
        <>
            {/* Features Section */}
            <section id="features" className="py-20 md:py-32 bg-white dark:bg-gray-800">
                <div className="container-base">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Everything you need to stay organized
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
                                stylesByTheme={isDarkMode ? feature.darkMode : feature.lightMode}
                            />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features