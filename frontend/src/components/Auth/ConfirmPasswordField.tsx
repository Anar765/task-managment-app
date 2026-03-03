import { Lock, EyeOff, Eye } from "lucide-react";
import { forwardRef, useState, type ComponentPropsWithRef } from "react";

interface ConfirmPasswordProps extends ComponentPropsWithRef<"input"> {
    title: string
}

const ConfirmPasswordField = forwardRef<HTMLInputElement, ConfirmPasswordProps>(({ title, ...props }, ref) => {

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <>
            {/* Confirm Password Field */}
            <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-2">
                    {title}
                </label>
                <div className="relative">
                    <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                    id="confirm-password"
                    ref={ref}
                    {...props}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                </div>
            </div>
        </>
    )
})

export default ConfirmPasswordField