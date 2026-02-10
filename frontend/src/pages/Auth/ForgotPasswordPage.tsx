import { CheckCircle2, Mail, ArrowLeft, Send } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">DevTasks</h1>
          </div>

          {!emailSent ? (
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
          ) : (
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
          )}
        </div>

        {/* Help Text */}
        <p className="mt-6 text-center text-xs text-gray-500">
          Need help?{' '}
          <a href="#" className="text-indigo-600 hover:text-indigo-700">
            Contact support
          </a>
        </p>
      </div>
    </div>
  );
}

export default ForgotPasswordPage