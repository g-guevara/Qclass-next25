import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote: "We are currently working with the QCLASS team in the habilitation of a Mixing Center in the largest clinic in our network and Bupa in the world. The team has been very proactive during the project, in which they supported us from an early stage with the analyses and evaluations to obtain the approval of the investment, demonstrating high levels of management, flexibility, and planning. The quality of the equipment is remarkable, always available to the client, and has the highest technical knowledge, generating a high level of security and confidence in the work delivered and the Laboratory units offered.",
      name: "Joaquin",
      title: "PROJECT MANAGER",
      company: "BUPA CLINIC, CHILE",
      type: "PUBLIC HOSPITAL",
      date: "August, 2022"
    },
    {
      quote: "My experience with QCLASS was very close to us and knowledgeable, they took the time to understand and explain the scope of each requirement, and they were able to actively listen to various opinions, which they then reflected in an extraordinary way in the design of the requested project. Without a doubt, I highlight the commitment, responsibility, and passion with which they work.",
      name: "Victoria Hidalgo",
      title: "HEAD OF PHARMACY",
      company: "SOTERO DEL RIO HOSPITAL",
      type: "PUBLIC HOSPITAL",
      date: "September, 2022"
    },
    {
      quote: "My experience with QCLASS was very close to us and knowledgeable, they took the time to understand and explain the scope of each requirement, and they were able to actively listen to various opinions, which they then reflected in an extraordinary way in the design of the requested project. Without a doubt, I highlight the commitment, responsibility, and passion with which they work.",
      name: "Matias",
      title: "PRODUCT MANAGER",
      company: "REDFARMA, CHILE",
      type: "PRIVATE PRODUCTION LABORATORY",
      date: "JUNE, 2022"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700">
            Our clients are the heart of QCLASS and we put our effort into them day by day to build more and better cleanroom laboratory units
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-12 rounded-lg shadow-lg"
          >
            <div className="flex justify-center mb-6">
              <Quote className="h-12 w-12 text-primary-300" />
            </div>
            <blockquote className="text-lg md:text-xl text-gray-700 text-center mb-8">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="text-center">
              <p className="font-bold text-gray-900">{testimonials[currentIndex].name}</p>
              <p className="text-gray-600">{testimonials[currentIndex].title}</p>
              <p className="text-primary-600 font-medium">{testimonials[currentIndex].company}</p>
              <p className="text-sm text-gray-500 mt-1">{testimonials[currentIndex].type}</p>
              <p className="text-sm text-gray-500">{testimonials[currentIndex].date}</p>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-primary-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              Watch the video
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;