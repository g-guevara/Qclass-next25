import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


const Team: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'Guillermo Guevara',
      title: 'Co-founder & Technical Director',
      profession: 'Architect',
      bio: 'I created the curved system in 2000 to help laboratories with problems with contamination. Since 2000 we have been helping with all the requirements and details that exist to meet cleanrooms highest standards',
      image: '/img/ggg.jpg'
    },
    {
      name: 'Pablo Jaramillo',
      title: 'Co-founder & CEO',
      profession: 'Civil Engineer',
      bio: 'I\'m the Production Director of the cleanroom laboratory units, working and focusing on the production stage of the cleanroom laboratory unit, and that cleanrooms meet the highest standards that your lab requires.',
      image: '/img/pjp.jpeg'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Awesome Team</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700">
            We have 20 years of experience with a dedicated team of +40 people. Our team is made up of civil and HVAC engineers, architects and construction technicians of cleanrooms, who work every day to provide better solutions to the cleanroom laboratory units that our clients require.
          </p>
          <p className="text-lg font-medium text-gray-900 mt-4">
            Our leadership team:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 flex justify-center items-center p-6 md:p-8">
                  <div className="relative">
                    <img
                      className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover border-4 shadow-lg"
                      style={{ borderColor: '#0384c6' }}
                      src={member.image}
                      alt={member.name}

                    />
                    {/* Efecto de brillo opcional */}
                    <div 
                      className="absolute inset-0 rounded-full border-4 opacity-30 animate-pulse"
                      style={{ borderColor: '#0384c6' }}
                    ></div>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-center">
                  <div className="tracking-wide text-primary-600 font-semibold text-lg">
                    {member.name}
                  </div>
                  <p className="text-gray-500 text-sm">{member.title}</p>
                  <p className="mt-2 text-gray-600 font-medium">{member.profession}</p>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;