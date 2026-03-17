import React from 'react';
import { SlideWrapper } from './SlideWrapper';
import { BlurReveal, WordByWordReveal } from './AnimatedText';
import { Logo } from './Logo';

export const Slide7 = ({ isActive }: { isActive: boolean }) => {
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
        <div className="text-[#80838e] text-[20px] leading-[1.4]">07</div>
      </BlurReveal>

      <div className="px-[5%] mt-6">
        <div className="bg-white/15 h-px w-full" />
      </div>

      <div className="flex-1" />

      <div className="max-w-[65%] px-[5%] pb-[5%]">
        <BlurReveal delay={0.15} className="text-[#80838e] text-[clamp(12px,1.2vw,26px)] mb-6">
          Conclusion
        </BlurReveal>
        <WordByWordReveal
          text="Anthropic is a highly feasible and necessary startup in the Generative AI landscape."
          className="text-white leading-[1.04] text-[clamp(20px,4vw,80px)] block mb-8"
          baseDelay={0.25}
          stagger={0.035}
          duration={0.55}
        />
        <BlurReveal delay={0.6} className="text-[#80838e] max-w-[800px] text-[clamp(12px,1.1vw,22px)]">
          Despite intense competition from OpenAI and Google DeepMind, Anthropic's unique positioning in <strong>AI Safety and Steerability</strong> addresses a critical enterprise bottleneck (compliance and trust). Backed by massive funding from Amazon and Google, elite management, and a clear path to profitability, the startup model is financially and operationally sound.
        </BlurReveal>
      </div>
    </SlideWrapper>
  );
};
