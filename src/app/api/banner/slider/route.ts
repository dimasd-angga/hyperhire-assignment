import { NextResponse } from 'next/server';
import { sliderList } from '@/configs/banner-area-data';

export async function GET() {
  return NextResponse.json(sliderList);
}
