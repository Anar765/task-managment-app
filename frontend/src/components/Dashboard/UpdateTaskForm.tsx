import type { Task } from "../../types/tasks.type";
import { ChevronDown, Loader } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const UpdateTaskForm = ({ task, updateTask, setIsUpdateTaskFormOpen } : { updateTask: (updatedFields: any) => void, setIsUpdateTaskFormOpen: (state: boolean) => void, task: Task }) => {

    const [priorityDropdown, setPriorityDropdown] = useState(false);
    const [categoryDropdown, setCategoryDropdown] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

    return (
        <div className="fixed inset-0 z-50 flex-center p-4 backdrop-blur-sm bg-black/30 dark:bg-black/50 animate-in fade-in duration-200">
            <form
                onSubmit={handleSubmit(updateTask)} 
                className="flex flex-col gap-5 p-8 bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md shadow-2xl border border-gray-100 dark:border-gray-700"
            >
                <div className="space-y-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Update Task</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Update the details of your task.</p>
                </div>

                <div className="space-y-4">
                {/* Title Input */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="title" className="text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                    <input 
                    {...register("title", {
                        required: "Title is required"
                    })}
                    type="text" 
                    name="title"
                    id="title"
                    defaultValue={task.title}
                    placeholder="e.g. Design System"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all" 
                    />
                    {errors.title && <p className="text-red-600 dark:text-red-400 text-xs">{errors.title?.message?.toString()}</p>}
                </div>

                {/* Description */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="description" className="text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                    <textarea 
                    {...register("description", {
                        required: "Description is required",
                        minLength: {
                            value: 20,
                            message: "Write understandable description"
                        }
                    })}
                    name="description" 
                    id="description" 
                    defaultValue={task.description}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                    ></textarea>
                    {errors.description && <p className="text-red-600 dark:text-red-400 text-xs">{errors.description?.message?.toString()}</p>}
                </div>

                {/* Category Section */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="category" className="text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                    <div className="relative">
                        <select 
                        {...register("category", {
                            required: "Category is required"
                        })}
                        name="category"
                        id="category"
                        onClick={() => setCategoryDropdown(prevState => !prevState)}
                        defaultValue={task.category}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all appearance-none cursor-pointer"
                        required
                        >
                            <option value="" disabled className="dark:bg-gray-800">Select a category</option>
                            <option value="Frontend" className="dark:bg-gray-800">Frontend</option>
                            <option value="Backend" className="dark:bg-gray-800">Backend</option>
                            <option value="Database" className="dark:bg-gray-800">Database</option>
                            <option value="DevOps" className="dark:bg-gray-800">DevOps</option>
                            <option value="Testing" className="dark:bg-gray-800">Testing</option>
                        </select>
                        <ChevronDown className={`chevron-select-styles text-gray-400 ${categoryDropdown ? "rotate-180" : "rotate-0"}`}/>
                    </div>
                    {errors.category && <p className="text-red-600 dark:text-red-400 text-xs">{errors.category?.message?.toString()}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {/* Priority */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="priority" className="text-sm font-medium text-gray-700 dark:text-gray-300">Priority</label>
                        <div className="relative">
                            <select 
                                {...register("priority", {
                                    required: "Priority is required"
                                })}
                                defaultValue={task.priority}
                                name="priority"
                                id="priority"
                                onClick={() => setPriorityDropdown(prevState => !prevState)}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all appearance-none cursor-pointer"
                            >
                                <option value="Low" className="dark:bg-gray-800">Low</option>
                                <option value="Medium" className="dark:bg-gray-800">Medium</option>
                                <option value="High" className="dark:bg-gray-800">High</option>
                            </select>
                            <ChevronDown className={`chevron-select-styles text-gray-400 ${priorityDropdown ? "rotate-180" : "rotate-0"}`}/>
                        </div>
                        {errors.priority && <p className="text-red-600 dark:text-red-400 text-xs">{errors.priority?.message?.toString()}</p>}
                    </div>

                    {/* Due Date */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="date" className="text-sm font-medium text-gray-700 dark:text-gray-300">Due Date</label>
                        <input 
                            {...register("date", {
                                required: "Date is required"
                            })}
                            type="date" 
                            name="date" 
                            id="date"
                            defaultValue={new Date(task.date).toISOString().split('T')[0]}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white scheme-light dark:scheme-dark" 
                        />
                        {errors.date && <p className="text-red-600 dark:text-red-400 text-xs">{errors.date?.message?.toString()}</p>}
                    </div>
                </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 mt-2">
                <button 
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => setIsUpdateTaskFormOpen(false)}
                    className="flex-1 px-4 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-colors disabled:opacity-50"
                >
                    Cancel
                </button>
                <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-200 dark:shadow-none transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <Loader className="w-4 h-4 animate-spin" />
                            <span>Updating...</span>
                        </>
                    ): (
                        "Update Task"
                    )}
                </button>
                </div>
            </form>
        </div>
    )
}

export default UpdateTaskForm