import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import WelcomePage from './components/WelcomePage';
import ProposalPage from './components/ProposalPage';
import SuccessPage from './components/SuccessPage';
import FloatingHearts from './components/FloatingHearts';

export type PageState = 'welcome' | 'proposal' | 'success';

const App: React.FC = () => {
  const [page, setPage] = useState<PageState>('welcome');

  const getBackground = () => {
    switch (page) {
      case 'welcome':
        return 'bg-valentine-lightPink';
      case 'proposal':
        return 'bg-valentine-blue'; // Matches the light blue background in image 2
      case 'success':
        return 'bg-valentine-lightPink';
      default:
        return 'bg-white';
    }
  };

  return (
    <div className={`relative w-full h-screen overflow-hidden transition-colors duration-700 ease-in-out ${getBackground()} flex flex-col items-center justify-center`}>
      {/* Background decoration */}
      <FloatingHearts page={page} />

      {/* Main Content Area */}
      <div className="z-10 w-full max-w-md px-6 py-8 flex flex-col items-center justify-center min-h-[600px]">
        <AnimatePresence mode="wait">
          {page === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <WelcomePage onNext={() => setPage('proposal')} />
            </motion.div>
          )}

          {page === 'proposal' && (
            <motion.div
              key="proposal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <ProposalPage 
                onYes={() => setPage('success')} 
              />
            </motion.div>
          )}

          {page === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <SuccessPage onReset={() => setPage('welcome')} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;