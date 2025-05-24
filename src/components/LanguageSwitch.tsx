import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
      className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium"
    >
      {language.toUpperCase()}
    </button>
  );
};

export default LanguageSwitch;