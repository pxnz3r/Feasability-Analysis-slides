import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SlideWrapper } from './SlideWrapper';
import { BlurReveal, WordByWordReveal } from './AnimatedText';
import { Logo } from './Logo';

export const Slide3 = ({ isActive }: { isActive: boolean }) => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const chartData = [
    { year: 2025, value: "$22.21B", x: 0, y: 100 },
    { year: 2026, value: "$29.64B", x: 20, y: 85 },
    { year: 2027, value: "$41.74B", x: 40, y: 68 },
    { year: 2029, value: "$82.77B", x: 60, y: 44 },
    { year: 2031, value: "$164.22B", x: 80, y: 20 },
    { year: 2033, value: "$324.68B", x: 100, y: 0 }
  ];

  return (
    <SlideWrapper
      isActive={isActive}
      videoSrc="https://stream.mux.com/Gs3wZfrtz6ZfqZqQ02c02Z7lugV00FGZvRpcqFTel66r3g.m3u8"
      videoClassName="absolute inset-0 w-full h-full object-cover opacity-50"
      videoStyle={{ transform: 'scale(-1, -1)' }}
    >
      <BlurReveal delay={0.05} className="px-[5%] pt-[3.5%] flex justify-between items-start">
        <Logo />
        <div className="text-[#80838e] text-[20px] leading-[1.4]">03</div>
      </BlurReveal>

      <div className="max-w-[55%] px-[5%] pt-[3%]">
        <BlurReveal delay={0.15} className="text-[#80838e] text-[clamp(12px,1.2vw,18px)] mb-4">
          Market Feasibility
        </BlurReveal>
        <WordByWordReveal
          text="Grand View Research projects Generative AI growth from $22.21B (2025) to $324.68B (2033), while Gartner estimates $644B in GenAI spending in 2025."
          className="text-white leading-[1.04] text-[clamp(20px,3.2vw,48px)] block mb-6"
          baseDelay={0.25}
          stagger={0.035}
          duration={0.55}
        />
        <BlurReveal delay={0.8} className="text-[#80838e] max-w-[90%] text-[clamp(12px,1.1vw,18px)]">
          <strong className="text-white">Startup Idea:</strong> Anthropic-style compliance copilot platform for regulated organizations (AI assistants + audited workflow automation).<br/><br/>
          <strong className="text-white">Target Customers:</strong> Regulated enterprises (banking, healthcare, legal, telecom) in Pakistan and GCC that need secure, auditable AI workflows.<br/><br/>
          <strong className="text-white">Market Demand:</strong> Stanford AI Index 2025 reports 78% organizational AI adoption, indicating room for a safety-first Anthropic-style startup despite strong rivalry from OpenAI and DeepMind.
        </BlurReveal>
      </div>

      <motion.div
        className="absolute bottom-[3%] left-0 right-0 top-[45%]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="absolute bottom-0 right-0 w-[55%] h-[70%]">
          {/* Chart Area */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="gradLine" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8238DC" />
                <stop offset="100%" stopColor="#F75CB7" />
              </linearGradient>
              <linearGradient id="gradFill" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F75CB7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8238DC" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradOpacity" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0.15" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,100 Q40,90 60,50 T100,0 L100,100 Z" fill="url(#gradFill)" />
            <path d="M0,100 Q40,90 60,50 T100,0" fill="none" stroke="url(#gradOpacity)" strokeWidth="12" />
            <path d="M0,100 Q40,90 60,50 T100,0" fill="none" stroke="url(#gradLine)" strokeWidth="2" />
          </svg>

          {/* Interactive Data Points */}
          {chartData.map((point, i) => (
            <div
              key={i}
              className="absolute w-6 h-6 -ml-3 -mt-3 flex items-center justify-center cursor-pointer z-30"
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
              onMouseEnter={() => setHoveredPoint(i)}
              onMouseLeave={() => setHoveredPoint(null)}
            >
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r from-[#7FBAFF] to-[#536EFB] border border-white transition-transform duration-300 ${hoveredPoint === i ? 'scale-150' : 'scale-100'}`} />
              
              {/* Tooltip */}
              {hoveredPoint === i && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-full mb-3 flex flex-col items-center pointer-events-none"
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-2 rounded-lg whitespace-nowrap shadow-xl">
                    <div className="text-[11px] text-[#80838e] font-medium uppercase tracking-wider mb-0.5">{point.year}</div>
                    <div className="text-lg font-bold leading-none">{point.value}</div>
                  </div>
                  <div className="w-px h-3 bg-white/40 mt-1" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* X Axis */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1a2035] flex justify-between px-[5%]">
          {chartData.map((point) => (
            <div key={point.year} className="relative flex flex-col items-center">
              <div className="w-px h-2 bg-[#1a2035] absolute top-0" />
              <span className="text-[#80838e] text-[clamp(11px,1vw,18px)] mt-4">{point.year}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </SlideWrapper>
  );
};
