import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { HLSVideo } from './HLSVideo';

export const SlideWrapper = ({ 
  isActive, 
  children, 
  videoSrc, 
  videoClassName, 
  videoStyle,
  containerClassName = ""
}: { 
  isActive: boolean, 
  children: React.ReactNode, 
  videoSrc: string, 
  videoClassName?: string, 
  videoStyle?: React.CSSProperties,
  containerClassName?: string
}) => {
  const [activationCount, setActivationCount] = useState(0);

  useEffect(() => {
    if (isActive) {
      setActivationCount(c => c + 1);
    }
  }, [isActive]);

  return (
    <motion.div
      className={`absolute inset-0 w-full h-full overflow-hidden ${containerClassName}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ zIndex: isActive ? 10 : 0, pointerEvents: isActive ? "auto" : "none" }}
    >
      <HLSVideo src={videoSrc} className={videoClassName} style={videoStyle} />
      <div key={activationCount} className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};
