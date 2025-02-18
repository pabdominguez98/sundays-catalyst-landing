
import { motion } from "framer-motion";

const History = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Our History</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                From humble beginnings to industry innovation, the story of PaulSundays Consulting 
                is one of persistence, innovation, and unwavering commitment to excellence.
              </p>
              <div className="grid gap-8 md:grid-cols-2 my-12">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">The Beginning</h3>
                  <p className="text-gray-600">
                    Started with a vision to revolutionize tech consulting through automated workflows 
                    and innovative methodologies.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">The Innovation</h3>
                  <p className="text-gray-600">
                    Development of the Sundays Method™, our proprietary approach to project delivery 
                    that has transformed the industry.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default History;
