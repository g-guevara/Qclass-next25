import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Advantages: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="advantages" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The advantages of our system</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700">
              We are focused on minimizing the possible points of contamination (dust and microbiology) with our built-in curved panel system.
            </p>
            <p className="text-lg text-gray-700">
              Cleanroom sanitary panels unit system with built-in curves.
            </p>
            <p className="font-semibold text-primary-700">
              US Patent: US 11085185B2  08/10/2021
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors shadow-md"
              >
                Request your built-in curved cleanroom laboratory unit
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <img
              src="/img/qp-syst.png"
              alt="QCLASS Cleanroom with built-in curves"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-600 rounded-lg -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-500 rounded-lg -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;