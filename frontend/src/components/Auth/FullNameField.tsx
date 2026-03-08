import { User } from "lucide-react";
import { forwardRef, type ComponentPropsWithRef } from "react";

const FullNameField = forwardRef<HTMLInputElement, ComponentPropsWithRef<'input'>>(({...props}, ref) => {
  return (
    <>
        {/* Full Name Field */}
        <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full name
            </label>
            <div className="relative">
                <User className="w-5 h-5 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                id="fullName"
                type="text"
                ref={ref}
                {...props}
                placeholder="John Doe"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
            </div>
        </div>
    </>
  )
})

export default FullNameField