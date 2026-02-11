import { Check } from "lucide-react";

const PasswordStrengthIndicator = ({ password }: { password: string }) => {

    // Password strength indicators
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const passwordStrength = [hasMinLength, hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar].filter(Boolean).length;

    return (
        <>
            {/* Password Strength Indicator */}
            {password && (
              <div className="space-y-3">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`h-1 flex-1 rounded-full transition-colors ${
                        passwordStrength >= level
                          ? passwordStrength <= 2
                            ? 'bg-red-500'
                            : passwordStrength <= 3
                            ? 'bg-yellow-500'
                            : 'bg-green-500'
                          : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-600">
                  Password strength:{' '}
                  <span
                    className={`font-medium ${
                      passwordStrength <= 2
                        ? 'text-red-600'
                        : passwordStrength <= 3
                        ? 'text-yellow-600'
                        : 'text-green-600'
                    }`}
                  >
                    {passwordStrength <= 2 ? 'Weak' : passwordStrength <= 3 ? 'Medium' : 'Strong'}
                  </span>
                </p>
              </div>
            )}

            {/* Password Requirements */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <p className="text-xs font-medium text-gray-700 mb-2">Password must contain:</p>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center ${
                      hasMinLength ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  >
                    {hasMinLength && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <span className={`text-xs ${hasMinLength ? 'text-green-700' : 'text-gray-600'}`}>
                    At least 8 characters
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center ${
                      hasUpperCase ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  >
                    {hasUpperCase && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <span className={`text-xs ${hasUpperCase ? 'text-green-700' : 'text-gray-600'}`}>
                    One uppercase letter
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center ${
                      hasLowerCase ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  >
                    {hasLowerCase && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <span className={`text-xs ${hasLowerCase ? 'text-green-700' : 'text-gray-600'}`}>
                    One lowercase letter
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center ${
                      hasNumber ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  >
                    {hasNumber && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <span className={`text-xs ${hasNumber ? 'text-green-700' : 'text-gray-600'}`}>
                    One number
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center ${
                      hasSpecialChar ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  >
                    {hasSpecialChar && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <span className={`text-xs ${hasSpecialChar ? 'text-green-700' : 'text-gray-600'}`}>
                    One special character
                  </span>
                </div>
              </div>
            </div>
        </>
    )
}

export default PasswordStrengthIndicator