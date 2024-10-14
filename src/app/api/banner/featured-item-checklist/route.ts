import { NextResponse } from 'next/server';
import { featuredItemCheckList } from '@/configs/banner-area-data';

export async function GET() {
  return NextResponse.json(featuredItemCheckList);
}