import { Lock, EyeOff, Eye } from "lucide-react";
import { forwardRef, useState, type ComponentPropsWithRef } from "react";

interface PasswordFieldProps extends ComponentPropsWithRef<"input"> {
    title: string,
}

const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(({ title, ...props } : { title: string }, ref) => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            {/* Password Field */}
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {title}
                </label>
                <div className="relative">
                    <Lock className="w-5 h-5 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                    id="password"
                    ref={ref}
                    {...props}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    />
                    <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
                    >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                </div>
            </div>
        </>
    )
})

export default PasswordField