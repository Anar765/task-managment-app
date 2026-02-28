import { useState } from "react";
import { CheckCircle2, Menu, X } from "lucide-react"; // Added Menu and X
import { Link } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container-base">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">DevTasks</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#benefits" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Benefits</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Docs</a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Sign in</Link>
            <Link to="/signup" className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-all shadow-sm">
              Get Started
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-72 border-b border-gray-200' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white">
          <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">Features</a>
          <a href="#benefits" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">Benefits</a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">Docs</a>
          <div className="pt-4 flex flex-col gap-2">
            <Link to="/login" className="w-full text-center py-2 text-gray-700 font-medium">Sign in</Link>
            <Link to="/signup" className="w-full text-center py-2 bg-indigo-600 text-white rounded-lg font-medium">Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;