import { Briefcase } from "lucide-react";
import { forwardRef, type ComponentPropsWithRef } from "react";

const RoleAndPositionField = forwardRef<HTMLSelectElement, ComponentPropsWithRef<"select">>(({...props}, ref) => {
    return (
        <>
            {/* Role/Position Field */}
            <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Role (optional)
                </label>
                <div className="relative">
                    <Briefcase className="w-5 h-5 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                    id="role"
                    ref={ref}
                    {...props}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                        <option value="">Select your role...</option>
                        <option value="full-stack">Full Stack Developer</option>
                        <option value="frontend">Frontend Developer</option>
                        <option value="backend">Backend Developer</option>
                        <option value="devops">DevOps Engineer</option>
                        <option value="student">Student</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
        </>
    )
})

export default RoleAndPositionField