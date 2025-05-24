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
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Guillermo Guevara',
      title: 'Co-founder & Technical Director',
      profession: 'Architect',
      bio: 'I created the curved system in 2000 to help laboratories with problems with contamination. Since 2000 we have been helping with all the requirements and fetails that exist to meet cleanrooms highest standards',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Luis Zorrilla',
      title: 'VP of Business Development',
      profession: 'Biologist',
      bio: 'Over 25 years of experience in the review and evaluation of the design, operation, and management of AAALAC-accredited facilities.',
      image: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
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
      image: 'https://images.pexels.com/photos/8489918/pexels-photo-8489918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Design New Custom Facilities',
      points: [
        'We can customize and design research facilities utilizing the building\'s internal space.',
        'QVivarium can build self-contained research facilities capable of supporting any type of research activity.'
      ],
      image: 'https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Modular Construction',
      points: [
        'The most flexible and expandable option through new construction.',
        'Design with expansion in mind, while meeting immediate needs.',
        'Allow for future expansion opportunities as the research program grows.'
      ],
      image: 'https://images.pexels.com/photos/3735780/pexels-photo-3735780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/8489784/pexels-photo-8489784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/8489825/pexels-photo-8489825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/8489840/pexels-photo-8489840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/8489848/pexels-photo-8489848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/8489854/pexels-photo-8489854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/8489862/pexels-photo-8489862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];

  return (
    <>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                {t('qvivarium.title')}
              </h1>
              <p className="text-xl text-gray-600">{t('qvivarium.description')}</p>
            </motion.div>

            {/* Team Info */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{member.title}</p>
                  <p className="text-gray-600 mb-4">{member.profession}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </motion.div>
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
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-primary-500 transition-colors"
                >
                  <div className="mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Build Options */}
            <div className="space-y-8 mb-16">
              {buildOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <h3 className="text-2xl font-bold mb-6">{option.title}</h3>
                  <ul className="space-y-4">
                    {option.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Image Gallery */}
            <div className="space-y-12">
              {/* Team Images */}
              <div className="grid grid-cols-3 gap-4">
                {team.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative aspect-square overflow-hidden rounded-xl"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Build Options Images */}
              <div className="grid grid-cols-3 gap-4">
                {buildOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative aspect-square overflow-hidden rounded-xl"
                  >
                    <img
                      src={option.image}
                      alt={option.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Additional Gallery Images */}
              <div className="grid grid-cols-3 gap-4">
                {galleryImages.slice(0, 6).map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative aspect-square overflow-hidden rounded-xl"
                  >
                    <img
                      src={image}
                      alt="QVivarium facility"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
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