import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Customers: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR CUSTOMERS ARE OUR BEST SECRET</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700">
            We use the panel with built-in curves for the most critical processes of a cleanroom laboratory unit with the highest standards
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="space-y-6 text-gray-700">
            <p className="font-medium">
              <span className="font-bold">Laboratories:</span> Abbott, FAV, Baxter, B Braun, Virbac Centrovet, Veterquimica, Rider Synthon, Positron Pharma, Mintlab, Merck, Salcobrand, Grifols, Dragpharma, Andromaco, Grunenthal, Biosano, Alphalab, Chile Laboratory, Therapia, Rider, CGM Nuclear, General Electric, Silesia, Kepler, Adilfa, Toro glassware, Fresenius, Condecal, Insival, Beta, Davis.
            </p>
            <p className="font-medium">
              <span className="font-bold">Research:</span> Fraunhofer, University of Chile, Bradford Hill, Cell for Cells. Catholic University, Adolfo Ibañez University, SG Feertility, University of Andes, Catholic University of Maule, Andres Bello University, Concepción University, Innbio.
            </p>
            <p className="font-medium">
              <span className="font-bold">Hospitals and Clinics:</span> Falp, Alemana Clinic, Davila Clinic, Sotero del Rio Hospital, Arica Hospital, La Serena Hospital, Naval Hospital, Gustavo Fricke Hospital, Salvador Hospital, Andes University Clinic, Catholic University Hospital, San Borja Hospital, Rancaua hospital, Talca Hospital, Temuco Hospital, Angol Hospital, Osorno Hospital, Valdivia Hospital, Alemana of Valdivia Clinic, Punta Arenas Hospital, Puerto Mntt Hospital, Dipreca Hospital, Calvo Mackenna Hospital, Las Condes Clinic, Santa maria Clinic, Exequiel Gonzale Cortes Clinic, Calama Hospital, Cobre Hospital.
            </p>
            <p className="font-medium">
              <span className="font-bold">Public Institutions:</span> Legal Medical Service of Chile, Investigations Police of Chile, Agricultural and livestock service of Chile, Chilean Nuclear Energy Commission, Chilean Public Health Institute.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Customers;