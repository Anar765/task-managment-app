import { useState } from 'react';
import SuccessState from '../../components/Auth/SuccessState';
import ResetLink from '../../components/Auth/ResetLink';
import Logo from '../../components/Auth/Logo';

const ForgotPasswordPage = () => {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 px-4 py-8 md:p-8">
          <Logo isMobileLogo={false} />

          {!emailSent ? <ResetLink setEmailSent={setEmailSent} /> : <SuccessState />}
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