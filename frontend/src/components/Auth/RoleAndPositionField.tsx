import { Briefcase, ChevronDown } from "lucide-react";
import { forwardRef, useRef, useState, type ComponentPropsWithRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";

const RoleAndPositionField = forwardRef<HTMLSelectElement, ComponentPropsWithRef<"select">>(({...props}, ref) => {

    const [roleDropdown, setRoleDropdown] = useState<boolean>(false);
    const roleDropdownRef = useRef<HTMLDivElement>(null);

    useClickOutside(roleDropdown, setRoleDropdown, roleDropdownRef);

    return (
        <>
            {/* Role/Position Field */}
            <div  ref={roleDropdownRef}>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Role (optional)
                </label>
                <div className="relative">
                    <Briefcase className="w-5 h-5 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                    onClick={() => setRoleDropdown(prevState => !prevState)}
                    id="role"
                    ref={ref}
                    {...props}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                        <option value="">Select your role...</option>
                        <option value="full-stack">Full Stack Developer</option>
                        <option value="frontend">Frontend Developer</option>
                        <option value="backend">Backend Developer</option>
                        <option value="devops">DevOps Engineer</option>
                        <option value="student">Student</option>
                        <option value="other">Other</option>
                    </select>
                    <ChevronDown className={`chevron-select-styles top-4.5 text-gray-400 ${roleDropdown ? "rotate-180" : "rotate-0"}`}/>
                </div>
            </div>
        </>
    )
})

export default RoleAndPositionField