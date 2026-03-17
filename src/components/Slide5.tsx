import React from 'react';
import { SlideWrapper } from './SlideWrapper';
import { BlurReveal, WordByWordReveal } from './AnimatedText';
import { Logo } from './Logo';

export const Slide5 = ({ isActive }: { isActive: boolean }) => {
  return (
    <SlideWrapper
      isActive={isActive}
      containerClassName="bg-[#131318]"
      videoSrc="https://stream.mux.com/BuGGTsiXq1T00WUb8qfURrHkTCbhrkfFLSv4uAOZzdhw.m3u8"
      videoClassName="absolute object-cover"
      videoStyle={{ width: '200%', height: '200%', bottom: 0, left: 0 }}
    >
      <BlurReveal delay={0.05} className="px-[5%] pt-[3.5%] flex justify-between items-start">
        <Logo />
        <div className="text-[#80838e] text-[20px] leading-[1.4]">06</div>
      </BlurReveal>

      <div className="px-[5%] mt-6">
        <div className="bg-white/15 h-px w-full" />
      </div>

      <div className="flex-1" />

      <div className="max-w-[65%] px-[5%] pb-[5%]">
        <BlurReveal delay={0.15} className="text-[#80838e] text-[clamp(12px,1.2vw,26px)] mb-6">
          Conclusion & Recommendation
        </BlurReveal>
        <WordByWordReveal
          text="An Anthropic-style, compliance-first AI startup is feasible and strategically attractive in 2026."
          className="text-white leading-[1.04] text-[clamp(20px,4vw,80px)] block mb-8"
          baseDelay={0.25}
          stagger={0.035}
          duration={0.55}
        />
        <BlurReveal delay={0.6} className="text-[#80838e] max-w-[800px] text-[clamp(12px,1.1vw,22px)]">
          The market is expanding rapidly, rivalry is strong, and demand for safe enterprise AI remains under-served. A focused startup using Anthropic-aligned principles can compete by targeting regulated workflows, shipping faster via API-first architecture, and scaling through recurring B2B revenue. Based on market, technical, financial, and operational analysis, the idea is <strong>feasible</strong> with disciplined execution.
        </BlurReveal>
      </div>
    </SlideWrapper>
  );
};
