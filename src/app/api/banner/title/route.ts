import { NextResponse } from 'next/server';
import { bannerTitle } from '@/configs/banner-area-data';

export async function GET() {
  return NextResponse.json(bannerTitle);
}
