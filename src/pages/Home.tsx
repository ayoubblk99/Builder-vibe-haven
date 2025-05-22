import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Sidebar from "@/components/Sidebar";
import BlueArrow from "@/components/BlueArrow";
import StatsDisplay from "@/components/StatsDisplay";

const Home = () => {
  return (
    <Layout>
      {/* Main Section with Sidebar */}
      <section className="relative flex min-h-screen flex-col">
        <div className="flex-1 grid grid-cols-12 gap-4">
          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-9 px-4 lg:px-8">
            {/* Top Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium mb-12 pt-4">
              <div className="text-blue-600 font-bold text-xl">
                <span className="text-blue-600">SB</span>
                <span className="text-black">-ILIVIK</span>
              </div>
              <a href="/accueil" className="text-gray-800 hover:text-blue-600">
                Acceuil
              </a>
              <a href="/produits" className="text-gray-800 hover:text-blue-600">
                Produits
              </a>
              <a href="/about" className="text-gray-800 hover:text-blue-600">
                à propos de nous
              </a>
              <a href="/contact" className="text-gray-800 hover:text-blue-600">
                Contact
              </a>
            </div>

            {/* Hero Content */}
            <div className="pt-24 pb-12">
              <motion.div
                className="max-w-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-3">
                  <span className="inline-block text-sm">
                    The solution you need
                  </span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                  <span className="inline-block">
                    <span className="text-blue-600">SB-ILIVIK</span>
                  </span>
                  <br />
                  Transformons vos idées en
                  <br />
                  résultats mesurables
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl">
                  SB-ILIVIK n'est pas une simple agence marketing. C'est un
                  moteur d'impact, un accélérateur de croissance, un allié
                  stratégique.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="/services"
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Découvrir nos services
                  </a>
                  <a
                    href="/contact"
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors ml-6"
                  >
                    Contactez-nous
                  </a>
                </div>
              </motion.div>

              {/* Blue Arrow */}
              <BlueArrow className="mt-16" />

              {/* Company Facts */}
              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center">
                    <img
                      src="/images/digital-marketing-team.jpg"
                      alt="Digital Marketing Team"
                      className="w-full max-w-md rounded-md"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.currentTarget.src =
                          "https://via.placeholder.com/400x300?text=Digital+Marketing+Team";
                      }}
                    />
                  </div>
                  <p className="text-gray-800 font-medium">Depuis 2011</p>
                  <p className="text-gray-800 font-medium">
                    Leader du marketing digital en Algérie
                  </p>

                  <StatsDisplay
                    stats={[
                      { value: "58" },
                      { value: "200+" },
                      { value: "98%" },
                    ]}
                    className="mt-4"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Dark Sidebar */}
          <div className="hidden lg:block col-span-3 bg-gray-900 text-white">
            <Sidebar />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
