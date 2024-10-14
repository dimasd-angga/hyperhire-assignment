// app/components/organisms/home-banner/BannerArea.tsx
import React from 'react';
import ImageComponent from '@/app/components/atoms/commons/ImageComponent';
import BannerContent from '@/app/components/organisms/home-banner/BannerContent';
import { BannerData } from '@/configs/types';

interface BannerAreaProps {
  bannerTitle: React.ReactNode;
  featuredList: React.ReactNode;
  sliderList: React.ReactNode;
  featuredItemList: React.ReactNode;
  featuredItemCheckList: React.ReactNode;
}

const BannerArea: React.FC<BannerAreaProps> = ({
  bannerTitle,
  featuredList,
  sliderList,
  featuredItemList,
  featuredItemCheckList
}) => {
  return (
    <section className="p-4 relative md:pt-[150px] pt-[100px] pb-[100px] text-center overflow-hidden bg-gradient-to-r from-blue-400 to-green-400">
      <div className="absolute inset-0">
        <ImageComponent
          width={'100%'}
          height={'100%'}
          src="/images/banner-area-background.png"
          alt="Banner Background"
          className="object-cover brightness-75 saturate-200"
        />
      </div>
      <div className="absolute inset-0">
        <ImageComponent
          width={'100%'}
          height={'100%'}
          src="/images/banner-area-background.png"
          alt="Banner Background Blur"
          className="object-cover brightness-75 saturate-200 blur-md"
        />
      </div>
      <BannerContent
        bannerTitle={bannerTitle}
        featuredList={featuredList}
        sliderList={sliderList}
        featuredItemList={featuredItemList}
        featuredItemCheckList={featuredItemCheckList}
      />
    </section>
  );
};

export default BannerArea;