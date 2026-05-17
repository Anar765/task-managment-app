import { Link, useNavigate } from 'react-router-dom';
import BrandingAndImage from '../../components/Auth/BrandingAndImage';
import Logo from '../../components/Auth/Logo';
import Footer from '../../components/Auth/Footer';
import EmailField from '../../components/Auth/EmailField';
import PasswordField from '../../components/Auth/PasswordField';
import AuthOptions from '../../components/Auth/AuthOptions';
import type { User } from '../../types/user.type.ts';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AppContext } from '../../App.tsx';
import { Loader } from 'lucide-react';

const LoginPage = ({ setUser } : { setUser: (state: User | undefined) => void }) => {

  const { response, setResponse, setAccessToken } = useContext(AppContext)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({ mode: "onBlur" });

  const handleUserLogin = async (userData: any) => {
    // e.preventDefault();
    // const target = e.target as any;

    // const userData = {
    //   email: target[0].value,
    //   password: target[1].value
    // };

    try {
      // const userLoginResponse = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(userData),
      //   credentials: "include"
      // });

      const userLoginResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData),
          credentials: "include"
        }
      );
      
      const data = await userLoginResponse.json();

      if(!userLoginResponse.ok) {
        console.log(data)
        setResponse({
          type: "error",
          message: data.message || "Invalid credentials"
        });
        throw new Error(`status code - ${userLoginResponse.status}, message - ${userLoginResponse.statusText}`);
      }

      setAccessToken(data.accessToken);
      localStorage.setItem("accessToken", JSON.stringify(data.accessToken));

      localStorage.setItem("user", JSON.stringify(data.user));
      setResponse({
        type: "success",
        message: `Welcome ${data.user.username}`
      });
      setUser(data.user);
      navigate(`/dashboard/${data.user.username}`)

    } catch (error) {

      if(!response || response.type !== "error") {
        setResponse({
          type: "error",
          message: "Something went wrong. Please try again later"
        });
      }
      console.log("Sign in failed: ", error);
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-purple-900/20 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <BrandingAndImage />

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 px-4 py-8 md:p-8">
            <Logo isMobileLogo={true} />

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Welcome back</h2>
              <p className="text-gray-600 dark:text-gray-400">Sign in to continue to your tasks</p>
            </div>

            {/* Login Form */}
            <form className="space-y-5" onSubmit={handleSubmit(handleUserLogin)} noValidate>
              <EmailField {...register("email", { required: {
                value: true,
                message: "Email is required"
              }})} />
              {errors.email && <p className='text-red-600 dark:text-red-400'>{errors.email.message?.toString()}</p>}

              <PasswordField title='Password' {...register("password", {
                required: {
                  value: true,
                  message: "Password is required"
                }
              })} />
              {errors.password && <p className='text-red-600 dark:text-red-400'>{errors.password.message?.toString()}</p>}
              {(response && Object.keys(errors).length === 0) && <p className='text-red-600 dark:text-red-400'>{response.message}</p>}
              <AuthOptions />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 dark:bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors font-medium disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>

            {/* Sign Up Link */}
            <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{' '}
              <Link to="/signup" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium">
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