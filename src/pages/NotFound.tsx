
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="glass-card rounded-2xl p-10 text-center max-w-md mx-auto">
        <h1 className="text-8xl font-bold text-gray-900 mb-4">404</h1>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <a 
          href="/" 
          className="activity-btn bg-gradient-to-r from-blue-600 to-purple-600 text-white inline-block"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
