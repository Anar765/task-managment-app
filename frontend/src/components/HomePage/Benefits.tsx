import { Database, Shield, Users, Calendar } from "lucide-react"

const Benefits = () => {
  return (
    <>
        {/* Benefits Section */}
        <section id="benefits" className="py-20 md:py-32 bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
            <div className="container-base">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Why developers choose DevTasks
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                            Stop using generic task managers. Use a tool designed for how you actually work.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center shrink-0">
                                    <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Built for Full-Stack Work</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                    Categories match your tech stack. Organize tasks across your entire PERN stack project.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30  rounded-lg flex items-center justify-center shrink-0">
                                    <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Secure & Private</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                    Your data is encrypted and secure. JWT authentication keeps your tasks private.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center shrink-0">
                                    <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Team Ready</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                    Assign tasks, add comments, collaborate. Perfect for solo devs and small teams.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0">
                                    <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Never Miss Deadlines</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                    Due dates, priority levels, and visual reminders keep you on track.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Stats */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-5 md:p-8">
                            <div className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">5min</div>
                            <p className="text-gray-600 dark:text-gray-400">Average setup time</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-5 md:p-8">
                            <div className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-2">85%</div>
                            <p className="text-gray-600 dark:text-gray-400">Task completion rate</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-5 md:p-8">
                            <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">2k+</div>
                            <p className="text-gray-600 dark:text-gray-400">Active developers</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-5 md:p-8">
                            <div className="text-4xl md:text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
                            <p className="text-gray-600 dark:text-gray-400">Access anywhere</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Benefits