import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import CodeRain from './CodeRain';

interface TechnologyPlatformProps {
  className?: string;
}

const TechnologyPlatform: React.FC<TechnologyPlatformProps> = ({ className }) => {
  return (
    <section id="technology" className={cn('pt-8 pb-28 md:pt-10 md:pb-36 bg-white relative overflow-hidden', className)}>
      {/* Code snippets typing in background - behind content */}
      <div className="absolute inset-0 z-0">
        <CodeRain />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs text-gray-500 uppercase tracking-[0.4em] font-medium mb-6">
              Infrastructure
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-16 leading-[0.95] tracking-[-0.02em]">
              Technology
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12 max-w-3xl font-normal">
              Purpose-built execution infrastructure designed for speed, reliability, and continuous optimization.
            </p>
          </FadeIn>

          {/* Infrastructure Options */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            <FadeIn delay={125}>
              <div className="border border-gray-200 rounded-lg p-6 bg-gray-50/50">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Proprietary Infrastructure</h3>
                  <span className="text-[10px] bg-gray-900 text-white px-2 py-0.5 rounded uppercase tracking-wider">Coming Soon</span>
                </div>
                <p className="text-gray-600 text-sm font-normal">Non-cloud based, ultra-low latency co-located infrastructure for HFT-grade execution</p>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="border border-gray-200 rounded-lg p-6 bg-gray-50/50">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Cloud Infrastructure</h3>
                  <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded uppercase tracking-wider">Live</span>
                </div>
                <p className="text-gray-600 text-sm font-normal">Low-latency cloud-based execution with global availability and elastic scaling</p>
              </div>
            </FadeIn>
          </div>
        
          {/* Tech Stack - Reduced spacing */}
          <div className="grid lg:grid-cols-2 gap-4 mb-12">
            <FadeIn delay={175}>
              <div className="border-t border-gray-200 pt-5 pb-2">
                <h3 className="text-base font-bold text-gray-900 mb-1">Rust & C++ Routing Engine</h3>
                <p className="text-gray-600 text-sm font-normal">Microsecond-level processing, HFT-optimized code paths, deterministic recovery</p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="border-t border-gray-200 pt-5 pb-2">
                <h3 className="text-base font-bold text-gray-900 mb-1">LLM-Powered Trading Interface</h3>
                <p className="text-gray-600 text-sm font-normal">Natural language order entry, automated error correction, conversational API</p>
              </div>
            </FadeIn>
            <FadeIn delay={225}>
              <div className="border-t border-gray-200 pt-5 pb-2">
                <h3 className="text-base font-bold text-gray-900 mb-1">Redis Streams</h3>
                <p className="text-gray-600 text-sm font-normal">Ultra-fast message passing for real-time depth and routing decisions</p>
              </div>
            </FadeIn>
            <FadeIn delay={250}>
              <div className="border-t border-gray-200 pt-5 pb-2">
                <h3 className="text-base font-bold text-gray-900 mb-1">AI Agent Operations</h3>
                <p className="text-gray-600 text-sm font-normal">Autonomous agents managing 24/7 uptime, monitoring, and self-healing infrastructure</p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={275}>
            <div className="mb-12 border-t border-gray-200 pt-6">
              <h3 className="text-xs text-gray-500 uppercase tracking-[0.4em] font-medium mb-6">Performance Targets</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="border-l-2 border-gray-900 pl-4">
                  <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1 tracking-[-0.02em]">&lt;5ms</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-[0.15em]">End-to-end latency</div>
                </div>
                <div className="border-l-2 border-gray-900 pl-4">
                  <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1 tracking-[-0.02em]">&lt;1ms</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-[0.15em]">Internal decision</div>
                </div>
                <div className="border-l-2 border-gray-900 pl-4">
                  <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1 tracking-[-0.02em]">99.9%</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-[0.15em]">System uptime</div>
                </div>
                <div className="border-l-2 border-gray-900 pl-4">
                  <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1 tracking-[-0.02em]">24/7</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-[0.15em]">AI monitoring</div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xs text-gray-500 uppercase tracking-[0.4em] font-medium mb-4">Venue Connectivity</h3>
              <p className="text-gray-600 mb-2 text-sm font-normal">
                Direct API connections to major global exchanges and Canadian registered platforms.
              </p>
              <p className="text-xs text-gray-400 font-normal">
                Expanding coverage across North America, Asia, and Europe.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPlatform;
