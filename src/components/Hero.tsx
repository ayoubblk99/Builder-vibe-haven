import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BlueArrow from "./BlueArrow";
import StatsDisplay from "./StatsDisplay";

interface HeroProps {
  title: string;
  subtitle: string;
  buttons: Array<{
    text: string;
    href: string;
  }>;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, buttons }) => {
  return (
    <div className="pt-24 pb-12">
      {/* Hero Content */}
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-3">
          <span className="inline-block text-sm">The solution you need</span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
          <span className="inline-block">
            <span className="text-blue-600">SB-ILIVIK</span>
          </span>
          <br />
          {title}
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl">{subtitle}</p>

        <div className="flex flex-wrap gap-4">
          {buttons.map((button, index) => (
            <Link
              key={index}
              to={button.href}
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors ml-6 first:ml-0"
            >
              {button.text}
            </Link>
          ))}
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
            stats={[{ value: "58" }, { value: "200+" }, { value: "98%" }]}
            className="mt-4"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
