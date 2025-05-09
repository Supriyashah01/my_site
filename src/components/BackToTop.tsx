
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    setIsAnimating(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Reset animation state after scrolling completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <Button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-12 h-12 rounded-full bg-portfolio-purple hover:bg-portfolio-purple/90 shadow-lg flex items-center justify-center"
            disabled={isAnimating}
          >
            <motion.div
              animate={isAnimating ? { y: [-5, 0, -5] } : { y: 0 }}
              transition={isAnimating ? { repeat: Infinity, duration: 1 } : {}}
            >
              <ChevronUp className="h-6 w-6" />
            </motion.div>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
