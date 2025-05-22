import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  index: number;
}

const ServiceCard = ({
  title,
  description,
  icon,
  link,
  index,
}: ServiceCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 overflow-hidden relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 },
      }}
    >
      <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />

      <div className="flex flex-col h-full relative z-10 group-hover:text-white transition-colors duration-300">
        <div className="mb-4 text-blue-600 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 mb-4 flex-grow group-hover:text-blue-100 transition-colors duration-300">
          {description}
        </p>

        <Link
          to={link}
          className="inline-flex items-center text-blue-600 font-medium group-hover:text-white mt-2 transition-colors duration-300"
        >
          En savoir plus
          <svg
            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
