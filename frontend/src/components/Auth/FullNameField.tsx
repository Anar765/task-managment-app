import { User } from "lucide-react";
import { forwardRef, type ComponentPropsWithRef } from "react";

const FullNameField = forwardRef<HTMLInputElement, ComponentPropsWithRef<'input'>>(({...props}, ref) => {
  return (
    <>
        {/* Full Name Field */}
        <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full name
            </label>
            <div className="relative">
                <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                id="fullName"
                type="text"
                ref={ref}
                {...props}
                placeholder="John Doe"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
            </div>
        </div>
    </>
  )
})

export default FullNameField