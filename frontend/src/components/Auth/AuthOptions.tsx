import { Link } from "react-router-dom"

const AuthOptions = () => {
  return (
    <>
        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
            <input
            type="checkbox"
            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <span className="text-sm text-gray-700">Remember me</span>
        </label>
        <Link to="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
            Forgot password?
        </Link>
        </div>
    </>
  )
}

export default AuthOptions