// components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame to ensure this runs after the browser's next repaint
    const scrollToTop = () => {
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
    };

    // Small delay to ensure the page has started rendering
    const timer = setTimeout(scrollToTop, 0);
    return () => clearTimeout(timer);
  }, [location]);

  return null;
}