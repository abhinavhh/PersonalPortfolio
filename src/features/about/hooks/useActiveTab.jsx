// src/features/about/hooks/useActiveTab.js
import { useState } from 'react';

export const useActiveTab = (initialTab = 0) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return {
    activeTab,
    setActiveTab: handleTabChange
  };
};