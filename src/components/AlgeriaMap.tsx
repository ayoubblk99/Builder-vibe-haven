import { motion } from "framer-motion";

const AlgeriaMap = () => {
  const cities = [
    { name: "Alger", x: 48, y: 37 },
    { name: "Oran", x: 20, y: 35 },
    { name: "Constantine", x: 62, y: 31 },
    { name: "Annaba", x: 75, y: 32 },
    { name: "Sétif", x: 55, y: 37 },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-[1.5/1]">
      {/* Map SVG Container */}
      <div className="absolute inset-0 opacity-80">
        <svg
          viewBox="0 0 100 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          {/* Simplified Algeria Map Shape */}
          <path
            d="M10,20 L30,10 L60,5 L80,10 L90,20 L95,40 L85,60 L70,70 L30,75 L10,60 L5,40 Z"
            fill="#EBF5FF"
            stroke="#2563EB"
            strokeWidth="1"
          />

          {/* Mediterranean Sea */}
          <path
            d="M5,30 L95,30"
            stroke="#93C5FD"
            strokeWidth="2"
            strokeDasharray="1 1"
          />
          <text x="50" y="25" textAnchor="middle" fontSize="4" fill="#93C5FD">
            Mer Méditerranée
          </text>
        </svg>
      </div>

      {/* City Markers */}
      {cities.map((city, index) => (
        <motion.div
          key={city.name}
          className="absolute"
          style={{ left: `${city.x}%`, top: `${city.y}%` }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2 + 0.5,
            type: "spring",
            stiffness: 200,
          }}
        >
          {/* Pulsing Circle */}
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-blue-600 opacity-70">
              <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping"></div>
            </div>

            {/* City Label */}
            <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded shadow-md text-xs whitespace-nowrap">
              {city.name}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Connection Lines (to represent network) */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 100 80"
      >
        {cities.map((city, index) =>
          cities.slice(index + 1).map((otherCity, otherIndex) => (
            <motion.path
              key={`${city.name}-${otherCity.name}`}
              d={`M${city.x},${city.y} Q${(city.x + otherCity.x) / 2},${
                (city.y + otherCity.y) / 2 - 5
              } ${otherCity.x},${otherCity.y}`}
              stroke="#2563EB"
              strokeWidth="0.3"
              strokeDasharray="1 1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{
                duration: 1.5,
                delay: Math.max(index, otherIndex) * 0.2 + 1,
                ease: "easeInOut",
              }}
            />
          )),
        )}
      </svg>

      {/* Legend */}
      <div className="absolute bottom-0 right-0 bg-white/80 backdrop-blur-sm p-2 rounded-tl-lg text-xs">
        <div className="flex items-center mb-1">
          <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
          <span>Bureau SB-ILIVIK</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-0.5 bg-blue-600 mr-2 opacity-50 dashed-line"></div>
          <span>Zone de couverture</span>
        </div>
      </div>
    </div>
  );
};

export default AlgeriaMap;
