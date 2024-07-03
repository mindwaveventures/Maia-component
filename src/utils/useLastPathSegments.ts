import { useLocation } from 'react-router-dom';

// Custom hook to get the last two path segments from the URL, removing UUID if present
export function useLastTwoPathSegments() {
  const location = useLocation();
  const currentPath = location.pathname;
  const pathSegments = currentPath
    .split('/')
    .filter((segment) => segment !== '');

  // Function to check if a segment is a UUID
  const isUUID = (segment: any) => {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidRegex.test(segment);
  };

  // Remove UUIDs from the path segments
  const cleanedSegments = pathSegments.filter((segment) => !isUUID(segment));

  // Get the last two segments
  const lastTwoSegments = cleanedSegments.slice(-2);

  // Concatenate the last two segments into a single string
  const concatenatedSegments = lastTwoSegments
    .map((segment) => segment.replace(/[^a-zA-Z0-9]/g, ''))
    .join('');

  return concatenatedSegments;
}
