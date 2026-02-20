const SideBar = () => {
  return (
    <>
        {/* Sidebar - Quick Actions & Info */}
        <div className="space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-3">
                <button className="sidebar-category">
                    <div className="flex-hor-center gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Backend</span>
                    </div>
                    <span className="text-sm text-gray-500">6</span>
                </button>
                <button className="sidebar-category">
                    <div className="flex-hor-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Frontend</span>
                    </div>
                    <span className="text-sm text-gray-500">8</span>
                </button>
                <button className="sidebar-category">
                    <div className="flex-hor-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Database</span>
                    </div>
                    <span className="text-sm text-gray-500">4</span>
                </button>
                <button className="sidebar-category">
                    <div className="flex-hor-center gap-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">DevOps</span>
                    </div>
                    <span className="text-sm text-gray-500">3</span>
                </button>
                <button className="sidebar-category">
                    <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-700">Testing</span>
                    </div>
                    <span className="text-sm text-gray-500">3</span>
                </button>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
                <h3 className="font-semibold mb-2">Today's Progress</h3>
                <p className="text-3xl font-bold mb-4">58%</p>
                <p className="text-sm text-indigo-100">
                You've completed 7 out of 12 tasks scheduled for today. Keep up the great work!
                </p>
            </div>
        </div>
    </>
  )
}

export default SideBar