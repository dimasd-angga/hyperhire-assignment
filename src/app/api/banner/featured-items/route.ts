import { NextResponse } from 'next/server';
import { featuredItemList } from '@/configs/banner-area-data';

export async function GET() {
  return NextResponse.json(featuredItemList);
}
