import { Search, CheckCircle2, Plus } from 'lucide-react';

const Header = ({ setIsNewTaskFormOpen, setSearchTask } : { setIsNewTaskFormOpen: (state: boolean) => void, setSearchTask: (state: string) => void }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        {/* Changed to flex-wrap for small screens */}
        <div className="flex-between-center gap-4 flex-wrap sm:flex-nowrap">
          
          {/* Logo Section - Always visible */}
          <div className="flex-hor-center gap-3 shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">DevTasks</h1>
          </div>

          {/* Search and Action Section */}
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end order-3 sm:order-0">
            
            {/* Search - Shrinks on mobile, grows on desktop */}
            <div className="relative flex-1 sm:flex-none sm:w-64">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearchTask(e.currentTarget.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>

            {/* New Task Button - Icon only on tiny screens, text on larger ones */}
            <button onClick={() => setIsNewTaskFormOpen(true)} className="px-3 sm:px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex-hor-center gap-2 transition-all shrink-0">
              <Plus className="w-5 h-5" />
              <span className="hidden sm:inline">New Task</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header