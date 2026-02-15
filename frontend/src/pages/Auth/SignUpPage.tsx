import { Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import EmailField from '../../components/Auth/EmailField';
import PasswordField from '../../components/Auth/PasswordField';
import Logo from '../../components/Auth/Logo';
import BrandingAndFeatures from '../../components/Auth/BrandingAndFeatures';
import FullNameField from '../../components/Auth/FullNameField';
import ConfirmPasswordField from '../../components/Auth/ConfirmPasswordField';
import RoleAndPositionField from '../../components/Auth/RoleAndPositionField';
import TermsAndConditions from '../../components/Auth/TermsAndConditions';

const SignUpPage = () => {
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {    
    // 1. Get data from form targets
    const target = e.target as any;
    const userData = {
      username: target[0].value,
      email: target[1].value,
      role: target[2].value,
      password: target[3].value
    };

    try {
      // 2. Perform the POST request directly here
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error(`Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success:", data);

      // 3. Navigate using the INTERNAL path
      navigate(`/dashboard/${data.user.username}`); 

    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <BrandingAndFeatures />

        {/* Right Side - Signup Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 px-4 py-8 md:p-8">
            <Logo isMobileLogo={true} />

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Create your account</h2>
              <p className="text-gray-600">Start managing your tasks in minutes</p>
            </div>

            {/* Signup Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <FullNameField />
              <EmailField />
              <RoleAndPositionField />
              <PasswordField title='Password' />
              <ConfirmPasswordField title='Confirm password' />              
              <TermsAndConditions />
              
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
              <Link to="/login" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Sign in
              </Link>
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