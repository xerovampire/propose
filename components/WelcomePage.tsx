import React from 'react';
import { motion } from 'framer-motion';

interface WelcomePageProps {
  onNext: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-64 h-64"
      >
         <img 
            src="https://media.tenor.com/oDXHIoN9fAEAAAAj/bubududu-panda.gif" 
            alt="bubududu panda" 
            className="w-full h-full object-contain drop-shadow-xl"
         />
      </motion.div>

      <div className="space-y-4">
        <h1 className="text-3xl font-extrabold text-valentine-darkPink drop-shadow-sm px-2">
          Happy Propose Day Bubu 🎀🎀
        </h1>
        <p className="text-lg text-gray-600 font-semibold px-4 leading-relaxed">
          There's something I have been waiting to ask you 👉🏽👈🏽
        </p>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="px-10 py-3 bg-valentine-pink hover:bg-valentine-darkPink text-white text-xl font-bold rounded-full shadow-lg transition-colors duration-300"
      >
        Next
      </motion.button>
    </div>
  );
};

export default WelcomePage;
