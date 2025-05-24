import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Calendar, Building, Users, Award } from 'lucide-react';

const Stats: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: <Calendar className="h-8 w-8 text-primary-500" />,
      title: 'Since 2000',
      description: 'designing cleanrooms',
    },
    {
      icon: <Building className="h-8 w-8 text-primary-500" />,
      title: '+200',
      description: 'projects done since 2000',
    },
    {
      icon: <Building className="h-8 w-8 text-primary-500" />,
      title: '+20',
      description: 'cleanroom laboratory unit types',
    },
    {
      icon: <Users className="h-8 w-8 text-primary-500" />,
      title: '+40',
      description: 'professionals working in projects',
    },
    {
      icon: <Award className="h-8 w-8 text-primary-500" />,
      title: 'UNIQUE PATENT',
      description: 'IN THE WORLD',
    },
    {
      icon: <Building className="h-8 w-8 text-primary-500" />,
      title: 'BUILT-IN CURVES',
      description: 'CLEANROOM LABORATORY UNITS',
    },
  ];

  return (
    <section className="py-16 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Stats</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700">
            We have built more than 200 projects in the last 20 years for different requirements of public and private companies, include fast certifications and durable quality and asepsis.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;