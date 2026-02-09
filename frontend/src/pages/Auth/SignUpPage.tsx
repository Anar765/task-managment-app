import { CheckCircle2, Mail, Lock, User, Eye, EyeOff, Briefcase } from 'lucide-react';
import { useState } from 'react';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding & Features */}
        <div className="hidden lg:flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">DevTasks</h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join thousands of developers managing their tasks efficiently
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Free Forever</h3>
              </div>
              <p className="text-sm text-gray-600">
                No credit card required. Start managing your tasks right away.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Developer-First Design</h3>
              </div>
              <p className="text-sm text-gray-600">
                Built by developers, for developers. Categories that make sense for your workflow.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Secure & Private</h3>
              </div>
              <p className="text-sm text-gray-600">
                Your data is encrypted and secure. We respect your privacy.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">DevTasks</h1>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Create your account</h2>
              <p className="text-gray-600">Start managing your tasks in minutes</p>
            </div>

            {/* Signup Form */}
            <form className="space-y-4">
              {/* Full Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full name
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>

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

              {/* Role/Position Field */}
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                  Role (optional)
                </label>
                <div className="relative">
                  <Briefcase className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    id="role"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">Select your role...</option>
                    <option value="full-stack">Full Stack Developer</option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="devops">DevOps Engineer</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
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
                <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters</p>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm password
                </label>
                <div className="relative">
                  <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    id="confirm-password"
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

              {/* Terms & Conditions */}
              <div className="flex items-start gap-2">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 mt-1 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
                    Terms of Service
                  </a>
                  {' '}and{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Create account
              </button>
            </form>

            {/* Sign In Link */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Sign in
              </a>
            </p>
          </div>

          {/* Security Badge */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
            <Lock className="w-4 h-4" />
            <span>Your information is secure and encrypted</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage