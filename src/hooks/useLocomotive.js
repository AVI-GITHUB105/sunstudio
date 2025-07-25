import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function useLocomotive() {
  useEffect(() => {
    const scrollEl = document.querySelector('[data-scroll-container]');
    
    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
    });

    // Cleanup
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
}