
import { motion } from "framer-motion";
import { Rocket, Target, Clock } from "lucide-react";

const Vision = () => {
  return (
    <div className="min-h-screen pt-16 bg-white">
      <section className="py-20 bg-gradient-to-b from-sundays-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Our Vision</h1>
            <p className="text-xl text-gray-600 mb-12">
              Revolutionizing the tech industry through innovation, efficiency, and the power 
              of the Sundays Method™.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Rocket className="w-12 h-12 text-sundays-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
                <p className="text-gray-600">
                  Pushing the boundaries of what's possible in tech consulting
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Target className="w-12 h-12 text-sundays-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Client Success</h3>
                <p className="text-gray-600">
                  Delivering exceptional results that exceed expectations
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Clock className="w-12 h-12 text-sundays-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Rapid Delivery</h3>
                <p className="text-gray-600">
                  Setting new standards for project completion times
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
