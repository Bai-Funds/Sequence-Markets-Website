import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import BackgroundChart from './BackgroundChart';

interface CommunityProps {
  className?: string;
}

const Community: React.FC<CommunityProps> = ({ className }) => {
  return (
    <section id="contact" className={cn('pt-16 pb-16 md:pt-20 md:pb-20 bg-white relative overflow-hidden', className)}>
      {/* Stock chart lines background - subtle */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <BackgroundChart lightMode />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs text-gray-500 uppercase tracking-[0.4em] font-medium mb-6">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 leading-[0.95] tracking-[-0.02em]">
              Get Started
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12 max-w-2xl font-normal">
              Reduce execution cost. Full transparency. No custody risk.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            <FadeIn delay={150}>
              <div className="border-t border-gray-200 pt-10">
                <h3 className="text-lg font-bold text-gray-900 mb-6">For Institutions</h3>
                <ul className="text-gray-600 space-y-3 text-base font-normal">
                  <li>Multi-venue access</li>
                  <li>Total execution cost reduction</li>
                  <li>Transparent analytics</li>
                  <li>No custody risk</li>
                </ul>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="border-t border-gray-200 pt-10">
                <h3 className="text-lg font-bold text-gray-900 mb-6">For Brokers</h3>
                <ul className="text-gray-600 space-y-3 text-base font-normal">
                  <li>Best-execution engine</li>
                  <li>Liquidity optimization</li>
                  <li>Plug-and-play API</li>
                  <li>Regulatory-grade logs</li>
                </ul>
              </div>
            </FadeIn>
            
            <FadeIn delay={250}>
              <div className="border-t border-gray-200 pt-10">
                <h3 className="text-lg font-bold text-gray-900 mb-6">For Funds</h3>
                <ul className="text-gray-600 space-y-3 text-base font-normal">
                  <li>Low-latency multi-venue execution</li>
                  <li>Automated sizing and slicing</li>
                  <li>Real-time slippage control</li>
                  <li>Advanced analytics</li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={300}>
            <div className="border-t border-gray-200 pt-10">
              <h3 className="text-xs text-gray-500 uppercase tracking-[0.4em] font-medium mb-6">Request a Demo</h3>
              <p className="text-gray-600 mb-8 text-lg font-normal">
                See the router in action.
              </p>
              <a 
                href="mailto:team@sequencemkts.com"
                className="inline-block bg-gray-900 text-white font-medium text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-gray-800 transition-all duration-200"
              >
                team@sequencemkts.com
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Community;
