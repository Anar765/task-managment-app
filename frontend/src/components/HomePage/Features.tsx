import { Code2, Target, BarChart3, Tag, MessageSquare, Zap } from "lucide-react"

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
                {/* Feature 1 */}
                <div className="bg-linear-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Code2 className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Developer Categories</h3>
                <p className="text-gray-600">
                    Organize tasks by Backend, Frontend, Database, DevOps, and Testing. Categories that actually make sense.
                </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-linear-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Priority Management</h3>
                <p className="text-gray-600">
                    Set priorities and due dates. Visual indicators help you focus on what matters most.
                </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-linear-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Progress Tracking</h3>
                <p className="text-gray-600">
                    Real-time statistics and progress tracking. See your productivity at a glance.
                </p>
                </div>

                {/* Feature 4 */}
                <div className="bg-linear-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-100">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Tag className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Tagging</h3>
                <p className="text-gray-600">
                    Tag your tasks with keywords. Quick templates for common dev tasks like auth, API, testing.
                </p>
                </div>

                {/* Feature 5 */}
                <div className="bg-linear-to-br from-pink-50 to-white rounded-2xl p-8 border border-pink-100">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Task Comments</h3>
                <p className="text-gray-600">
                    Add comments and notes to tasks. Keep all context in one place for better collaboration.
                </p>
                </div>

                {/* Feature 6 */}
                <div className="bg-linear-to-br from-indigo-50 to-white rounded-2xl p-8 border border-indigo-100">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-gray-600">
                    Built with React and modern web technologies. Instant updates, no page reloads needed.
                </p>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default Features