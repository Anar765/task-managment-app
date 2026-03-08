import { Filter, AlertCircle, CheckCircle2, Tag } from "lucide-react";
import { useState } from "react";
import type { FilterParams } from "../../types/filterParams.type";

const TasksFilter = ({ filterParams, setFilterParams, handleFilterParamsSubmit } : { filterParams: FilterParams, setFilterParams: (state: FilterParams) => void,handleFilterParamsSubmit: (e: React.FormEvent<HTMLFormElement>) => void }) => {
  const [isFilterClicked, setIsFilterClicked] = useState(false);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFilterParams({
      ...filterParams,
      [name]: value
    });
  };

  return (
    <div className="flex-between-center mb-4">
      <h2 className="text-xl font-bold text-gray-900">All Tasks</h2>
      
      <div className="relative">
        <button 
          onClick={() => setIsFilterClicked(!isFilterClicked)}
          className={`flex-hor-center gap-2 px-3 py-2 border rounded-lg transition-all ${
            isFilterClicked 
              ? "bg-blue-50 dark:bg-blue-900/30 border-blue-500 text-blue-600 dark:text-blue-300 shadow-sm" 
              : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-gray-50 text-gray-700 dark:text-gray-300"
          }`}
        >
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Filter</span>
        </button>

        {isFilterClicked && (
          <div className="absolute right-0 mt-2 z-30 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-4 animate-in fade-in zoom-in-95 duration-100 origin-top-right">
            <div className="flex-between-center mb-3 pb-2 border-b border-gray-100 dark:border-gray-700">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">Filters</span>
              <button 
                onClick={() => setFilterParams({priority: "", status: "", category: ""})}
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
              >
                Reset
              </button>
            </div>

            <form className="space-y-4" onSubmit={(e) => {handleFilterParamsSubmit(e), setIsFilterClicked(false)}}>
              {/* Priority Section */}
              <div className="space-y-1.5">
                <div className="flex-hor-center gap-2 text-gray-700 dark:text-gray-300 ml-1">
                  <AlertCircle className="w-3.5 h-3.5 text-orange-500" />
                  <label className="text-xs font-semibold">Priority</label>
                </div>
                <select 
                  onChange={handleSelectChange} 
                  value={filterParams.priority} 
                  name="priority" 
                  className="w-full text-sm bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-2 py-2 outline-none focus:ring-2 focus:ring-blue-500/10 transition-all"
                >
                  <option value="" className="dark:bg-gray-800">All Priorities</option>
                  <option value="Low" className="dark:bg-gray-800">Low</option>
                  <option value="Medium" className="dark:bg-gray-800">Medium</option>
                  <option value="High" className="dark:bg-gray-800">High</option>
                </select>
              </div>

              {/* Status Section */}
              <div className="space-y-1.5">
                <div className="flex-hor-center gap-2 text-gray-700 dark:text-gray-300 ml-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <label className="text-xs font-semibold">Status</label>
                </div>
                <select 
                  onChange={handleSelectChange} 
                  value={filterParams.status} 
                  name="status" 
                  className="w-full text-sm bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-2 py-2 outline-none focus:ring-2 focus:ring-blue-500/10 transition-all"
                >
                  <option value="" className="dark:bg-gray-800">All Statuses</option>
                  <option value="Not started" className="dark:bg-gray-800">Not started</option>
                  <option value="In progress" className="dark:bg-gray-800">In progress</option>
                  <option value="Completed" className="dark:bg-gray-800">Completed</option>
                  <option value="Overdue" className="dark:bg-gray-800">Overdue</option>
                </select>
              </div>

              {/* Category */}
              <div className="space-y-1.5">
                <div className="flex-hor-center gap-2 text-gray-700 dark:text-gray-300 ml-1">
                  <Tag className="w-3.5 h-3.5 text-purple-500" />
                  <label className="text-xs font-semibold">Category</label>
                </div>
                <select 
                  onChange={handleSelectChange} 
                  value={filterParams.category} 
                  name="category" 
                  className="w-full text-sm bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-2 py-2 outline-none focus:ring-2 focus:ring-blue-500/10 transition-all"
                >
                  <option value="" className="dark:bg-gray-800">All Categories</option>
                  <option value="Frontend" className="dark:bg-gray-800">Frontend</option>
                  <option value="Backend" className="dark:bg-gray-800">Backend</option>
                  <option value="Database" className="dark:bg-gray-800">Database</option>
                  <option value="DevOps" className="dark:bg-gray-800">DevOps</option>
                  <option value="Testing" className="dark:bg-gray-800">Testing</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex-hor-center gap-2 pt-2 mt-2 border-t border-gray-100 dark:border-gray-700">
                <button 
                  type="button"
                  onClick={() => setIsFilterClicked(false)}
                  className="flex-1 px-3 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors border border-gray-200 dark:border-gray-600"
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