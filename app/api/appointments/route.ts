import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth, currentUser } from '@clerk/nextjs/server';

export async function POST(request: Request) {
  try {
    const { userId: clerkUserId } = await auth();
    const user = await currentUser();
    
    if (!clerkUserId || !user) {
      return NextResponse.json(
        { error: 'Non authentifié' },
        { status: 401 }
      );
    }
    
    // Vérifier si l'utilisateur existe, sinon le créer
    let dbUser = await prisma.user.findUnique({
      where: { id: clerkUserId }
    });
    
    if (!dbUser) {
      // Créer l'utilisateur s'il n'existe pas
      dbUser = await prisma.user.create({
        data: {
          id: clerkUserId,
          email: user.emailAddresses[0].emailAddress,
          name: `${user.firstName} ${user.lastName}`.trim() || 'Utilisateur',
          role: 'patient'
        }
      });
    }

    const { doctorId, date } = await request.json();

    // Crée le rendez-vous
    const appointment = await prisma.appointment.create({
      data: {
        date: new Date(date),
        userId: dbUser.id,
        doctorId: doctorId,
        status: 'pending',
      },
      include: {
        doctor: {
          select: {
            name: true,
            specialization: true,
          }
        }
      }
    });

    return NextResponse.json(appointment);
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création du rendez-vous' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Non authentifié' },
        { status: 401 }
      );
    }

    // Récupère les rendez-vous de l'utilisateur
    const appointments = await prisma.appointment.findMany({
      where: {
        userId: userId,
      },
      include: {
        doctor: {
          select: {
            name: true,
            specialization: true,
          }
        }
      },
      orderBy: {
        date: 'asc'
      }
    });

    return NextResponse.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des rendez-vous' },
      { status: 500 }
    );
  }
}