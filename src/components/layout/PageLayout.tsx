
import React from 'react';
import Navbar from './Navbar';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  showNavbar?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  title, 
  subtitle,
  showNavbar = true 
}) => {
  return (
    <div className="min-h-screen bg-sitecore-lightgray">
      {showNavbar && <Navbar />}
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">{title}</h1>
            {subtitle && (
              <p className="text-gray-500">{subtitle}</p>
            )}
          </header>
          {children}
        </div>
      </main>
    </div>
  );
};

export default PageLayout;
