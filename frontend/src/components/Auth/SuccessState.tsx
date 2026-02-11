import { Link } from "react-router-dom";
import { Send, ArrowLeft} from "lucide-react";

const SuccessState = () => {
    return (
        <>
            {/* Success State */}
            <div className="text-center">
                {/* Success Icon */}
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-green-600" />
                </div>

                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Check your email</h2>
                    <p className="text-gray-600">
                    We've sent a password reset link to
                    </p>
                    <p className="text-gray-900 font-medium mt-1">developer@example.com</p>
                </div>

                {/* Instructions */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-blue-900">
                    Click the link in the email to reset your password. The link will expire in 1 hour.
                    </p>
                </div>

                {/* Resend Email */}
                <div className="space-y-4">
                    <p className="text-sm text-gray-600">Didn't receive the email?</p>
                    <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                    Resend email
                    </button>
                </div>

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
            </div>
        </>
    )
}

export default SuccessState