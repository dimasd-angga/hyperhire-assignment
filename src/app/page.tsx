import React, { Suspense } from 'react';
import Layout from '@/app/components/templates/Layout';
import BannerArea from '@/app/components/organisms/home-banner/BannerArea';
import BannerDescription from '@/app/components/molecules/home-banner/BannerDescription';
import BannerFeaturedText from '@/app/components/molecules/home-banner/BannerFeaturedText';
import Slider from '@/app/components/molecules/home-banner/BannerSlider';
import BannerFeaturedItem from '@/app/components/molecules/home-banner/BannerFeaturedItem';
import BannerFeaturedItemCheck from '@/app/components/molecules/home-banner/BannerFeaturedItemCheck';

async function fetchData(endpoint: string) {
  const res = await fetch(`/api/banner/${endpoint}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint} data`);
  }

  return res.json();
}

async function BannerTitle() {
  const data = await fetchData('title');
  return <BannerDescription title={data.title} description={data.description} />;
}

async function FeaturedList() {
  const data = await fetchData('featured');
  return <BannerFeaturedText featuredTexts={data} />;
}

async function SliderList() {
  const data = await fetchData('slider');
  return <Slider slides={data} />;
}

async function FeaturedItems() {
  const data = await fetchData('featured-items');
  return <BannerFeaturedItem featuredItems={data} />;
}

async function FeaturedItemChecks() {
  const data = await fetchData('featured-item-checklist');
  return <BannerFeaturedItemCheck featureItemChecks={data} />;
}

export default function Home() {
  return (
    <Layout>
      <BannerArea
        bannerTitle={
          <Suspense>
            <BannerTitle />
          </Suspense>
        }
        featuredList={
          <Suspense>
            <FeaturedList />
          </Suspense>
        }
        sliderList={
          <Suspense>
            <SliderList />
          </Suspense>
        }
        featuredItemList={
          <Suspense>
            <FeaturedItems />
          </Suspense>
        }
        featuredItemCheckList={
          <Suspense>
            <FeaturedItemChecks />
          </Suspense>
        }
      />
    </Layout>
  );
}
