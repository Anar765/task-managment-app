import type { Task } from "../../types/tasks.type"

const UpdateTaskForm = ({ task, updateTask, setIsUpdateTaskFormOpen } : { updateTask: (e: React.FormEvent<HTMLFormElement>) => void, setIsUpdateTaskFormOpen: (state: boolean) => void, task: Task }) => {

    return (
        <div className="fixed inset-0 z-50 flex-center p-4 backdrop-blur-sm bg-black/30 animate-in fade-in duration-200">
            <form method="POST"
                onSubmit={updateTask} 
                className="flex flex-col gap-5 p-8 bg-white rounded-2xl w-full max-w-md shadow-2xl border border-gray-100"
            >
                <div className="space-y-1">
                <h3 className="text-xl font-bold text-gray-900">Update Task</h3>
                <p className="text-sm text-gray-500">Update the details of your task.</p>
                </div>

                <div className="space-y-4">
                {/* Title Input */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="title" className="text-sm font-medium text-gray-700">Title</label>
                    <input 
                    type="text" 
                    name="title"
                    id="title"
                    defaultValue={task.title}
                    placeholder="e.g. Design System"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" 
                    />
                </div>

                {/* Description */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
                    <textarea 
                    name="description" 
                    id="description" 
                    defaultValue={task.description}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    ></textarea>
                </div>

                {/* Category Section */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="category" className="text-sm font-medium text-gray-700">Category</label>
                    <select 
                    name="category" 
                    id="category" 
                    defaultValue={task.category}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white transition-all appearance-none cursor-pointer"
                    required
                    >
                        <option value="" disabled>Select a category</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="Database">Database</option>
                        <option value="DevOps">DevOps</option>
                        <option value="Testing">Testing</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {/* Priority */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="priority" className="text-sm font-medium text-gray-700">Priority</label>
                        <select defaultValue={task.priority} name="priority" id="priority" className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white transition-all appearance-none cursor-pointer">
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>

                    {/* Due Date */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="date" className="text-sm font-medium text-gray-700">Due Date</label>
                        <input 
                            type="date" 
                            name="date" 
                            id="date"
                            defaultValue={new Date(task.date).toISOString().split('T')[0]}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" 
                        />
                    </div>
                </div>
                </div>

                {/* Buttons */}
                <div className="flex-hor-center gap-3 mt-2">
                <button 
                    type="button"
                    onClick={() => setIsUpdateTaskFormOpen(false)}
                    className="flex-1 px-4 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                >
                    Cancel
                </button>
                <button 
                    type="submit"
                    className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-200 transition-all active:scale-[0.98]"
                >
                    Update Task
                </button>
                </div>
            </form>
        </div>
    )
}

export default UpdateTaskForm