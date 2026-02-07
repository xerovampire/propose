import React from 'react';
import { motion } from 'framer-motion';

interface SuccessPageProps {
  onReset: () => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ onReset }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-10">
      
      <div className="space-y-8 pt-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-700">
          AWWWWWWWWW 🥳🥳🥳
        </h1>
        <p className="text-1xl md:text-2xl text-gray-600 font-bold leading-relaxed px-4">
          THANKS FOR ACCEPTING DUDU, I LOVE YOU SO MUCH ♥️♥️ AND I ALWAYS WILL. YOU MAKE ME SO HAPPY😍😍.<br/>
          PLEASE ALWAYS BE <span className="text-valentine-darkPink"> MINE🎀 </span>
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
