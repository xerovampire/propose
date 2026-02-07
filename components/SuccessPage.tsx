import React from 'react';
import { motion } from 'framer-motion';

interface SuccessPageProps {
  onReset: () => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ onReset }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-10">
      
      <div className="space-y-8 pt-12">
        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-700">
          Yayy! Thank you!
        </h1>
        <p className="text-3xl md:text-4xl text-gray-600 font-bold leading-relaxed px-4">
          I love you so much!<br/>
          You make me the <span className="text-valentine-darkPink">happiest!</span>
        </p>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReset}
        className="px-8 py-3 bg-blue-100 hover:bg-blue-200 text-valentine-text text-lg font-bold rounded-full shadow transition-colors duration-300 mt-8"
      >
        Go Back
      </motion.button>
    </div>
  );
};

export default SuccessPage;