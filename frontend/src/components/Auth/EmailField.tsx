import { Mail } from "lucide-react";

const EmailField = () => {
  return (
    <>
        {/* Email Field */}
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
            </label>
            <div className="relative">
                <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                id="email"
                type="email"
                placeholder="developer@example.com"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
            </div>
        </div>
    </>
  )
}

export default EmailField