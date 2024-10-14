// types.ts
export interface BannerTitle {
    title: string;
    description: string;
}

export interface FeaturedItem {
    title: string;
    description?: string; // optional if not all items have descriptions
}

export interface SliderItem {
    id: number;
    image: string;
    name: string;
    description: string;
    years: string;
    skillsets: string[];
}

export interface FeaturedItemWithImage {
    image: string;
    title: string;
}

export interface FeaturedItemCheck {
    title: string;
}

// New interface for the complete banner data structure
export interface BannerData {
    bannerTitle: BannerTitle;
    featuredList: FeaturedItem[];
    sliderList: SliderItem[];
    featuredItemList: FeaturedItemWithImage[];
    featuredItemCheckList: FeaturedItemCheck[];
}
