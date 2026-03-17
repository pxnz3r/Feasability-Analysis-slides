import React from 'react';
import { SlideWrapper } from './SlideWrapper';
import { BlurReveal, WordByWordReveal } from './AnimatedText';
import { Logo } from './Logo';

export const Slide6 = ({ isActive }: { isActive: boolean }) => {
  return (
    <SlideWrapper
      isActive={isActive}
      videoSrc="https://stream.mux.com/PkFsoKeakRLgL01gjf02CRcSbsJ600Z00NvLr9eRZ92pLbA.m3u8"
      videoClassName="absolute top-0 bottom-0 left-0 h-full object-cover opacity-30"
      videoStyle={{ transform: 'scaleX(-1)' }}
    >
      <BlurReveal delay={0.05} className="absolute top-0 left-0 right-0 pt-[3.5%] px-[5%] flex justify-between items-start z-20">
        <Logo />
        <div className="text-[#80838e] text-[20px] leading-[1.4]">05</div>
      </BlurReveal>

      <div className="flex flex-col w-full h-full justify-center px-[5%] relative z-10">
        <div className="max-w-[90%]">
          <BlurReveal delay={0.15} className="text-[#80838e] text-[clamp(12px,1.2vw,26px)] mb-6">
            Financial Feasibility
          </BlurReveal>
          <WordByWordReveal
            text="An API-first business model makes this startup financially viable with moderate capital and recurring B2B revenue."
            className="text-white leading-[1.04] text-[clamp(20px,3.5vw,56px)] block mb-10"
            baseDelay={0.25}
            stagger={0.035}
            duration={0.55}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BlurReveal delay={0.8} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="text-white text-xl font-bold mb-4">Startup Costs (Year 1: $0.9M-$1.4M)</h3>
              <ul className="space-y-2 text-[#80838e] text-sm">
                <li><strong className="text-white/80">People:</strong> $500k-$800k (engineering, product, sales, compliance)</li>
                <li><strong className="text-white/80">Cloud + API + Security:</strong> $200k-$350k</li>
                <li><strong className="text-white/80">Legal + GTM + Ops:</strong> $150k-$250k</li>
              </ul>
            </BlurReveal>

            <BlurReveal delay={1.0} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="text-white text-xl font-bold mb-4">Revenue Model</h3>
              <ul className="space-y-2 text-[#80838e] text-sm">
                <li><strong className="text-white/80">B2B SaaS:</strong> $20-$60 per user/month for workflow copilots.</li>
                <li><strong className="text-white/80">Usage Billing:</strong> Token-based pricing for high-volume customers.</li>
                <li><strong className="text-white/80">Enterprise Services:</strong> Onboarding, governance setup, and premium support.</li>
              </ul>
            </BlurReveal>

            <BlurReveal delay={1.2} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="text-white text-xl font-bold mb-4">Projected Revenue</h3>
              <ul className="space-y-2 text-[#80838e] text-sm">
                <li><strong className="text-white/80">Year 1:</strong> $0.6M-$1.0M (pilot programs + early subscriptions)</li>
                <li><strong className="text-white/80">Year 3:</strong> $4M-$7M (regional enterprise expansion)</li>
                <li><strong className="text-white/80">Year 5:</strong> $12M-$20M (multi-country scale-up)</li>
                <li className="mt-4 pt-4 border-t border-white/10"><strong className="text-[#10a37f]">Break-even:</strong> Expected in Year 2-3 with controlled inference spend.</li>
              </ul>
            </BlurReveal>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
