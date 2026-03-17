import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => (
  <svg width="116" height="36" viewBox="0 0 116 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M15.5 18L5.5 28L15.5 28L15.5 18Z" fill="white"/>
    <path d="M25.5 18L15.5 28L25.5 28L25.5 18Z" fill="white"/>
    <path d="M15.5 8L5.5 18L15.5 18L15.5 8Z" fill="white"/>
    <path d="M25.5 8L15.5 18L25.5 18L25.5 8Z" fill="white"/>
    <text x="35" y="24" fill="white" fontSize="20" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">VIKTORY</text>
  </svg>
);
