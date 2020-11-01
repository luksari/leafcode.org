export function useWindowLocation() {
  const isClient = typeof window === 'object';

  return isClient && window.location;
}
