
import { useState } from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import InfoCard from '@/components/ui/InfoCard';
import EditableField from '@/components/ui/EditableField';
import JsonViewer from '@/components/ui/JsonViewer';
import { toast } from '@/components/ui/use-toast';
import { Clock, Edit, Layout } from 'lucide-react';

const PageInfoPage = () => {
  // Mock data for selected page
  const [pageData, setPageData] = useState({
    displayName: 'Home Page',
    itemName: 'home-page',
    itemPath: '/sitecore/content/home',
    editInfo: {
      createdBy: 'admin',
      modifiedBy: 'content-editor',
      dateCreated: '2023-10-15T14:30:00Z',
      dateModified: '2023-11-20T09:15:00Z'
    }
  });

  // Mock data for canvas item
  const [canvasItemData, setCanvasItemData] = useState({
    path: '/sitecore/content/home/main-content',
    data: {
      id: 'content-123456',
      type: 'hero-section',
      properties: {
        heading: 'Welcome to Sitecore',
        subheading: 'The Ultimate Content Management System',
        backgroundImage: '/images/hero-background.jpg'
      },
      components: [
        {
          id: 'button-123',
          type: 'button',
          properties: {
            label: 'Learn More',
            url: '/about',
            style: 'primary'
          }
        },
        {
          id: 'image-456',
          type: 'image',
          properties: {
            src: '/images/feature.jpg',
            alt: 'Sitecore Features',
            caption: 'Powerful features for content editors'
          }
        }
      ]
    }
  });

  // Handle display name change
  const handleDisplayNameChange = (newName: string) => {
    setPageData({
      ...pageData,
      displayName: newName
    });
    toast({
      title: 'Page Updated',
      description: 'Page display name has been updated successfully.',
      duration: 3000,
    });
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-sitecore-lightgray">
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-6 mb-6">
            <InfoCard title="Selected Page Information">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <EditableField 
                    label="Display Name" 
                    value={pageData.displayName} 
                    isEditable={true}
                    onChange={handleDisplayNameChange}
                  />
                  <EditableField 
                    label="Item Name" 
                    value={pageData.itemName} 
                    isEditable={false}
                  />
                  <EditableField 
                    label="Item Path" 
                    value={pageData.itemPath} 
                    isEditable={false}
                  />
                </div>
                
                <div>
                  <Accordion type="single" collapsible defaultValue="edit-info" className="border rounded-md">
                    <AccordionItem value="edit-info" className="border-none">
                      <AccordionTrigger className="px-4 py-3 hover:bg-sitecore-lightgray">
                        <div className="flex items-center">
                          <Edit size={18} className="mr-2 text-sitecore-accent" />
                          <span>Edit Information</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 pt-1">
                        <div className="grid grid-cols-1 gap-4">
                          <EditableField 
                            label="Created by" 
                            value={pageData.editInfo.createdBy} 
                            isEditable={false}
                          />
                          <EditableField 
                            label="Last modified by" 
                            value={pageData.editInfo.modifiedBy} 
                            isEditable={false}
                          />
                          <EditableField 
                            label="Date created" 
                            value={formatDate(pageData.editInfo.dateCreated)} 
                            isEditable={false}
                          />
                          <EditableField 
                            label="Date last modified" 
                            value={formatDate(pageData.editInfo.dateModified)} 
                            isEditable={false}
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </InfoCard>
            
            <Accordion type="single" collapsible defaultValue="canvas-item" className="border rounded-md card-shadow bg-white overflow-hidden">
              <AccordionItem value="canvas-item" className="border-none">
                <AccordionTrigger className="px-6 py-4 hover:bg-sitecore-lightgray bg-gradient-to-r from-sitecore-accent/10 to-white border-b border-sitecore-midgray">
                  <div className="flex items-center">
                    <Layout size={18} className="mr-2 text-sitecore-accent" />
                    <span className="text-lg font-semibold text-gray-900">Selected Canvas Item</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4">
                  <div className="mb-4">
                    <EditableField 
                      label="Path" 
                      value={canvasItemData.path} 
                      isEditable={false}
                    />
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-sitecore-midgray">
                    <h3 className="text-md font-semibold mb-3 text-gray-800 flex items-center">
                      <Clock size={16} className="mr-2 text-sitecore-accent" />
                      JSON Data
                    </h3>
                    <div className="bg-sitecore-lightgray p-4 rounded-md">
                      <JsonViewer 
                        data={canvasItemData.data} 
                        title="Content Item Data" 
                        initialExpanded={true}
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PageInfoPage;
