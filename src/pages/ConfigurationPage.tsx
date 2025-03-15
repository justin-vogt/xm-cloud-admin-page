
import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import InfoCard from '@/components/ui/InfoCard';
import EditableField from '@/components/ui/EditableField';
import { toast } from '@/components/ui/use-toast';
import { Settings, Database, Cloud } from 'lucide-react';

const ConfigurationPage = () => {
  // Mock data for configuration
  const [connectionData, setConnectionData] = useState({
    databaseServer: 'xmc-sqlserver-prod-01.database.windows.net',
    databaseName: 'xmcloud_content_prod_01',
    connectionTimeout: '30',
    maxConnections: '100'
  });

  const [deploymentData, setDeploymentData] = useState({
    cdnEndpoint: 'https://cdn.xmcloud-example.com',
    deploymentRegion: 'West US',
    cacheTimeout: '3600',
    sslCertificateExpiry: '2024-12-31'
  });

  // Handle database connection change
  const handleDatabaseServerChange = (newValue: string) => {
    setConnectionData({
      ...connectionData,
      databaseServer: newValue
    });
    toast({
      title: 'Configuration Updated',
      description: 'Database server has been updated successfully.',
      duration: 3000,
    });
  };

  const handleDatabaseNameChange = (newValue: string) => {
    setConnectionData({
      ...connectionData,
      databaseName: newValue
    });
    toast({
      title: 'Configuration Updated',
      description: 'Database name has been updated successfully.',
      duration: 3000,
    });
  };

  const handleConnectionTimeoutChange = (newValue: string) => {
    setConnectionData({
      ...connectionData,
      connectionTimeout: newValue
    });
    toast({
      title: 'Configuration Updated',
      description: 'Connection timeout has been updated successfully.',
      duration: 3000,
    });
  };

  // Handle deployment change
  const handleCdnEndpointChange = (newValue: string) => {
    setDeploymentData({
      ...deploymentData,
      cdnEndpoint: newValue
    });
    toast({
      title: 'Configuration Updated',
      description: 'CDN endpoint has been updated successfully.',
      duration: 3000,
    });
  };

  const handleCacheTimeoutChange = (newValue: string) => {
    setDeploymentData({
      ...deploymentData,
      cacheTimeout: newValue
    });
    toast({
      title: 'Configuration Updated',
      description: 'Cache timeout has been updated successfully.',
      duration: 3000,
    });
  };

  return (
    <PageLayout
      title="Configuration"
      subtitle="Manage your Sitecore XM Cloud configuration settings"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <InfoCard title="Database Connection" className="col-span-1">
          <div className="flex items-center mb-4">
            <Database size={18} className="mr-2 text-sitecore-accent" />
            <span className="text-sm text-gray-600">SQL Server Configuration</span>
          </div>
          
          <EditableField 
            label="Database Server" 
            value={connectionData.databaseServer} 
            isEditable={true}
            onChange={handleDatabaseServerChange}
          />
          <EditableField 
            label="Database Name" 
            value={connectionData.databaseName} 
            isEditable={true}
            onChange={handleDatabaseNameChange}
          />
          <EditableField 
            label="Connection Timeout (seconds)" 
            value={connectionData.connectionTimeout} 
            isEditable={true}
            onChange={handleConnectionTimeoutChange}
          />
          <EditableField 
            label="Max Connections" 
            value={connectionData.maxConnections} 
            isEditable={false}
          />
        </InfoCard>
        
        <InfoCard title="Deployment Settings">
          <div className="flex items-center mb-4">
            <Cloud size={18} className="mr-2 text-sitecore-accent" />
            <span className="text-sm text-gray-600">Cloud Deployment Settings</span>
          </div>
          
          <EditableField 
            label="CDN Endpoint" 
            value={deploymentData.cdnEndpoint} 
            isEditable={true}
            onChange={handleCdnEndpointChange}
          />
          <EditableField 
            label="Deployment Region" 
            value={deploymentData.deploymentRegion} 
            isEditable={false}
          />
          <EditableField 
            label="Cache Timeout (seconds)" 
            value={deploymentData.cacheTimeout} 
            isEditable={true}
            onChange={handleCacheTimeoutChange}
          />
          <EditableField 
            label="SSL Certificate Expiry" 
            value={deploymentData.sslCertificateExpiry} 
            isEditable={false}
          />
        </InfoCard>
      </div>
      
      <InfoCard title="System Information" className="col-span-1 lg:col-span-2">
        <div className="flex items-center mb-4">
          <Settings size={18} className="mr-2 text-sitecore-accent" />
          <span className="text-sm text-gray-600">System Status and Information</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-sitecore-lightgray p-4 rounded-md">
            <p className="text-sm font-medium text-gray-600">System Status</p>
            <p className="text-lg font-semibold text-green-600">Online</p>
          </div>
          <div className="bg-sitecore-lightgray p-4 rounded-md">
            <p className="text-sm font-medium text-gray-600">Last Deployment</p>
            <p className="text-lg font-semibold text-gray-900">2023-11-25 14:30:22</p>
          </div>
          <div className="bg-sitecore-lightgray p-4 rounded-md">
            <p className="text-sm font-medium text-gray-600">XM Cloud Version</p>
            <p className="text-lg font-semibold text-gray-900">2023.10.1.234</p>
          </div>
        </div>
      </InfoCard>
    </PageLayout>
  );
};

export default ConfigurationPage;
