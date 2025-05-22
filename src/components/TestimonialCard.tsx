import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  index: number;
}

const TestimonialCard = ({
  quote,
  author,
  company,
  index,
}: TestimonialCardProps) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1 + 0.3,
        ease: "easeOut",
      }}
    >
      <div className="mb-4 text-blue-600">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h3v10h-9zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3v10h-9z" />
        </svg>
      </div>
      <p className="text-gray-600 italic mb-6">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-medium text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
