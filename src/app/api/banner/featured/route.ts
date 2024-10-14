import { NextResponse } from 'next/server';
import { featuredList } from '@/configs/banner-area-data';

export async function GET() {
  return NextResponse.json(featuredList);
}
