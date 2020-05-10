import { useEffect } from "react";

export function useWindowLocation() {
  const isClient = typeof window === 'object';
  
  useEffect(() => {
    if (!isClient) {
      return;
    }
    
  }, [window.location.href]); 
  
  return isClient && window.location;
}
