import { Lock, EyeOff, Eye } from "lucide-react";
import { useState } from "react";

const PasswordField = ({ title, setPassword }: { title: string, setPassword?: (state: string) => void }) => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            {/* Password Field */}
            <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                {title}
            </label>
            <div className="relative">
                <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                id="password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword?.(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
            </div>
            </div>
        </>
    )
}

export default PasswordField