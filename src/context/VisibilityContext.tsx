
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface VisibilityContextType {
  showConnectedEnvironment: boolean;
  showUserInformation: boolean;
  showSelectedPageInfo: boolean;
  showSelectedCanvasItem: boolean;
  setShowConnectedEnvironment: (value: boolean) => void;
  setShowUserInformation: (value: boolean) => void;
  setShowSelectedPageInfo: (value: boolean) => void;
  setShowSelectedCanvasItem: (value: boolean) => void;
}

const VisibilityContext = createContext<VisibilityContextType | undefined>(undefined);

export const VisibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showConnectedEnvironment, setShowConnectedEnvironment] = useState(true);
  const [showUserInformation, setShowUserInformation] = useState(true);
  const [showSelectedPageInfo, setShowSelectedPageInfo] = useState(true);
  const [showSelectedCanvasItem, setShowSelectedCanvasItem] = useState(true);

  return (
    <VisibilityContext.Provider
      value={{
        showConnectedEnvironment,
        showUserInformation,
        showSelectedPageInfo,
        showSelectedCanvasItem,
        setShowConnectedEnvironment,
        setShowUserInformation,
        setShowSelectedPageInfo,
        setShowSelectedCanvasItem
      }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibility = (): VisibilityContextType => {
  const context = useContext(VisibilityContext);
  if (context === undefined) {
    throw new Error('useVisibility must be used within a VisibilityProvider');
  }
  return context;
};
