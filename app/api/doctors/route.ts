import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const doctors = await prisma.doctor.findMany({
      select: {
        id: true,
        name: true,
        specialization: true,
        bio: true,
        availability: true,
        image: true,
      },
      orderBy: {
        name: 'asc'
      }
    });

    return NextResponse.json(doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des docteurs' },
      { status: 500 }
    );
  }
}