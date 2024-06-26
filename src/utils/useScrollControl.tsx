import { useEffect, useState } from 'react';

const useScrollControl = () => {
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    let prevScrollY = window.scrollY;
    let ticking = false;
    let scrollTimeout: number | undefined;

    const handleScroll = () => {
      if (!ticking) {
        if (scrollTimeout !== undefined) {
          clearTimeout(scrollTimeout);
        }

        scrollTimeout = window.setTimeout(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > prevScrollY) {
            // Scrolling down
            if (showMenu) {
              setShowMenu(false);
            }
          } else if (currentScrollY < prevScrollY) {
            // Scrolling up
            if (!showMenu) {
              setShowMenu(true);
            }
          }

          // Add logic to check if user has scrolled to the bottom or top
          const isAtBottom =
            currentScrollY + window.innerHeight >=
            document.documentElement.scrollHeight;
          const isAtTop = currentScrollY === 0;

          if (isAtTop) {
            setShowMenu(true); // Show the menu at the top
          }

          if (isAtBottom) {
            setShowMenu(false);
          }

          prevScrollY = currentScrollY;
          ticking = false;
        }, 200);

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showMenu]);

  return showMenu;
};

export default useScrollControl;
