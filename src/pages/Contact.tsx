
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900">Get in Touch</h1>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sundays-500 focus:border-sundays-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sundays-500 focus:border-sundays-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sundays-500 focus:border-sundays-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-sundays-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sundays-600 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Mail className="w-6 h-6 text-sundays-500 mb-2" />
                  <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-600">contact@paulsundays.com</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Phone className="w-6 h-6 text-sundays-500 mb-2" />
                  <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <MapPin className="w-6 h-6 text-sundays-500 mb-2" />
                  <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-600">123 Tech Street, Innovation City, TC 12345</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
