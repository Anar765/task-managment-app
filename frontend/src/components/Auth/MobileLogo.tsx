import { CheckCircle2 } from "lucide-react";

const MobileLogo = () => {
  return (
    <>
        {/* Mobile Logo */}
        <div className="lg:hidden flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">DevTasks</h1>
        </div>
    </>
  )
}

export default MobileLogo