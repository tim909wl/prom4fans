'use client';

import { useId } from 'react';

const pathD = 'M80,560 L80,440 L320,440 L320,350 L560,350 L560,260 L800,260 L800,170 L1080,170';
const pathLength = 1420;

export function GrowthBackdrop({ visible }: { visible: boolean }) {
  const gradientId = useId();

  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 640"
      preserveAspectRatio="xMidYMax slice"
      className="pointer-events-none absolute inset-0 h-full w-full translate-x-0 md:translate-x-16"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#6c35ed" />
          <stop offset="100%" stopColor="#d6fa43" />
        </linearGradient>
      </defs>
      <path
        d={pathD}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.3}
        style={{
          strokeDasharray: pathLength,
          strokeDashoffset: visible ? 0 : pathLength,
          transition: 'stroke-dashoffset 1.8s ease-out',
        }}
      />
    </svg>
  );
}
