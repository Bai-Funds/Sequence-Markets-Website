import React, { useEffect, useRef, useState } from 'react';

const MailingListForm = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [blockerTop, setBlockerTop] = useState<number | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://js-na3.hsforms.net/forms/embed/342842177.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Watch for iframe changes and position the blocker
  useEffect(() => {
    const updateBlockerPosition = () => {
      if (!containerRef.current) return;
      
      const iframe = containerRef.current.querySelector('iframe');
      if (iframe) {
        // Get the iframe's bounding rect relative to the container
        const iframeRect = iframe.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        
        // Position the blocker at the bottom of the iframe
        const iframeBottom = iframeRect.bottom - containerRect.top;
        setBlockerTop(iframeBottom - 55); // 55px from the bottom of the iframe
      }
    };

    // Set up a MutationObserver to watch for DOM changes
    const observer = new MutationObserver(() => {
      updateBlockerPosition();
    });

    // Also set up an interval to catch iframe height changes
    const interval = setInterval(updateBlockerPosition, 500);

    if (containerRef.current) {
      observer.observe(containerRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    }

    // Initial position update after a delay to let HubSpot load
    setTimeout(updateBlockerPosition, 1000);
    setTimeout(updateBlockerPosition, 2000);
    setTimeout(updateBlockerPosition, 3000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div ref={containerRef} className={`w-full mx-auto relative min-h-[600px] ${className}`}>
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

      {/* HubSpot Logo Blocker - Dynamically positioned to cover the promo link */}
      {blockerTop !== null && (
        <div 
          className="absolute left-0 w-full z-[9999] pointer-events-auto"
          style={{ 
            top: `${blockerTop}px`,
            height: '60px',
            backgroundColor: '#f8f9fa',
          }}
        />
      )}
    </div>
  );
};

export default MailingListForm;

