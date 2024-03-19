import React from 'react';
import NavigationBar from './NavigationBar';

const Header = () => {
  return (
    <header>
      <div className="portrait">
        {/* Your portrait image */}
      </div>
      <div className="social-links">
        {/* Social links */}
      </div>
      <NavigationBar />
    </header>
  );
}

export default Header;