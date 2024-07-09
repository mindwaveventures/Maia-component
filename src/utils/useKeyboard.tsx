import { useEffect } from 'react';

const useKeyboard = (state: (status: boolean) => void) => {
  useEffect(() => {
    function escHandler(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        // console.log('Escape key pressed')
        state(false);
      }
    }

    document.addEventListener('keyup', escHandler);

    return () => {
      document.removeEventListener('keyup', escHandler);
    };
  }, [state]);
};

export default useKeyboard;
