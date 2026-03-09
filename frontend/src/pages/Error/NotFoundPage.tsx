import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 dark:text-gray-700">404</h1>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium text-lg shadow-md shadow-blue-200 dark:shadow-none"
        >
          <Home className="w-5 h-5" />
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;