import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Pill, FlaskRound as Flask, Activity, Dna } from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const services = [
    {
      icon: <Pill className="h-12 w-12 text-primary-500" />,
      title: 'Medication Preparations Unit',
      description: 'Oncological preparation, parenteral nutrition, fractionation of antibiotics, master prescription',
    },
    {
      icon: <Flask className="h-12 w-12 text-primary-500" />,
      title: 'Research Unit',
      description: 'Research Units, Quality Control, Microbiology, Microchips, Cell Therapy, Stem Cells',
    },
    {
      icon: <Activity className="h-12 w-12 text-primary-500" />,
      title: 'Hospital Clinical Unit',
      description: 'Isolated Units, Pavilions, Outpatient Oncology Administration',
    },
    {
      icon: <Dna className="h-12 w-12 text-primary-500" />,
      title: 'DNA and Criminalistics Units',
      description: 'DNA Registry, Criminalistics, Molecular Biology, Microbiology',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100"
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;