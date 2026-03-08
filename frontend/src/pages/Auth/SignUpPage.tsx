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
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AppContext } from '../../App';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { response, setResponse } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const handleUserSignUpSubmit = async (newUserData: any) => {    
    // 1. Get data from form targets
    // const target = e.target as any;
    // const userData = {
    //   username: target[0].value,
    //   email: target[1].value,
    //   role: target[2].value,
    //   password: target[3].value
    // };

    try {
      // 2. Perform the POST request directly here
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
      });

      const data = await res.json();

      if (!res.ok) {
        setResponse(data.message);
        throw new Error(`Status: ${res.status}`);
      }

      console.log("Success:", data);

      // 3. Navigate using the INTERNAL path
      navigate(`/dashboard/${data.user.username}`); 

    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-purple-900/20 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <BrandingAndFeatures />

        {/* Right Side - Signup Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 px-4 py-8 md:p-8">
            <Logo isMobileLogo={true} />

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Create your account</h2>
              <p className="text-gray-600 dark:text-gray-400">Start managing your tasks in minutes</p>
            </div>

            {/* Signup Form */}
            <form className="space-y-4" onSubmit={handleSubmit(handleUserSignUpSubmit)}>
              <FullNameField {...register("fullName", {
                required: {
                  value: true,
                  message: "Full name is required"
                }
              })} />
              {errors.fullName && <p className='text-red-600 dark:text-red-400'>{errors.fullName?.message?.toString()}</p>}
              <EmailField {...register("email", {
                required: {
                  value: true,
                  message: "Email is required"
                }
              })} />
              {errors.email && <p className='text-red-600 dark:text-red-400'>{errors.email?.message?.toString()}</p>}
              <RoleAndPositionField {...register("role", {
                required: {
                  value: true,
                  message: "Role is required"
                }
              })} />
              {errors.role && <p className='text-red-600 dark:text-red-400'>{errors.role?.message?.toString()}</p>}
              <PasswordField title='Password' {...register("password", {
                required: {
                  value: true,
                  message: "Password is required"
                }
              })} />
              {errors.password && <p className='text-red-600 dark:text-red-400'>{errors.password?.message?.toString()}</p>}
              <ConfirmPasswordField title='Confirm password' {...register("confirm-password", {
                required: {
                  value: true,
                  message: "Please confirm your password"
                },
                validate: (value) => value === watch('password') || "The passwords do not match"
              })} />
              {errors['confirm-password'] && <p className='text-red-600 dark:text-red-400'>{errors['confirm-password'].message?.toString()}</p> }
              {(Object.keys(errors).length === 0 && response) && <p className='text-red-600 dark:text-red-400'>{response}</p>}
              <TermsAndConditions {...register("terms", {
                required: {
                  value: true,
                  message: "Please accept the terms and conditions to create your account"
                }
              })} />
              {errors.terms && <p className='text-red-600 dark:text-red-400'>{errors.terms?.message?.toString()}</p>}
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 dark:bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors font-medium"
              >
                Create account
              </button>
            </form>

            {/* Sign In Link */}
            <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium">
                Sign in
              </Link>
            </p>
          </div>

          {/* Security Badge */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Lock className="w-4 h-4" />
            <span>Your information is secure and encrypted</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage