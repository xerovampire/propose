import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProposalPageProps {
  onYes: () => void;
}

const phrases = [
  "No",
  "Naa kese bola tunne",
  "Naa bola ab dekh tu moti hojayega",
  "Firse na bola abhi teri mummy ko btati hu",
  "chal bhot huwa yes kr",
];

const ProposalPage: React.FC<ProposalPageProps> = ({ onYes }) => {
  const [noCount, setNoCount] = useState(0);

  const getNoButtonText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  return (
    <div className="flex flex-col items-center text-center space-y-12 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="relative inline-block px-2">
             <h1 className="text-3xl md:text-4xl font-extrabold text-gray-700 leading-tight">
              Dudu, would you please be<br />
              <span className="text-valentine-darkPink">my husband 🌹?</span>
            </h1>
        </div>
       
        <p className="text-gray-500 font-medium text-lg">
            {noCount > 0 ? "Please say yes! 🥺" : "I have a question..."}
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center items-center gap-4 w-full px-4 min-h-[200px]">
        <motion.button
          onClick={onYes}
          className={`bg-valentine-pink hover:bg-valentine-darkPink text-white font-bold rounded-full shadow-xl transition-all duration-300 z-10`}
          style={{
            fontSize: `${Math.min(20 + noCount * 20, 100)}px`, // Cap size
            padding: `${Math.min(12 + noCount * 5, 50)}px ${Math.min(32 + noCount * 10, 100)}px`,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          layout
        >
          Yes
        </motion.button>

        <motion.button
          onClick={handleNoClick}
          className="bg-blue-200 hover:bg-blue-300 text-gray-700 font-bold py-3 px-8 rounded-full shadow-md transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ x: noCount > 0 ? [0, -10, 10, -10, 10, 0] : 0 }}
          transition={{ duration: 0.4 }}
          layout
        >
          {getNoButtonText()}
        </motion.button>
      </div>
      
      {/* Decorative floating elements for Page 2 specifically */}
      <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-[20%] left-[10%] w-4 h-4 bg-red-200 rounded-full opacity-50"
            animate={{ 
                y: [0, -20, 0],
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.2, 1]
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-[15%] right-[20%] w-6 h-6 bg-blue-200 rounded-full opacity-50"
            animate={{ 
                y: [0, -30, 0],
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.2, 1]
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
            }}
          />
      </div>
    </div>
  );
};

export default ProposalPage;
