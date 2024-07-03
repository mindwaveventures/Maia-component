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

// Custom hook to get a specific portion of the path from the URL
export function getPathSegments(segmentEndIndex: number) {
  const location = useLocation();
  const currentPath = location.pathname;
  const pathSegments = currentPath
    .split('/')
    .filter((segment) => segment !== '');

  // Check if the requested end index is within bounds
  if (segmentEndIndex >= 0 && segmentEndIndex < pathSegments.length) {
    // Join the segments up to the specified index
    return '/' + pathSegments.slice(0, segmentEndIndex + 1).join('/');
  }

  // If the index is out of bounds or invalid, return the entire path up to the maximum valid index
  if (segmentEndIndex >= pathSegments.length) {
    return '/' + pathSegments.join('/');
  }

  return null;
}
