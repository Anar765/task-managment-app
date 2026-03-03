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

const LoginPage = ({ setUser } : { setUser: (state: User) => void }) => {

  const { response, setResponse } = useContext(AppContext)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
  } = useForm({ mode: "onBlur" });

  const handleUserLogin = async (userData: any) => {
    // e.preventDefault();
    // const target = e.target as any;

    // const userData = {
    //   email: target[0].value,
    //   password: target[1].value
    // };

    try {
      const userLoginResponse = await fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      
      const data = await userLoginResponse.json();

      if(!userLoginResponse.ok) {
        console.log(data)
        setResponse(data.message);
        throw new Error(`status code - ${userLoginResponse.status}, message - ${userLoginResponse.statusText}`);
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      setResponse("");
      setUser(data.user);
      navigate(`/dashboard/${data.user.username}`)

    } catch (error) {
      console.log("Sign in failed: ", error);
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <BrandingAndImage />

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 px-4 py-8 md:p-8">
            <Logo isMobileLogo={true} />

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h2>
              <p className="text-gray-600">Sign in to continue to your tasks</p>
            </div>

            {/* Login Form */}
            <form className="space-y-5" onSubmit={handleSubmit(handleUserLogin)}>
              <EmailField {...register("email")} />
              <PasswordField title='Password' {...register("password")} />
              {response && <p className='text-red-600'>{response}</p>}
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