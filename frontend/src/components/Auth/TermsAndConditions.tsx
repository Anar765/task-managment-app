const TermsAndConditions = () => {
  return (
    <>
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
    </>
  )
}

export default TermsAndConditions