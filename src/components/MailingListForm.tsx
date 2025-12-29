import React, { useEffect } from 'react';

const MailingListForm = ({ className }: { className?: string }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://js-na3.hsforms.net/forms/embed/342842177.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={`w-full mx-auto relative min-h-[600px] ${className}`}>
      {/* Style injection to make the submit button black */}
      <style>{`
        .hs-button.primary {
          background-color: #000000 !important;
          border-color: #000000 !important;
          color: #ffffff !important;
          transition: all 0.2s ease;
          position: relative !important;
          z-index: 50 !important;
        }
        .hs-button.primary:hover {
          background-color: #333333 !important;
          border-color: #333333 !important;
        }
      `}</style>

      <div 
        className="hs-form-frame" 
        data-region="na3" 
        data-form-id="b172bd11-f844-419a-9613-f1d6a9b122df" 
        data-portal-id="342842177"
      ></div>

      {/* HubSpot Logo Blocker - Gray box at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gray-50 z-20 pointer-events-auto" />
    </div>
  );
};

export default MailingListForm;
