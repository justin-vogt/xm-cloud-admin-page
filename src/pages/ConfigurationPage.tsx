
import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import InfoCard from '@/components/ui/InfoCard';
import EditableField from '@/components/ui/EditableField';
import BooleanToggle from '@/components/ui/BooleanToggle';
import { toast } from '@/components/ui/use-toast';
import { Settings, Sliders, LayoutDashboard, Users } from 'lucide-react';
import { useVisibility } from '@/context/VisibilityContext';

const ConfigurationPage = () => {
  // Application settings
  const [appVersion] = useState('2023.10.1.234');
  
  // Access visibility context for controlling section visibility
  const {
    showConnectedEnvironment,
    showUserInformation,
    showSelectedPageInfo,
    showSelectedCanvasItem,
    setShowConnectedEnvironment,
    setShowUserInformation,
    setShowSelectedPageInfo,
    setShowSelectedCanvasItem
  } = useVisibility();

  // Handle toggle changes
  const handleToggleChange = (setter: (value: boolean) => void, newValue: boolean, settingName: string) => {
    setter(newValue);
    toast({
      title: 'Setting Updated',
      description: `${settingName} has been ${newValue ? 'enabled' : 'disabled'}.`,
      duration: 3000,
    });
  };

  return (
    <PageLayout
      title="Configuration"
      subtitle="Manage your Sitecore XM Cloud configuration settings"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <InfoCard title="Application Settings" className="col-span-1">
          <div className="flex items-center mb-4">
            <Sliders size={18} className="mr-2 text-sitecore-accent" />
            <span className="text-sm text-gray-600">General Settings</span>
          </div>
          
          <EditableField 
            label="Version" 
            value={appVersion} 
            isEditable={false}
          />
          
          <div className="mt-6 pt-4 border-t border-sitecore-midgray">
            <h3 className="text-md font-semibold mb-3 text-gray-800 flex items-center">
              <LayoutDashboard size={16} className="mr-2 text-sitecore-accent" />
              Environment Admin Settings
            </h3>
            
            <BooleanToggle
              label="Show Connected XM Cloud Environment"
              checked={showConnectedEnvironment}
              onCheckedChange={(checked) => handleToggleChange(
                setShowConnectedEnvironment, 
                checked, 
                "Connected XM Cloud Environment visibility"
              )}
            />
            
            <BooleanToggle
              label="Show User Information"
              checked={showUserInformation}
              onCheckedChange={(checked) => handleToggleChange(
                setShowUserInformation, 
                checked, 
                "User Information visibility"
              )}
            />
          </div>
          
          <div className="mt-6 pt-4 border-t border-sitecore-midgray">
            <h3 className="text-md font-semibold mb-3 text-gray-800 flex items-center">
              <Users size={16} className="mr-2 text-sitecore-accent" />
              Page Information Settings
            </h3>
            
            <BooleanToggle
              label="Show Selected Page Information"
              checked={showSelectedPageInfo}
              onCheckedChange={(checked) => handleToggleChange(
                setShowSelectedPageInfo, 
                checked, 
                "Selected Page Information visibility"
              )}
            />
            
            <BooleanToggle
              label="Show Selected Canvas Item"
              checked={showSelectedCanvasItem}
              onCheckedChange={(checked) => handleToggleChange(
                setShowSelectedCanvasItem, 
                checked, 
                "Selected Canvas Item visibility"
              )}
            />
          </div>
        </InfoCard>
        
        <InfoCard title="System Information" className="col-span-1">
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
      </div>
    </PageLayout>
  );
};

export default ConfigurationPage;
