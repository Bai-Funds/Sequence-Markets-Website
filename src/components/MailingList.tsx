import React from 'react';
import MailingListForm from './MailingListForm';

const MailingList = () => {
  return (
    <section className="w-full py-20 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Join Our Mailing List
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Stay updated with the latest news and announcements.
          </p>
          
          <MailingListForm />
        </div>
      </div>
      
      {/* Background elements to match the theme */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-[100px] animate-pulse delay-1000" />
      </div>
    </section>
  );
};

export default MailingList;
