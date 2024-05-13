import { useLocation } from 'react-router-dom';

// Custom hook to get a specific path segment from the URL
export function usePathSegments(segmentIndex: number) {
  const location = useLocation();
  const currentPath = location.pathname;
  const pathSegments = currentPath
    .split('/')
    .filter((segment) => segment !== '');

  // Check if the requested segment index is within bounds
  if (segmentIndex >= 0 && segmentIndex < pathSegments.length) {
    return pathSegments[segmentIndex];
  }

  return null;
}
