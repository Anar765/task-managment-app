import { CheckCircle2 } from "lucide-react";

const Logo = ({ isMobileLogo }: { isMobileLogo: boolean}) => {
  return (
    <>
        {/* Logo */}
        <div className={`${isMobileLogo ? "lg:hidden" : ""} flex items-center gap-3 mb-6`}>
          <div className="w-10 h-10 bg-indigo-600 dark:bg-indigo-500 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">DevTasks</h1>
        </div>
    </>
  )
}

export default Logo