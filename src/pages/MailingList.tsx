import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MailingListForm from '@/components/MailingListForm';
import BackgroundChart from '@/components/BackgroundChart';
import FadeIn from '@/components/animations/FadeIn';

const MailingList = () => {
  useEffect(() => {
    // Force a refresh when the page loads to ensure HubSpot form renders
    const hasRefreshed = sessionStorage.getItem('mailing_list_refreshed');
    
    if (!hasRefreshed) {
      sessionStorage.setItem('mailing_list_refreshed', 'true');
      window.location.reload();
    }

    return () => {
      // Clear the flag when unmounting so it refreshes again next time
      sessionStorage.removeItem('mailing_list_refreshed');
    };
  }, []);

  return (
    <main className="w-full min-h-screen bg-white text-gray-900 flex flex-col">
      <Header />
      
      <div className="flex-grow relative overflow-hidden pt-32 pb-20">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <BackgroundChart lightMode />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            
            {/* Header Section */}
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-gray-900 tracking-tight">
                Product Updates
              </h1>
            </FadeIn>

            {/* Main Description - Option 1 List Style */}
            <FadeIn delay={100}>
              <div className="mb-24">
                <ul className="space-y-10 text-xl md:text-2xl text-gray-700 font-normal leading-relaxed">
                  <li className="flex items-start">
                    <span className="mr-4 mt-2 block w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-900 font-semibold">Monthly Insights:</strong> Deep dives into execution quality observations and infrastructure changes.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4 mt-2 block w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-900 font-semibold">Early Access:</strong> Pilot feature previews and exclusive product demo invites.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4 mt-2 block w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-900 font-semibold">Direct Engagement:</strong> Communicate with the team and share your feedback.
                    </span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Who's this for Section */}
            <FadeIn delay={200}>
              <div className="mb-24 border-t border-gray-200 pt-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                  Who is this for?
                </h2>
                <ul className="grid md:grid-cols-2 gap-8 text-xl text-gray-700 font-medium">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2.5 flex-shrink-0" />
                    <span>Execution & Trading Infrastructure Teams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2.5 flex-shrink-0" />
                    <span>Prop Firms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2.5 flex-shrink-0" />
                    <span>Market Makers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2.5 flex-shrink-0" />
                    <span>Systematic Desks</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Sign Up Form - Wider and Compact */}
            <FadeIn delay={300}>
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Sign Up
                </h3>
                <MailingListForm className="w-full max-w-none" />
              </div>
            </FadeIn>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default MailingList;
