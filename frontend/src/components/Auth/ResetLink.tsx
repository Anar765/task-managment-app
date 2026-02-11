import { Link } from "react-router-dom";
import { Mail, Send, ArrowLeft } from "lucide-react";

const ResetLink = ({ setEmailSent }: {setEmailSent: (state: boolean) => void}) => {
    return (
        <>
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Reset your password</h2>
                <p className="text-gray-600">
                Enter your email address and we'll send you a link to reset your password
                </p>
            </div>

            {/* Form */}
            <form className="space-y-5">
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

                {/* Submit Button */}
                <button
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    setEmailSent(true);
                }}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center gap-2"
                >
                <Send className="w-4 h-4" />
                Send reset link
                </button>
            </form>

            {/* Back to Login */}
            <div className="mt-6">
                <Link
                to="/login"
                className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                <ArrowLeft className="w-4 h-4" />
                Back to login
                </Link>
            </div>
        </>
    )
}

export default ResetLink