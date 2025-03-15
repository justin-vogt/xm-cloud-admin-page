
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sitecore-lightgray flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center mb-16 animate-slide-in">
        <img 
          src="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-sitecore" 
          alt="Sitecore Logo" 
          className="h-20 w-20 mx-auto mb-8"
        />
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Sitecore XM Cloud <span className="text-sitecore-accent">Admin</span>
        </h1>
        <p className="text-xl mb-8 text-gray-700 max-w-xl mx-auto">
          Manage your Sitecore XM Cloud environments and pages with this admin interface
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl animate-fade-in">
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:shadow-lg hover:-translate-y-1">
          <div className="p-6 border-b border-sitecore-midgray bg-gradient-to-r from-sitecore-accent/5 to-white">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">Environment Admin</h2>
            <p className="text-gray-600">
              View and manage your XM Cloud environment settings, projects, and user information
            </p>
          </div>
          <div className="p-6">
            <Link to="/admin">
              <Button className="w-full bg-sitecore-accent hover:bg-sitecore-accent/90">
                Go to Environment Admin
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:shadow-lg hover:-translate-y-1">
          <div className="p-6 border-b border-sitecore-midgray bg-gradient-to-r from-sitecore-accent/5 to-white">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">Page Information</h2>
            <p className="text-gray-600">
              View and edit page details, including metadata, content items, and canvas information
            </p>
          </div>
          <div className="p-6">
            <Link to="/page-info">
              <Button className="w-full bg-sitecore-accent hover:bg-sitecore-accent/90">
                Go to Page Information
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
