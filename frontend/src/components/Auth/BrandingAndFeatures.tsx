import { CheckCircle2 } from "lucide-react";

const BrandingAndFeatures = () => {
  return (
    <>
        {/* Left Side - Branding & Features */}
        <div className="hidden lg:flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">DevTasks</h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join thousands of developers managing their tasks efficiently
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Free Forever</h3>
              </div>
              <p className="text-sm text-gray-600">
                No credit card required. Start managing your tasks right away.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Developer-First Design</h3>
              </div>
              <p className="text-sm text-gray-600">
                Built by developers, for developers. Categories that make sense for your workflow.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Secure & Private</h3>
              </div>
              <p className="text-sm text-gray-600">
                Your data is encrypted and secure. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default BrandingAndFeatures