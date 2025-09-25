import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine current language based on URL path
  const getCurrentLanguage = () => {
    return location.pathname.startsWith('/en') ? 'en' : 'ar';
  };

  const [language, setLanguage] = useState(getCurrentLanguage);

  // Update language when route changes
  useEffect(() => {
    setLanguage(getCurrentLanguage());
  }, [location.pathname]);

  const switchLanguage = (newLanguage) => {
    const currentPath = location.pathname;
    let newPath;

    if (newLanguage === 'en') {
      // Switch to English
      if (currentPath.startsWith('/en')) {
        return; // Already on English version
      }
      newPath = `/en${currentPath}`;
    } else {
      // Switch to Arabic
      if (!currentPath.startsWith('/en')) {
        return; // Already on Arabic version
      }
      newPath = currentPath.replace('/en', '');
      if (newPath === '') newPath = '/';
    }

    navigate(newPath);
    setLanguage(newLanguage);
  };

  const value = {
    language,
    switchLanguage,
    isArabic: language === 'ar',
    isEnglish: language === 'en'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
