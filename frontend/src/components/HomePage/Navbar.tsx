import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                            <CheckCircle2 className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-xl font-bold text-gray-900">DevTasks</h1>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors">Features</a>
                        <a href="#benefits" className="text-gray-700 hover:text-gray-900 transition-colors">Benefits</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Docs</a>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link to='/'></Link>
                        <Link to="/login" className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors">
                            Sign in
                        </Link>
                        <Link to="/signup" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar