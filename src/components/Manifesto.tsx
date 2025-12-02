import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import RoutingNodes from './RoutingNodes';

interface ManifestoProps {
  className?: string;
}

const Manifesto: React.FC<ManifestoProps> = ({ className }) => {
  return (
    <section id="what-we-do" className={cn('pt-8 pb-28 md:pt-12 md:pb-36 bg-white relative overflow-hidden', className)}>
      {/* Routing nodes animation - subtle */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <RoutingNodes />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs text-gray-500 uppercase tracking-[0.4em] font-medium mb-6">
              Smart Order Routing | Execution Services | High Frequency Trading Infrastructure
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-16 leading-[0.95] tracking-[-0.02em]">
              Crypto Execution Services & Infrastructure
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-20 max-w-3xl font-normal">
              Sequence Markets builds smart order routing and high-frequency trading infrastructure for crypto execution. Low-latency execution services connecting to major exchanges with unified order book aggregation, routing to venues with best price, liquidity, and execution quality for institutional crypto trading.
            </p>
          </FadeIn>
          
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <FadeIn delay={150}>
              <div className="border-t border-gray-200 pt-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 tracking-[-0.01em]">Smart Order Routing for Crypto</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-base font-normal">
                  Multi-venue smart order routing engine for crypto execution services. Evaluates price, liquidity, latency, fee schedules, and historical fill probabilities to determine optimal execution paths. Part of our high-frequency trading infrastructure delivering best execution for institutional crypto trading.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 font-normal">
                  <li>• Real-time depth aggregation</li>
                  <li>• Dynamic fee and rebate tracking</li>
                  <li>• Latency-adjusted pricing</li>
                  <li>• Fill probability models</li>
                </ul>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="border-t border-gray-200 pt-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 tracking-[-0.01em]">Institutional Execution Platform</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-base font-normal">
                  Unified execution management system (EMS) and order management system (OMS) for institutions. Manage routing, analytics, monitoring, and risk controls across exchanges, OTC desks, and tokenised markets. Low-latency execution services with high-frequency trading infrastructure.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 font-normal">
                  <li>• Centralized order management</li>
                  <li>• Real-time execution analytics</li>
                  <li>• Risk controls and limits</li>
                  <li>• Regulatory-grade logging</li>
                </ul>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={250}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-gray-200">
              <div>
                <div className="text-lg font-semibold text-gray-900 mb-2">AI Execution</div>
                <p className="text-sm text-gray-500 font-normal">Reinforcement learning from order flow and slippage patterns</p>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Market Data</div>
                <p className="text-sm text-gray-500 font-normal">Full transparency into routing decisions and costs</p>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Non-Custodial</div>
                <p className="text-sm text-gray-500 font-normal">Clients retain funds on their existing venues</p>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Multi-Asset</div>
                <p className="text-sm text-gray-500 font-normal">Crypto, tokenised equities, bonds, stablecoins</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
