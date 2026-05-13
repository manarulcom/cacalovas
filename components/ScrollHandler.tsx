'use client';
import { useEffect } from 'react';

export default function ScrollHandler() {
  useEffect(() => {
    const targetId = sessionStorage.getItem('scrollTarget');
    if (targetId) {
      // Small delay to ensure the page has rendered its sections
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Clean up
        sessionStorage.removeItem('scrollTarget');
      }, 100);
    }
  }, []);

  return null;
}
