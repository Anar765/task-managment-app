import { CheckCircle2 } from "lucide-react";

const BrandingAndImage = () => {
  return (
    <>
        {/* Left Side - Branding & Image */}
        <div className="hidden lg:flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-indigo-600 dark:bg-indigo-500 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">DevTasks</h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Task management built specifically for Full stack developers
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-gray-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Organized Workflow</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Keep your development tasks organized by category, priority, and status
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Developer-Focused</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Categories tailored for full-stack development: Backend, Frontend, Database, DevOps
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Track Progress</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Monitor your productivity with real-time statistics and progress tracking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default BrandingAndImage