import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.advantages': 'Advantages',
    'nav.team': 'Team',
    'nav.services': 'Services',
    'nav.testimonials': 'Testimonials',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact Us',
    'nav.qvivarium': 'QVivarium',
    
    // Hero
    'hero.system': 'QCLASS construction system',
    'hero.curves': 'with built-in curves',
    'hero.check': 'Check the best cleanroom laboratory unit with unlimited possibilities to customize your cleanroom.',
    'hero.request': 'Request your cleanroom laboratory unit (like the design on the photo or other configuration) for medicines, research, production or for your specific requirement and obtain the highest standards of quality and asepsis.',
    'hero.cta': 'Request your built-in curved cleanroom laboratory unit',
    
    // QVivarium
    'qvivarium.title': 'Our Awesome Team',
    'qvivarium.description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    'qvivarium.vision.title': 'Our Vision',
    'qvivarium.solution.title': 'The QVivarium Solution',
    'qvivarium.solution.description': 'QVivarium is a system based on the highest standards of cleanroom technology with the flexibility to adapt to the size and scale of the project. The infrastructure, engineering, and systems are proportional to the needs and meet the high standards of research.',
    'qvivarium.solution.flexibility': 'This flexibility puts investment control in the client\'s hands, while we ensure an ideal environment for developing and achieving their scientific and biomedical research goals.',
    'qvivarium.solution.transform': 'Thanks to the QCLASS design, construction, and installation system, we can transform any space into high-quality research areas.',
    
    // Rest of translations...
  },
  es: {
    // Header
    'nav.advantages': 'Ventajas',
    'nav.team': 'Equipo',
    'nav.services': 'Servicios',
    'nav.testimonials': 'Testimonios',
    'nav.gallery': 'Galería',
    'nav.contact': 'Contáctanos',
    'nav.qvivarium': 'QVivarium',
    
    // Hero
    'hero.system': 'Sistema de construcción QCLASS',
    'hero.curves': 'con curvas incorporadas',
    'hero.check': 'Descubre la mejor unidad de laboratorio con sala limpia con posibilidades ilimitadas para personalizar tu sala limpia.',
    'hero.request': 'Solicita tu unidad de laboratorio con sala limpia (como el diseño en la foto u otra configuración) para medicamentos, investigación, producción o para tu requerimiento específico y obtén los más altos estándares de calidad y asepsia.',
    'hero.cta': 'Solicita tu unidad de laboratorio con curvas incorporadas',
    
    // QVivarium
    'qvivarium.title': 'Nuestro Increíble Equipo',
    'qvivarium.description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    'qvivarium.vision.title': 'Nuestra Visión',
    'qvivarium.solution.title': 'La Solución QVivarium',
    'qvivarium.solution.description': 'QVivarium es un sistema basado en los más altos estándares de tecnología de salas limpias con la flexibilidad de adaptarse al tamaño y escala del proyecto. La infraestructura, ingeniería y sistemas son proporcionales a las necesidades y cumplen con los altos estándares de investigación.',
    'qvivarium.solution.flexibility': 'Esta flexibilidad pone el control de la inversión en manos del cliente, mientras nosotros aseguramos un entorno ideal para desarrollar y alcanzar sus objetivos de investigación científica y biomédica.',
    'qvivarium.solution.transform': 'Gracias al sistema de diseño, construcción e instalación de QCLASS, podemos transformar cualquier espacio en áreas de investigación de alta calidad.',
    
    // Rest of translations...
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};