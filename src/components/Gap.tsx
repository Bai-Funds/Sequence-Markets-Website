import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import InfinityLoop from './InfinityLoop';

interface GapProps {
  className?: string;
}

const Gap: React.FC<GapProps> = ({ className }) => {
  return (
    <section id="how-it-works" className={cn('py-28 md:py-36 bg-gray-50 relative overflow-hidden', className)}>
      {/* Infinity loop - feedback visualization - subtle */}
      <div className="opacity-50">
        <InfinityLoop />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs text-gray-500 uppercase tracking-[0.4em] font-medium mb-6">
              Process
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-16 leading-[0.95] tracking-[-0.02em]">
              How It Works
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-20 max-w-3xl font-normal">
              Execution results feed back into the model. Continuously tunes venue weights and child-order sizing.
            </p>
          </FadeIn>
        
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <FadeIn delay={150}>
              <div className="border-t border-gray-200 pt-10">
                <div className="text-6xl font-bold text-gray-700 mb-6 tracking-[-0.02em]">01</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect</h3>
                <p className="text-gray-600 leading-relaxed text-base font-normal">
                  Direct low-latency connections to global exchanges and liquidity sources.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="border-t border-gray-200 pt-10">
                <div className="text-6xl font-bold text-gray-700 mb-6 tracking-[-0.02em]">02</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Aggregate</h3>
                <p className="text-gray-600 leading-relaxed text-base font-normal">
                  Unified order book. Aggregate depth, fees, latencies and calculate effective price in real time.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={250}>
              <div className="border-t border-gray-200 pt-10">
                <div className="text-6xl font-bold text-gray-700 mb-6 tracking-[-0.02em]">03</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Route</h3>
                <p className="text-gray-600 leading-relaxed text-base font-normal">
                  Evaluate spread, depth, volatility, latency, fees, fill probability, risk constraints. Execute optimally.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={300}>
            <div className="border-t border-gray-200 pt-10">
              <h3 className="text-xs text-gray-500 uppercase tracking-[0.4em] font-medium mb-8">Reinforcement Loop</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <div className="text-gray-900 font-semibold text-base mb-2">Fills vs Expected</div>
                  <p className="text-sm text-gray-500 font-normal">Track execution quality against predictions</p>
                </div>
                <div>
                  <div className="text-gray-900 font-semibold text-base mb-2">Slippage Patterns</div>
                  <p className="text-sm text-gray-500 font-normal">Learn from market impact data</p>
                </div>
                <div>
                  <div className="text-gray-900 font-semibold text-base mb-2">Latency Anomalies</div>
                  <p className="text-sm text-gray-500 font-normal">Detect and adapt to venue issues</p>
                </div>
                <div>
                  <div className="text-gray-900 font-semibold text-base mb-2">Venue Outages</div>
                  <p className="text-sm text-gray-500 font-normal">Automatic failover routing</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Gap;
