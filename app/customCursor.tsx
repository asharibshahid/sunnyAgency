// components/CustomCursor.tsx
'use client';

import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.onclick !== null
      );
    };

    const mouseLeave = () => setIsHidden(true);
    const mouseEnter = () => setIsHidden(false);

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseleave', mouseLeave);
    document.addEventListener('mouseenter', mouseEnter);

    return () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseleave', mouseLeave);
      document.removeEventListener('mouseenter', mouseEnter);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Main Cursor */}
      <div
        className={`fixed top-0 left-0 z-[100] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out ${
          isPointer ? 'scale-150' : 'scale-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div
          className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
            isPointer 
              ? 'bg-blue-500/20 border-blue-400 scale-150' 
              : 'bg-transparent border-white scale-100'
          }`}
        />
      </div>

      {/* Cursor Follower */}
      <div
        className="fixed top-0 left-0 z-[99] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div
          className={`w-12 h-12 rounded-full transition-all duration-500 ${
            isPointer 
              ? 'bg-blue-400/10 scale-0' 
              : 'bg-white/5 scale-100'
          }`}
        />
      </div>

      {/* Cursor Trail */}
      <div
        className="fixed top-0 left-0 z-[98] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div className="w-16 h-16 rounded-full bg-white/3" />
      </div>
    </>
  );
};

export default CustomCursor;