import { RefObject, useEffect } from 'react';

const useOutsideClick = (ref: RefObject<HTMLElement>, handler: () => void) => {
  useEffect(() => {
    const listener = (event: Event) => {
      // If the click is inside the element, return without doing anything
      if (ref.current && ref.current.contains(event.target as Node)) {
        return;
      }
      // Otherwise, execute the handler function
      handler();
    };

    // Attach the listener to the document
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      // Cleanup the listeners when the component is unmounted or the ref/handler changes
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]); // Only re-run if ref or handler changes
};

export default useOutsideClick;
