import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <motion.div
      className="bg-gray-900 text-white p-6 h-full flex flex-col"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col h-full">
        {/* Contact Button */}
        <div className="mb-12 flex justify-end">
          <Link
            to="/contact"
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            Contactez-nous
          </Link>
        </div>

        {/* Logo */}
        <div className="mb-12">
          <h2 className="text-xl font-bold">SB -ILIVIK</h2>
        </div>

        {/* Navigation */}
        <div className="space-y-6 mb-12">
          <h3 className="text-xl font-bold mb-4">Navigation:</h3>
          <div className="space-y-2">
            <Link
              to="/"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Accueil
            </Link>
            <Link
              to="/services"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              À propos
            </Link>
            <Link
              to="/contact"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-6 mb-12">
          <h3 className="text-xl font-bold mb-4">Nos Services</h3>
          <div className="space-y-2">
            <Link
              to="/services/etudes"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Études de marché
            </Link>
            <Link
              to="/services/marketing"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Marketing digital
            </Link>
            <Link
              to="/services/conseil"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Conseil stratégique
            </Link>
          </div>
        </div>

        {/* Search */}
        <div className="space-y-2 mb-12">
          <h3 className="text-lg font-bold">Recherch</h3>
          <input
            type="text"
            className="w-full bg-gray-800 border-gray-700 rounded px-3 py-2 text-white"
            placeholder=""
          />
        </div>

        {/* Contact */}
        <div className="space-y-2 mb-8">
          <h3 className="text-xl font-bold">Contact</h3>
          <p className="text-gray-300">info@sb-ilivik.com</p>
          <p className="text-gray-300">+213 00 00 00 00</p>
        </div>

        {/* Footer */}
        <div className="mt-auto text-sm text-gray-400">
          <p>© 2025 allure-parapharmacie.com.</p>
          <p>Tous droits réservés.</p>
          <Link to="/privacy" className="text-blue-400 hover:text-blue-300">
            Politique confidentialité
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
