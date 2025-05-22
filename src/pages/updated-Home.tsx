import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";

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

            {/* Hero Section */}
            <Hero
              title="Transformons vos idées en résultats mesurables"
              subtitle="SB-ILIVIK n'est pas une simple agence marketing. C'est un moteur d'impact, un accélérateur de croissance, un allié stratégique."
              buttons={[
                { text: "Découvrir nos services", href: "/services" },
                { text: "Contactez-nous", href: "/contact" },
              ]}
            />
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
