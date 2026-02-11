import { Link } from 'react-router-dom';
import BrandingAndImage from '../../components/Auth/BrandingAndImage';
import Logo from '../../components/Auth/Logo';
import Footer from '../../components/Auth/Footer';
import EmailField from '../../components/Auth/EmailField';
import PasswordField from '../../components/Auth/PasswordField';
import AuthOptions from '../../components/Auth/AuthOptions';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <BrandingAndImage />

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            <Logo isMobileLogo={true} />

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h2>
              <p className="text-gray-600">Sign in to continue to your tasks</p>
            </div>

            {/* Login Form */}
            <form className="space-y-5">
              <EmailField />
              <PasswordField title='Password' />
              <AuthOptions />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Sign in
              </button>
            </form>

            {/* Sign Up Link */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Sign up for free
              </Link>
            </p>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LoginPage