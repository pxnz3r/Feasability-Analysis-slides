import React from 'react';
import { SlideWrapper } from './SlideWrapper';
import { BlurReveal, SlideUpLine } from './AnimatedText';
import { Logo } from './Logo';

export const Slide1 = ({ isActive }: { isActive: boolean }) => {
  return (
    <SlideWrapper
      isActive={isActive}
      videoSrc="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8"
      videoClassName="absolute inset-0 w-full h-full object-cover"
    >
      <BlurReveal delay={0.1} className="px-[5%] pt-[3.5%] flex justify-between items-start">
        <Logo />
        <div className="flex gap-8">
          {[
            { label: "Type", value: "Feasibility Report" },
            { label: "Rivals", value: "OpenAI + Google DeepMind" },
            { label: "Date", value: "March 2026" },
            { label: "Industry", value: "Artificial Intelligence" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-[2px]">
              <span className="text-[#80838e] text-[13px]">{item.label}</span>
              <span className="text-white text-[13px]">{item.value}</span>
            </div>
          ))}
        </div>
      </BlurReveal>

      <div className="px-[5%] mt-6">
        <div className="bg-white/15 h-px w-full" />
      </div>

      <div className="flex-1 flex items-end px-[5%] pb-[8%]">
        <h1 className="text-white leading-[0.9] tracking-tight text-[clamp(48px,10vw,140px)]">
          <SlideUpLine delay={0.3} duration={0.7}>Anthropic</SlideUpLine>
          <br />
          <SlideUpLine delay={0.4} duration={0.7}>Feasibility Analysis</SlideUpLine>
        </h1>
      </div>
    </SlideWrapper>
  );
};
