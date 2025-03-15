
import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import InfoCard from '@/components/ui/InfoCard';
import EditableField from '@/components/ui/EditableField';
import { toast } from '@/components/ui/use-toast';
import { useVisibility } from '@/context/VisibilityContext';

const AdminPage = () => {
  const { showConnectedEnvironment, showUserInformation } = useVisibility();
  
  // Mock data for XM Cloud environment
  const [environmentData, setEnvironmentData] = useState({
    id: 'env-12345-67890-abcde',
    name: 'Production Environment',
    project: {
      id: 'proj-67890-abcde-12345',
      name: 'Corporate Website',
      organization: {
        id: 'org-abcde-12345-67890',
        name: 'Sitecore Demo Organization'
      }
    }
  });

  // Mock data for user
  const [userData, setUserData] = useState({
    id: 'user-54321-edcba-09876',
    name: 'John Doe'
  });

  // Handle environment name change
  const handleEnvironmentNameChange = (newName: string) => {
    setEnvironmentData({
      ...environmentData,
      name: newName
    });
    toast({
      title: 'Environment Updated',
      description: 'Environment name has been updated successfully.',
      duration: 3000,
    });
  };

  // Handle project name change
  const handleProjectNameChange = (newName: string) => {
    setEnvironmentData({
      ...environmentData,
      project: {
        ...environmentData.project,
        name: newName
      }
    });
    toast({
      title: 'Project Updated',
      description: 'Project name has been updated successfully.',
      duration: 3000,
    });
  };

  // Handle user name change
  const handleUserNameChange = (newName: string) => {
    setUserData({
      ...userData,
      name: newName
    });
    toast({
      title: 'User Updated',
      description: 'User name has been updated successfully.',
      duration: 3000,
    });
  };

  return (
    <PageLayout
      title="Environment Admin"
      subtitle="Manage your Sitecore XM Cloud environment settings"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {showConnectedEnvironment && (
          <InfoCard title="Connected XM Cloud Environment" className="col-span-1 lg:col-span-2">
            <EditableField 
              label="Environment ID" 
              value={environmentData.id} 
              isEditable={false}
            />
            <EditableField 
              label="Environment Name" 
              value={environmentData.name} 
              isEditable={true}
              onChange={handleEnvironmentNameChange}
            />
            
            <div className="mt-6 pt-4 border-t border-sitecore-midgray">
              <h3 className="text-md font-semibold mb-3 text-gray-800">Parent XM Cloud Project</h3>
              <EditableField 
                label="Project ID" 
                value={environmentData.project.id} 
                isEditable={false}
              />
              <EditableField 
                label="Project Name" 
                value={environmentData.project.name} 
                isEditable={true}
                onChange={handleProjectNameChange}
              />
              
              <div className="mt-6 pt-4 border-t border-sitecore-midgray">
                <h3 className="text-md font-semibold mb-3 text-gray-800">Parent Sitecore Organization</h3>
                <EditableField 
                  label="Organization ID" 
                  value={environmentData.project.organization.id} 
                  isEditable={false}
                />
                <EditableField 
                  label="Organization Name" 
                  value={environmentData.project.organization.name} 
                  isEditable={false}
                />
              </div>
            </div>
          </InfoCard>
        )}
        
        {showUserInformation && (
          <InfoCard title="User Information" className={!showConnectedEnvironment ? "col-span-1 lg:col-span-3" : ""}>
            <EditableField 
              label="User ID" 
              value={userData.id} 
              isEditable={false}
            />
            <EditableField 
              label="User Name" 
              value={userData.name} 
              isEditable={true}
              onChange={handleUserNameChange}
            />
          </InfoCard>
        )}
      </div>
    </PageLayout>
  );
};

export default AdminPage;
