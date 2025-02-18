
import { motion } from "framer-motion";

const Team = () => {
  return (
    <div className="min-h-screen pt-16 bg-white">
      <section className="py-20 bg-gradient-to-b from-sundays-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900">Our Team</h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="/photo-1581092795360-fd1ca04f0952" 
                    alt="Paul Sundays" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Paul Sundays</h3>
                <p className="text-sundays-500 mb-4">Founder & CEO</p>
                <p className="text-gray-600">
                  Visionary leader and creator of the Sundays Method™
                </p>
              </div>
              {/* Add more team members as needed */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
