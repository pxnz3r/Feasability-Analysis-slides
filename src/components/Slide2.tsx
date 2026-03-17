import React from 'react';
import { motion } from 'motion/react';
import { SlideWrapper } from './SlideWrapper';
import { BlurReveal, WordByWordReveal } from './AnimatedText';
import { Logo } from './Logo';

export const Slide2 = ({ isActive }: { isActive: boolean }) => {
  const metrics = [
    { name: 'Public Reach Index', openai: 62, deepmind: 100, anthropic: 42 },
    { name: 'Enterprise Reach Index', openai: 72, deepmind: 100, anthropic: 58 },
    { name: 'Safety Positioning', openai: 62, deepmind: 74, anthropic: 96 },
  ];

  return (
    <SlideWrapper
      isActive={isActive}
      videoSrc="https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8"
      videoClassName="absolute inset-0 w-full h-full object-cover opacity-60"
    >
      <BlurReveal delay={0.05} className="px-[5%] pt-[3.5%] flex justify-between items-start">
        <Logo />
        <div className="text-[#80838e] text-[20px] leading-[1.4]">02</div>
      </BlurReveal>

      <div className="flex flex-col flex-1 justify-center px-[5%] py-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div>
              <BlurReveal delay={0.15} className="text-[#80838e] text-[clamp(12px,1.2vw,18px)] mb-2">
                Industry Overview & Rivals
              </BlurReveal>
              <WordByWordReveal
                text="Generative AI is now mainstream across consumers and enterprises, with massive growth signals in 2025."
                className="text-white leading-[1.04] text-[clamp(20px,2.5vw,40px)] block mb-6"
                baseDelay={0.25}
                stagger={0.035}
                duration={0.55}
              />
            </div>

            <BlurReveal delay={0.45} className="text-[#80838e] text-[11px] leading-[1.5] max-w-[90%]">
              Industry signal: Gartner estimates global GenAI spending at <strong className="text-white">$644B in 2025</strong> (+76.4% YoY).
            </BlurReveal>
            
            <BlurReveal delay={0.6} className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
              <h3 className="text-white text-lg font-bold mb-2">OpenAI</h3>
              <p className="text-[#80838e] text-xs mb-2"><strong className="text-white/80">Products:</strong> ChatGPT, GPT API stack, enterprise copilots.</p>
              <p className="text-[#80838e] text-xs mb-2"><strong className="text-white/80">Target Market:</strong> Mass consumers, developers, and enterprise teams.</p>
              <p className="text-[#80838e] text-xs"><strong className="text-white/80">Positioning:</strong> Reuters (Feb 2025): ~400M weekly active users and 2M paying business users.</p>
            </BlurReveal>

            <BlurReveal delay={0.8} className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
              <h3 className="text-white text-lg font-bold mb-2">Google DeepMind</h3>
              <p className="text-[#80838e] text-xs mb-2"><strong className="text-white/80">Products:</strong> Gemini app, Gemini models in AI Studio and Vertex AI.</p>
              <p className="text-[#80838e] text-xs mb-2"><strong className="text-white/80">Target Market:</strong> Consumer search/app users and Google Cloud enterprise customers.</p>
              <p className="text-[#80838e] text-xs"><strong className="text-white/80">Positioning:</strong> Google reported 400M+ Gemini MAU at I/O 2025, 650M MAU by Q3 2025, and 7M developers building with Gemini.</p>
            </BlurReveal>
          </div>

          <div className="flex flex-col justify-end h-[400px] w-full relative mt-8 lg:mt-0">
            <BlurReveal delay={0.3} className="absolute -top-8 right-0 flex gap-4">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#10a37f]"></div><span className="text-white text-xs">OpenAI</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#4285f4]"></div><span className="text-white text-xs">DeepMind</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#d97757]"></div><span className="text-white text-xs">Anthropic</span></div>
            </BlurReveal>

            <div className="flex justify-between items-end h-[320px] border-b border-white/20 pb-4">
              {metrics.map((metric, i) => (
                <div key={metric.name} className="flex flex-col items-center gap-4 w-1/3">
                  <div className="flex items-end gap-2 h-[250px] w-full justify-center">
                    <motion.div 
                      className="w-8 bg-[#10a37f] rounded-t-sm relative group"
                      initial={{ height: 0 }} animate={{ height: isActive ? `${metric.openai}%` : 0 }} transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    >
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-white text-[10px] bg-black/50 px-1 py-0.5 rounded transition-opacity">{metric.openai}%</div>
                    </motion.div>
                    <motion.div 
                      className="w-8 bg-[#4285f4] rounded-t-sm relative group"
                      initial={{ height: 0 }} animate={{ height: isActive ? `${metric.deepmind}%` : 0 }} transition={{ duration: 1, delay: 0.6 + i * 0.1 }}
                    >
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-white text-[10px] bg-black/50 px-1 py-0.5 rounded transition-opacity">{metric.deepmind}%</div>
                    </motion.div>
                    <motion.div 
                      className="w-8 bg-[#d97757] rounded-t-sm relative group"
                      initial={{ height: 0 }} animate={{ height: isActive ? `${metric.anthropic}%` : 0 }} transition={{ duration: 1, delay: 0.7 + i * 0.1 }}
                    >
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-white text-[10px] bg-black/50 px-1 py-0.5 rounded transition-opacity">{metric.anthropic}%</div>
                    </motion.div>
                  </div>
                  <span className="text-white font-medium text-sm text-center">{metric.name}</span>
                </div>
              ))}
            </div>
            <BlurReveal delay={1.05} className="mt-4 text-[#80838e] text-[10px]">
              Index values are normalized from disclosed user and enterprise scale signals (public 2025 data).
            </BlurReveal>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
