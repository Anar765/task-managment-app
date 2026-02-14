import { Zap, ArrowRight, CheckCircle2, Clock, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <>
        {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-indigo-50 via-white to-purple-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Built for PERN Stack Developers
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Manage your dev tasks like a <span className="text-indigo-600">pro</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The task management app designed specifically for full-stack developers. 
                Organize your work with categories that match your workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/signup" className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium text-lg flex items-center justify-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="#features" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-medium text-lg flex items-center justify-center gap-2">
                  See Features
                </a>
              </div>
              <div className="flex items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Free forever</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>5 min setup</span>
                </div>
              </div>
            </div>

            {/* Right - Dashboard Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6">
                {/* Mini Dashboard Preview */}
                <div className="space-y-4">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-blue-600">24</div>
                      <div className="text-xs text-blue-700">Total</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-green-600">14</div>
                      <div className="text-xs text-green-700">Done</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-orange-600">8</div>
                      <div className="text-xs text-orange-700">Active</div>
                    </div>
                  </div>

                  {/* Task Cards */}
                  <div className="space-y-3">
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full mt-0.5"></div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 mb-1">Implement JWT authentication</div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded">Backend</span>
                            <span className="text-xs px-2 py-0.5 bg-red-100 text-red-700 rounded">High</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border border-indigo-200 border-l-4 rounded-lg p-4 bg-indigo-50">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-indigo-600 mt-0.5" />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 mb-1">Design database schema</div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded">Database</span>
                            <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded">Medium</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4 opacity-60">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 mb-1 line-through">Setup React project</div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded">Frontend</span>
                            <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">Low</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-2 md:-right-4 bg-white rounded-xl shadow-lg border border-gray-200 p-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">85% Complete</div>
                    <div className="text-xs text-gray-500">This week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero