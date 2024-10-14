'use client';

import React, { useEffect, useState } from 'react';
import Paragraph from '@/app/components/atoms/commons/Paragraph';
import { FeaturedItem } from '@/configs/types';

interface BannerFeaturedTextProps {
  featuredTexts: FeaturedItem[];
}

const BannerFeaturedText: React.FC<BannerFeaturedTextProps> = ({ featuredTexts }) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);

  useEffect(() => {
    // Reset visibility when lists change
    setVisibleItems(Array(featuredTexts.length).fill(false));

    // Fade in items one by one
    featuredTexts.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => {
          const newVisibleItems = [...prev];
          newVisibleItems[index] = true; // Set the current index to true
          return newVisibleItems;
        });
      }, index * 500); // 500ms delay per item
    });
  }, [featuredTexts]);

  return (
    <div className="flex justify-between mt-5">
      {featuredTexts.map((item, index) => (
        <div
          key={index}
          className={`border-t border-white w-[160px] transition-opacity duration-500 ${visibleItems[index] ? 'opacity-100' : 'opacity-0'}`}>
          <Paragraph className="text-md font-bold text-white text-left my-2">{item.title}</Paragraph>
          <Paragraph className="text-md font-bold text-white text-left my-2">{item.description}</Paragraph>
        </div>
      ))}
    </div>
  );
};

export default BannerFeaturedText;
