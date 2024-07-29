import { useEffect, useState } from 'react';
import DesktopHeader from './layout/header/DesktopHeader';
import MobileHeader from './layout/header/MobileHeader';

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div>
      {windowWidth > 768 && <DesktopHeader />}
      {windowWidth <= 768 && <MobileHeader />}
    </div>
  );
}

export default Header;
