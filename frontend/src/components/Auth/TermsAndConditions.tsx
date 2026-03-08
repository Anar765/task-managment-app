import { forwardRef, type ComponentPropsWithRef } from "react";

const TermsAndConditions = forwardRef<HTMLInputElement, ComponentPropsWithRef<"input">>(({...props}, ref) => {
  return (
    <>
        {/* Terms & Conditions */}
        <div className="flex items-start gap-2">
            <input
                id="terms"
                type="checkbox"
                {...props}
                ref={ref}
                className="w-4 h-4 mt-1 text-indigo-600 border-gray-300 dark:border-gray-600 rounded focus:ring-indigo-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400">
                I agree to the{' '}
                <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium">
                Terms of Service
                </a>
                {' '}and{' '}
                <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium">
                Privacy Policy
                </a>
            </label>
        </div>
    </>
  )
})

export default TermsAndConditions