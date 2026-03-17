import React from 'react';
import { SlideWrapper } from './SlideWrapper';
import { BlurReveal, WordByWordReveal } from './AnimatedText';
import { Logo } from './Logo';

export const Slide4 = ({ isActive }: { isActive: boolean }) => {
  return (
    <SlideWrapper
      isActive={isActive}
      videoSrc="https://stream.mux.com/PkFsoKeakRLgL01gjf02CRcSbsJ600Z00NvLr9eRZ92pLbA.m3u8"
      videoClassName="absolute top-0 bottom-0 left-0 h-full object-cover opacity-30"
      videoStyle={{ transform: 'scaleX(-1)' }}
    >
      <BlurReveal delay={0.05} className="absolute top-0 left-0 right-0 pt-[3.5%] px-[5%] flex justify-between items-start z-20">
        <Logo />
        <div className="text-[#80838e] text-[20px] leading-[1.4]">04</div>
      </BlurReveal>

      <div className="flex flex-col w-full h-full justify-center px-[5%] relative z-10 pt-12">
        <div className="max-w-[95%]">
          <BlurReveal delay={0.15} className="text-[#80838e] text-[clamp(12px,1.2vw,26px)] mb-4">
            Technical & Operational Feasibility
          </BlurReveal>
          <WordByWordReveal
            text="A compliance-first startup can launch quickly using API-first architecture instead of building frontier models from scratch."
            className="text-white leading-[1.04] text-[clamp(20px,3vw,48px)] block mb-8"
            baseDelay={0.25}
            stagger={0.035}
            duration={0.55}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical Feasibility */}
            <div className="flex flex-col gap-4">
              <BlurReveal delay={0.8} className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                <h3 className="text-white text-lg font-bold mb-3">Technical Feasibility</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white/90 text-sm font-semibold mb-1">Technology Stack</h4>
                    <ul className="list-disc pl-4 text-[#80838e] text-xs space-y-1">
                      <li><strong className="text-white/70">Core AI Layer:</strong> Claude API (Sonnet/Haiku) with prompt routing and safety filters.</li>
                      <li><strong className="text-white/70">Knowledge Layer:</strong> RAG pipeline with vector database + document permissions.</li>
                      <li><strong className="text-white/70">Product Layer:</strong> Web app, role-based admin console, audit logs, and human approval loops.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white/90 text-sm font-semibold mb-1">Infrastructure & Tools</h4>
                    <ul className="list-disc pl-4 text-[#80838e] text-xs space-y-1">
                      <li><strong className="text-white/70">Cloud:</strong> Multi-cloud deployment with AWS/GCP for resiliency and data locality.</li>
                      <li><strong className="text-white/70">Model Access:</strong> Anthropic models available via Claude API, AWS Bedrock, and Google Vertex AI.</li>
                      <li className="text-[#10a37f] font-medium mt-1">Practical launch window: 4-6 months for an enterprise MVP.</li>
                    </ul>
                  </div>
                </div>
              </BlurReveal>
            </div>

            {/* Operational Feasibility */}
            <div className="flex flex-col gap-4">
              <BlurReveal delay={1.0} className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm h-full">
                <h3 className="text-white text-lg font-bold mb-3">Operational Feasibility</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white/90 text-sm font-semibold mb-1">Management Capability</h4>
                    <p className="text-[#80838e] text-xs">Founding team requires product, enterprise sales, and AI governance leadership to handle regulated-sector deployments.</p>
                  </div>
                  <div>
                    <h4 className="text-white/90 text-sm font-semibold mb-1">Human Resources</h4>
                    <p className="text-[#80838e] text-xs">Initial team: 10-14 people (backend, ML platform, frontend, DevSecOps, customer success, and compliance specialists).</p>
                  </div>
                  <div>
                    <h4 className="text-white/90 text-sm font-semibold mb-1">Operational Requirements</h4>
                    <ul className="list-disc pl-4 text-[#80838e] text-xs space-y-1">
                      <li>Enterprise onboarding playbooks and SLA-backed support workflows.</li>
                      <li>Data protection controls (encryption, retention policy, permissioning).</li>
                      <li>Continuous evaluation, red-teaming, and model-behavior monitoring.</li>
                    </ul>
                  </div>
                </div>
              </BlurReveal>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
