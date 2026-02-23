import { Filter, AlertCircle, CheckCircle2, Tag } from "lucide-react";
import { useState } from "react";
import type { FilterParams } from "../../types/filterParams.type";

const TasksFilter = ({ filterParams, handleFilterParamsSubmit } : { filterParams: FilterParams, handleFilterParamsSubmit: (e: React.FormEvent<HTMLFormElement>) => void }) => {
  const [isFilterClicked, setIsFilterClicked] = useState(false);

  return (
    <div className="flex-between-center mb-4">
      <h2 className="text-xl font-bold text-gray-900">All Tasks</h2>
      
      <div className="relative">
        <button 
          onClick={() => setIsFilterClicked(!isFilterClicked)}
          className={`flex-hor-center gap-2 px-3 py-2 border rounded-lg transition-all ${
            isFilterClicked 
              ? "bg-blue-50 border-blue-500 text-blue-600 shadow-sm" 
              : "bg-white border-gray-300 hover:bg-gray-50 text-gray-700"
          }`}
        >
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Filter</span>
        </button>

        {isFilterClicked && (
          <div className="absolute right-0 mt-2 z-30 w-64 bg-white border border-gray-200 rounded-xl shadow-xl p-4 animate-in fade-in zoom-in-95 duration-100 origin-top-right">
            <div className="flex-between-center mb-3 pb-2 border-b border-gray-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Filters</span>
              <button 
                onClick={() => setIsFilterClicked(false)}
                className="text-xs text-blue-600 hover:underline"
              >
                Reset
              </button>
            </div>

            <form className="space-y-4" onSubmit={(e) => {handleFilterParamsSubmit(e), setIsFilterClicked(false)}}>
              {/* Priority Section */}
              <div className="space-y-1.5">
                <div className="flex-hor-center gap-2 text-gray-700 ml-1">
                  <AlertCircle className="w-3.5 h-3.5 text-orange-500" />
                  <label className="text-xs font-semibold">Priority</label>
                </div>
                <select defaultValue={filterParams.priority} name="priority" className="w-full text-sm bg-gray-50 border border-gray-200 rounded-lg px-2 py-2 outline-none focus:ring-2 focus:ring-blue-500/10">
                  <option value="">All Priorities</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              {/* Status Section */}
              <div className="space-y-1.5">
                <div className="flex-hor-center gap-2 text-gray-700 ml-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <label className="text-xs font-semibold">Status</label>
                </div>
                <select defaultValue={filterParams.status} name="status" className="w-full text-sm bg-gray-50 border border-gray-200 rounded-lg px-2 py-2 outline-none focus:ring-2 focus:ring-blue-500/10">
                  <option value="">All Statuses</option>
                  <option value="Not started">Not started</option>
                  <option value="In progress">In progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              {/* Category */}
              <div className="space-y-1.5">
                <div className="flex-hor-center gap-2 text-gray-700 ml-1">
                  <Tag className="w-3.5 h-3.5 text-purple-500" />
                  <label className="text-xs font-semibold">Category</label>
                </div>
                <select defaultValue={filterParams.category} name="category" className="w-full text-sm bg-gray-50 border border-gray-200 rounded-lg px-2 py-2 outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500">
                  <option value="">All Categories</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Database">Database</option>
                  <option value="DevOps">DevOps</option>
                  <option value="Testing">Testing</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex-hor-center gap-2 pt-2 mt-2 border-t border-gray-100">
                <button 
                  type="button"
                  onClick={() => setIsFilterClicked(false)}
                  className="flex-1 px-3 py-2 text-xs font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-3 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all active:scale-95"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default TasksFilter