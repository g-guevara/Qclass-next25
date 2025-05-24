import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle2, Building2, Microscope, FlaskRound as Flask, Brain } from 'lucide-react';

const QVivarium: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const team = [
    {
      name: 'Pablo Jaramillo',
      title: 'Co-founder & CEO',
      profession: 'Civil Engineer',
      bio: 'I\'m the Production Director of the cleanroom laboratory units, working and focusing on the production stage of the cleanroom laboratory unit, and that cleanrooms meet the highest standards that your lab requires.',
      image: '/img/pjp.jpeg'
    },
    {
      name: 'Guillermo Guevara',
      title: 'Co-founder & Technical Director',
      profession: 'Architect',
      bio: 'I created the curved system in 2000 to help laboratories with problems with contamination. Since 2000 we have been helping with all the requirements and fetails that exist to meet cleanrooms highest standards',
      image: '/img/ggg.jpg'    },
    {
      name: 'Luis Zorrilla',
      title: 'VP of Business Development',
      profession: 'Biologist',
      bio: 'Over 25 years of experience in the review and evaluation of the design, operation, and management of AAALAC-accredited facilities.',
      image: '/img/luisZ.png'    }
  ];

  const benefits = [
    {
      icon: <Building2 className="h-8 w-8 text-primary-500" />,
      title: 'Cleanroom technology',
      description: 'Robust, scalable ventilation and cooling systems to meet diverse environmental requirements.'
    },
    {
      icon: <Microscope className="h-8 w-8 text-primary-500" />,
      title: 'Any size, any type',
      description: 'Small projects, complete research facilities including cleanroom, procedures/laboratories, and administration.'
    },
    {
      icon: <Flask className="h-8 w-8 text-primary-500" />,
      title: 'Scalable',
      description: 'Expandable, add rooms as needed, invest only in what you need, when you need it.'
    },
    {
      icon: <Brain className="h-8 w-8 text-primary-500" />,
      title: '10-year Warranty',
      description: 'FAST installation, 10-year panel infrastructure warranty.'
    }
  ];

  const buildOptions = [
    {
      title: 'Reuse Current Building',
      points: [
        'We can build within the available space and create a "room within a room."',
        'We clad surfaces while following the original floor plan of your research facility and adding independent, dedicated HVAC systems.',
        'We can scale projects based on client needs and complete the project in sections.'
      ],
      image: '/img/spc.png'    },
    {
      title: 'Design New Custom Facilities',
      points: [
        'We can customize and design research facilities utilizing the building\'s internal space.',
        'QVivarium can build self-contained research facilities capable of supporting any type of research activity.'
      ],
      image: '/img/air.png'    },
    {
      title: 'Modular Construction',
      points: [
        'The most flexible and expandable option through new construction.',
        'Design with expansion in mind, while meeting immediate needs.',
        'Allow for future expansion opportunities as the research program grows.'
      ],
      image: '/img/wrkrs.png'    }
  ];

  const galleryImages = [
'/img/1.png' ,
'/img/2.png' ,
'/img/3.png' ,
'/img/pp2.png' ,
'/img/pp3.png' ,
'/img/pp6.png' ,
]

  return (
    <>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 bg-gray-50 overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
            style={{ 
              backgroundImage: 'url(/img/our.png)'
            }}
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                {t('qvivarium.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-12">{t('qvivarium.description')}</p>
            </motion.div>

            {/* Team Grid - Animation Removed */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-2">{member.title}</p>
                    <p className="text-gray-600 mb-4">{member.profession}</p>
                    <p className="text-gray-700">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 bg-white" ref={ref}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">{t('qvivarium.solution.title')}</h2>
              <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
              <p className="text-lg text-gray-700 mb-8">{t('qvivarium.solution.description')}</p>
              <p className="text-lg text-gray-700 mb-8">{t('qvivarium.solution.flexibility')}</p>
              <p className="text-lg text-gray-700">{t('qvivarium.solution.transform')}</p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:border-primary-500 transition-colors"
                >
                  <div className="mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Gallery Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16"
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-xl"
                >
                  <img
                    src={image}
                    alt="QVivarium facility"
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>

            {/* Build Options */}
            <div className="space-y-12">
              {buildOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-xl overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={option.image}
                        alt={option.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <h3 className="text-2xl font-bold mb-6">{option.title}</h3>
                      <ul className="space-y-4">
                        {option.points.map((point, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle2 className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-center mt-16"
            >
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors text-lg group"
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default QVivarium;