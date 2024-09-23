import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check if the device width is more than 1024px (commonly a desktop width)
      setIsDesktop(window.innerWidth < 1024);
    };

    // Run the resize handler on initial render
    handleResize();

    // Add a resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {/* Show the message if it's a desktop screen */}
      {isDesktop && (
        <div style={{ backgroundColor: 'black', padding: '10px', textAlign: 'center' }}>
          This version is not fully optimized for Mobiles or Tablets. Please use a PC for a better experience.
        </div>
      )}
    </div>
  );
};

export default Footer;
