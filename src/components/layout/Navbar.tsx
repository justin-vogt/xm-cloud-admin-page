
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-white border-b border-sitecore-midgray">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-sitecore" 
                alt="Sitecore Logo" 
                className="h-8 w-8" 
              />
              <span className="text-xl font-semibold text-gray-900">XM Cloud Admin</span>
            </Link>
          </div>
          
          <div className="flex space-x-4">
            <Link 
              to="/admin" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/admin' 
                  ? 'bg-sitecore-accent text-white' 
                  : 'text-gray-700 hover:bg-sitecore-midgray hover:text-gray-900'
              }`}
            >
              Environment Admin
            </Link>
            <Link 
              to="/page-info" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/page-info' 
                  ? 'bg-sitecore-accent text-white' 
                  : 'text-gray-700 hover:bg-sitecore-midgray hover:text-gray-900'
              }`}
            >
              Page Information
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
