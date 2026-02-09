import { Circle, Calendar, Clock, Tag, CheckCircle2 } from "lucide-react"

const TaskCards = () => {
  return (
    <>
        {/* Task Card - High Priority */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start gap-4">
                <button className="mt-1">
                    <Circle className="w-5 h-5 text-gray-400 hover:text-indigo-600 transition-colors" />
                </button>
                <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">Implement user authentication with JWT</h3>
                        <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full font-medium">High</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                    Set up JWT authentication for the API endpoints. Include refresh token logic and secure cookie handling.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>Due: Jan 28</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Tag className="w-4 h-4" />
                            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded">Backend</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Task Card - In Progress */}
        <div className="bg-white rounded-xl p-6 border border-indigo-200 border-l-4 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start gap-4">
                <button className="mt-1">
                    <Clock className="w-5 h-5 text-blue-500" />
                </button>
                <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">Design database schema for task management</h3>
                        <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium">Medium</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                    Create PostgreSQL tables for users, tasks, and tags with proper relationships and indexes.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>Due: Jan 26</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Tag className="w-4 h-4" />
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded">Database</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Task Card - Completed */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 opacity-75 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start gap-4">
                <button className="mt-1">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                </button>
                <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 line-through">Set up React project with TypeScript</h3>
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">Low</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 line-through">
                    Initialize React app with TypeScript configuration and essential dependencies.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Completed: Jan 24</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Tag className="w-4 h-4" />
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded">Frontend</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Task Card - Normal */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start gap-4">
                <button className="mt-1">
                    <Circle className="w-5 h-5 text-gray-400 hover:text-indigo-600 transition-colors" />
                </button>
                <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">Build REST API endpoints for tasks</h3>
                        <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium">Medium</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                    Create CRUD endpoints for task management with proper validation and error handling.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>Due: Jan 30</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Tag className="w-4 h-4" />
                            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded">Backend</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TaskCards