'use client';

import { throttle } from '@/util/throttle';
import { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [width, setWidth] = useState(0);

  const handleScroll = throttle((): void => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop === 0) return setWidth(0);
    const windowHeight = scrollHeight - clientHeight;
    const currentPercent = scrollTop / windowHeight;
    setWidth(currentPercent * 100);
  }, 200);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='sticky w-full top-12 md:top-14 h-3 z-10 bg-slate border-slate'>
      <div
        style={{ width: width + '%' }}
        className='transition-all h-full rounded-r-md px-1 bg-indigo text-[10px] text-white'
      >
        {width.toFixed()}%
      </div>
    </div>
  );
}
