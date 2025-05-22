import React from "react";
import { motion } from "framer-motion";

interface Stat {
  value: string;
  label?: string;
}

interface StatsDisplayProps {
  stats: Stat[];
  className?: string;
}

const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  className = "",
}) => {
  return (
    <motion.div
      className={`flex flex-wrap gap-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <p className="text-3xl font-bold">{stat.value}</p>
          {stat.label && <p className="text-gray-600 text-sm">{stat.label}</p>}
        </div>
      ))}
    </motion.div>
  );
};

export default StatsDisplay;
