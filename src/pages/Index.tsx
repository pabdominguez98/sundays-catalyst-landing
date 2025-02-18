
import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Rocket, Award, Globe, ChevronRight, Code, Database, LineChart, Smartphone, Building } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("all");

  const industries = [
    { name: "Medical", icon: Building, description: "Healthcare solutions" },
    { name: "Education", icon: Building, description: "Learning platforms" },
    { name: "Software", icon: Code, description: "Custom development" },
    { name: "Financial", icon: Building, description: "Fintech solutions" },
    { name: "Government", icon: Building, description: "Public sector" },
  ];

  const technologies = [
    { name: "Web Apps", icon: Code, description: "Modern web applications" },
    { name: "Mobile Apps", icon: Smartphone, description: "iOS and Android" },
    { name: "Databases", icon: Database, description: "Data management" },
    { name: "Analytics", icon: LineChart, description: "Data insights" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sundays-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-3 py-1 mb-4 text-sundays-600 bg-sundays-100 rounded-full text-sm font-semibold animate-fade-up">
              Welcome to PaulSundays Consulting
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
              Better Tech,{" "}
              <span className="text-sundays-500">Better Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We turn complex technologies into successful projects in record time,
              powered by the Sundays Method™
            </p>
            <button className="bg-sundays-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-sundays-600 transition-colors duration-300">
              Let's Talk
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sundays-500 font-semibold">Our Expertise</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Technologies & Industries</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to deliver exceptional results
              across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Technologies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <tech.icon className="w-6 h-6 text-sundays-500 mr-3" />
                    <div>
                      <h4 className="font-semibold">{tech.name}</h4>
                      <p className="text-sm text-gray-600">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Industries</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.map((industry) => (
                  <div
                    key={industry.name}
                    className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <industry.icon className="w-6 h-6 text-sundays-500 mr-3" />
                    <div>
                      <h4 className="font-semibold">{industry.name}</h4>
                      <p className="text-sm text-gray-600">{industry.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sundays Method Section */}
      <section className="py-20 bg-gradient-to-b from-white to-sundays-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sundays-500 font-semibold">Our Secret Sauce</span>
            <h2 className="text-4xl font-bold mt-2 mb-8">The Sundays Method™</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Rocket className="w-12 h-12 text-sundays-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-gray-600">
                  Automated workflows and efficient processes for rapid delivery
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Award className="w-12 h-12 text-sundays-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600">
                  Rigorous standards and attention to detail in every project
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Globe className="w-12 h-12 text-sundays-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                <p className="text-gray-600">
                  Serving clients worldwide with localized expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sundays-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Transform Your Project?
          </h2>
          <button className="bg-white text-sundays-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center">
            Get Started
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
