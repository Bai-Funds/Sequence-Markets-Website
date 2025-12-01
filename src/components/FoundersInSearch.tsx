import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import FadeIn from './animations/FadeIn';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import LogoMarquee from './LogoMarquee';

interface FoundersInSearchProps {
  className?: string;
}

const FoundersInSearch: React.FC<FoundersInSearchProps> = ({ className }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Feature flag: set to true to temporarily re-enable Zilong Bai
  const SHOW_ZILONG_BAI = false;

  const allTeamMembers = [
    {
      name: "Peter Bai",
      role: "CEO",
      degree: "B.A., Honors Business Administration (Ivey Business School, Western)",
      logoPrimary: "/assets/Ivey Logo.png",
      fullDescription:
        "Peter Bai co-founded Sequence Markets and serves as CEO. He leads quantitative strategy research for market structure, trading, and high-performance trading systems, and leads algorithmic development prototyping and organizational strategy. He works closely with the CTO to develop and set up backend and execution infrastructure, including cloud computing, large language modeling research and setup, and physical co-location server building. Peter previously worked as a quant developer on the Macro Trading Desk at University Pension Plan Ontario, covering FX, equity TRS, and repo within a $13B AUM portfolio. Earlier, he was an Equity Markets quant at TMX Group focused on trading infrastructure and technology, and he spent time in venture capital at HCS Capital evaluating fintech and insurtech co-investments. Peter is an Ivey HBA student at Western University.",
      image: "/assets/Peter HeadShot.png",
      linkedin: "https://www.linkedin.com/in/peter-bai/",
    },
    {
      name: "Muhammad Awan",
      role: "CTO",
      degree: "B.Sc., Computer Science (Waterloo)",
      logoPrimary: "/assets/Waterloo Logo.png",
      fullDescription:
        "Muhammad Awan serves as CTO of Sequence Markets. He owns high-performance systems development, writing and maintaining the execution infrastructure and turning prototypes into optimized production code. He works closely with the CEO to develop and set up backend and execution infrastructure, including cloud computing, large language modeling research and setup, and physical co-location server building. Muhammad is a Founding Machine Learning Engineer at Boardy AI, building production ML systems for digital human interaction. He previously built ML pipelines at UTEX Scientific Instruments and contributed to autonomous vehicle perception at WATonomous and path planning at MIT-PITT-RW. Muhammad is a Computer Science student at the University of Waterloo.",
      image: "/assets/Muhammad HeadShot.png",
      linkedin: "https://www.linkedin.com/in/muhammad-awan0",
    },
    {
      name: "Zilong Bai",
      role: "AI & ML Advisor",
      degree: "Ph.D., Computer Science (UC Davis); M.Eng., Information & Communication Engineering (USTC); B.Eng., Electronic Information Engineering (USTC)",
      logoPrimary: "/assets/Cornell Medicine Logo.png",
      logoSecondary: "/assets/UC Davis Logo.png",
      logoTertiary: "/assets/university of science and technology of china logo.png",
      fullDescription:
        "Zilong Bai serves as AI & ML Advisor at Sequence Markets. He advises the firm's machine learning program, shaping research best practices, reviewing model specifications, and guiding the use of data mining and applied ML methods for market data. Zilong is a Research Associate at Weill Cornell Medicine. He focuses on graph modeling, multimodal learning, and rigorous evaluation standards. Zilong holds a Ph.D. in Computer Science from UC Davis with first-author work across leading venues, including Science Translational Medicine, KDD, and NPJ.",
      image: "/assets/Zilong HeadShot.png",
      linkedin: "https://www.linkedin.com/in/zilong-bai-72a227133/",
    },
    {
      name: "Josephina Kim",
      role: "Capital & Investor Relations",
      degree: "B.Sc., Computer Science (Waterloo) & B.B.A., Business Administration (Laurier)",
      logoPrimary: "/assets/Waterloo Logo.png",
      logoSecondary: "/assets/Laurier Logo.png",
      fullDescription:
        "Josephina Kim leads Capital & Investor Relations at Sequence Markets. She leads fundraising and investor relations, bringing deep understanding of market structure and institutional needs, and leverages her venture-based connections and institutional relationships to drive capital formation. Josephina is currently working as an electronic trader and AI researcher at RBC Capital Markets in New York. She previously worked as a quantitative analyst on BMO Capital Markets' Electronic Cash Equities desk developing models for electronic trading, and as a venture capital analyst at Render Capital evaluating early-stage technology investments. Josephina is a Schulich Leader Scholar pursuing a dual Computer Science and Business Administration program at the University of Waterloo and Wilfrid Laurier University.",
      image: "/assets/Josephina HeadShot.png",
      linkedin: "https://www.linkedin.com/in/josephina-kim/",
    },
    {
      name: "Frank Zou",
      role: "Market Structure & Business Development",
      degree: "B.MOS, Finance (Huron, Western); Advanced Entry Opportunity to Ivey Business School",
      logoPrimary: "/assets/Huron Logo.png",
      fullDescription:
        "Frank Zou leads Market Structure & Business Development at Sequence Markets. He leads market structure research, trading strategy research, and business development, managing industry networking, outreach, and direct industry connections. Frank previously worked in Equity Markets at TMX Group as a quantitative analyst conducting market structure research and focusing on product innovation and trading rules. He also helped lead communications and partnerships for student investment organizations at Western University. Frank is a Business student at Huron University (Western) with Ivey Advanced Entry Opportunity status.",
      image: "/assets/Frank HeadShot.png",
      linkedin: "https://www.linkedin.com/in/fzou26/",
    },
  ];

  // Filter team members based on feature flag
  const teamMembers = allTeamMembers.filter(member =>
    member.name !== "Zilong Bai" || SHOW_ZILONG_BAI
  );

  return (
    <section id="team" className={cn('pt-16 pb-28 md:pt-20 md:pb-36 bg-gray-50', className)}>
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto mb-16">
          <FadeIn>
            <p className="text-xs text-gray-500 uppercase tracking-[0.4em] font-medium mb-6">
              People
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-16 leading-[0.95] tracking-[-0.02em]">
              Team
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-16 max-w-3xl font-normal">
              Market-structure engineers and ML researchers building execution infrastructure.
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-gray-200">
              <div className="border-l-2 border-gray-900 pl-6">
                <div className="text-lg font-bold text-gray-900 mb-1">Exchanges</div>
                <div className="text-xs text-gray-500 uppercase tracking-[0.15em]">Market Structure</div>
              </div>
              <div className="border-l-2 border-gray-900 pl-6">
                <div className="text-lg font-bold text-gray-900 mb-1">Asset Managers</div>
                <div className="text-xs text-gray-500 uppercase tracking-[0.15em]">Execution Systems</div>
              </div>
              <div className="border-l-2 border-gray-900 pl-6">
                <div className="text-lg font-bold text-gray-900 mb-1">Banks</div>
                <div className="text-xs text-gray-500 uppercase tracking-[0.15em]">Electronic Trading</div>
              </div>
              <div className="border-l-2 border-gray-900 pl-6">
                <div className="text-lg font-bold text-gray-900 mb-1">Research</div>
                <div className="text-xs text-gray-500 uppercase tracking-[0.15em]">ML & AI</div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <FadeIn key={index} delay={200 + index * 50}>
              <div
                className="cursor-pointer group relative h-full flex flex-col"
                onClick={() => setExpandedIndex(index)}
              >
                {/* Dark blue tint that reveals original color on hover */}
                <div className="aspect-square mb-4 overflow-hidden bg-gray-100 rounded-lg relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 team-photo-tint"
                  />
                  <div
                    className="absolute inset-0 bg-blue-950/10 group-hover:bg-transparent transition-all duration-300"
                  />
                </div>

                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
                  <ChevronRight className="w-4 h-4 text-gray-500 mr-2 group-hover:text-gray-900 transition-colors duration-300" />
                </div>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>

              <Dialog open={expandedIndex === index} onOpenChange={(open) => setExpandedIndex(open ? index : null)}>
                <DialogContent className="max-w-4xl bg-white border border-gray-200 p-0 max-h-[90svh] overflow-y-auto shadow-2xl" aria-describedby={undefined}>
                  <VisuallyHidden>
                    <DialogTitle>{member.name} - {member.role}</DialogTitle>
                  </VisuallyHidden>
                  <div className="p-10 md:p-12">
                    <div className="flex flex-col md:flex-row items-start gap-10">
                      {/* Left column - Photo and logos centered */}
                      <div className="flex flex-col items-center gap-6 flex-shrink-0 w-full md:w-auto">
                        <div className="w-44 h-44 overflow-hidden rounded-lg bg-gray-100">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Logos - centered below photo, same width as photo */}
                        <div className="flex flex-col items-center gap-4 w-44">
                          {member.logoPrimary && (
                            <img
                              src={member.logoPrimary}
                              alt="School"
                              className="w-full h-auto object-contain"
                            />
                          )}
                          {member.logoSecondary && (
                            <img
                              src={member.logoSecondary}
                              alt="School"
                              className="w-full h-auto object-contain"
                            />
                          )}
                          {member.logoTertiary && (
                            <img
                              src={member.logoTertiary}
                              alt="School"
                              className="w-full h-auto object-contain"
                            />
                          )}
                        </div>
                      </div>
                      {/* Right column - Info */}
                      <div className="flex-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{member.name}</h3>
                        <p className="text-xl text-gray-600 mb-2">{member.role}</p>
                        <p className="text-base text-gray-400 mb-10">{member.degree}</p>
                        <p className="text-gray-600 leading-relaxed mb-10 text-lg font-normal">
                          {member.fullDescription}
                        </p>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-sm text-gray-900 uppercase tracking-[0.2em] border-b border-gray-900 pb-1 hover:opacity-70 transition-opacity"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </FadeIn>
          ))}
        </div>

        {/* Experience section - moved inside Team */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <LogoMarquee embedded />
        </div>
      </div>
    </section>
  );
};

export default FoundersInSearch;
