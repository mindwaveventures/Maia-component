import { useLocation } from 'react-router-dom';

// Custom hook to get the last two path segments from the URL
export function useLastTwoPathSegments() {
  const location = useLocation();
  const currentPath = location.pathname;
  const pathSegments = currentPath
    .split('/')
    .filter((segment) => segment !== '');

  // Get the last two path segments and clean them
  const lastTwoSegments = pathSegments
    .slice(-2)
    .map((segment) => segment.replace(/[^a-zA-Z0-9]/g, ''))
    .join('');

  return lastTwoSegments;
}
