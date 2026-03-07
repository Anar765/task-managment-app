import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const NewTaskForm = ({ handleNewTaskSubmit, setIsNewTaskFormOpen }: { handleNewTaskSubmit: (task: any) => void, setIsNewTaskFormOpen: (state: boolean) => void }) => {

  const [priorityDropdown, setPriorityDropdown] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <div className="fixed inset-0 z-50 flex-center p-4 backdrop-blur-sm bg-black/30 animate-in fade-in duration-200">
      <form
        onSubmit={handleSubmit(handleNewTaskSubmit)}
        noValidate
        className="flex flex-col gap-5 p-8 bg-white rounded-2xl w-full max-w-md shadow-2xl border border-gray-100"
      >
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-gray-900">Create New Task</h3>
          <p className="text-sm text-gray-500">Fill in the details to track your next milestone.</p>
        </div>

        <div className="space-y-4">
          {/* Title Input */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="title" className="text-sm font-medium text-gray-700">Title</label>
            <input 
              type="text"
              {...register("title", {
                required: {
                  value: true,
                  message: "Title is required"
                }
              })}
              name="title"
              id="title"
              placeholder="e.g. Design System"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" 
            />
            {errors.title && <p className="text-red-600">{errors.title?.message?.toString()}</p>}
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
            <textarea 
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is required"
                },
                minLength: {
                  value: 20,
                  message: "Write understandable description"
                }
              })}
              name="description" 
              id="description" 
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            ></textarea>
            {errors.description && <p className="text-red-600">{errors.description?.message?.toString()}</p>}
          </div>

          {/* Category Section */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="category" className="text-sm font-medium text-gray-700">Category</label>
            <div className="relative">
              <select 
                {...register("category", {
                  required: {
                    value: true,
                    message: "Category is required"
                  }
                })}
                name="category"
                id="category"
                onClick={() => setCategoryDropdown(prevState => !prevState)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white transition-all appearance-none cursor-pointer"
                defaultValue=""
                required
              >
                <option value="" disabled>Select a category</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Database">Database</option>
                <option value="DevOps">DevOps</option>
                <option value="Testing">Testing</option>
              </select>
              <ChevronDown className={`chevron-select-styles ${categoryDropdown ? "rotate-180" : "rotate-0"}`}/>
            </div>
            {errors.category && <p className="text-red-600">{errors.category?.message?.toString()}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Priority */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="priority" className="text-sm font-medium text-gray-700">Priority</label>
              <div className="relative">
                <select 
                  {...register("priority", {
                    required: "Priority is required"
                  })}
                  name="priority"
                  id="priority"
                  onClick={() => setPriorityDropdown(prevState => !prevState)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white transition-all appearance-none cursor-pointer"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
                <ChevronDown className={`chevron-select-styles ${priorityDropdown ? "rotate-180" : "rotate-0"}`} />
              </div>
              {errors.priority && <p className="text-red-600">{errors.priority?.message?.toString()}</p>}
            </div>

            {/* Due Date */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="date" className="text-sm font-medium text-gray-700">Due Date</label>
              <input 
                type="date"
                {...register("date", {
                  required: "Date is required"
                })}
                name="date"
                id="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" 
              />
              {errors.date && <p className="text-red-600">{errors.date?.message?.toString()}</p>}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex-hor-center gap-3 mt-2">
          <button 
            type="button"
            onClick={() => setIsNewTaskFormOpen(false)}
            className="flex-1 px-4 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit"
            className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-200 transition-all active:scale-[0.98]"
          >
            Save Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewTaskForm