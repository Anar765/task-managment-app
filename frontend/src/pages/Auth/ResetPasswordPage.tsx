import { Lock } from 'lucide-react';
import { useState } from 'react';
import Logo from '../../components/Auth/Logo';
import ConfirmPasswordField from '../../components/Auth/ConfirmPasswordField';
import PasswordField from '../../components/Auth/PasswordField';
import PasswordStrengthIndicator from '../../components/Auth/PasswordStrengthIndicator';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          <Logo isMobileLogo={false} />

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Set new password</h2>
            <p className="text-gray-600">
              Your new password must be different from previously used passwords
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <PasswordField title='New Password' setPassword={setPassword} />
            <PasswordStrengthIndicator password={password} />
            <ConfirmPasswordField title='Confirm new password' />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              Reset password
            </button>
          </form>
        </div>

        {/* Security Note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
          <Lock className="w-4 h-4" />
          <span>This is a secure password reset page</span>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordPage