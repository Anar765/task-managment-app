import { Link } from "react-router-dom"

const AuthOptions = () => {
  return (
    <>
        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
              <input
              type="checkbox"
              className="w-4 h-4 text-indigo-600 border-gray-300 dark:border-gray-600 rounded focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Remember me</span>
          </label>
          <Link to="/forgot-password" className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium">
              Forgot password?
          </Link>
        </div>
    </>
  )
}

export default AuthOptions