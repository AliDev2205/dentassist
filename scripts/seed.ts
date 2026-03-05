const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Début du seeding...');

  // Nettoie la base d'abord
  await prisma.appointment.deleteMany();
  await prisma.doctor.deleteMany();
  await prisma.user.deleteMany();

  // Créer des docteurs avec les mêmes données que ton frontend
  await prisma.doctor.createMany({
    data: [
      {
        id: "1",
        name: "Dr. Léa Diallo",
        email: "lea.diallo@dentassist.com",
        specialization: "Orthodontiste",
        bio: "Spécialiste en orthodontie invisible avec 8 ans d'expérience. Passionnée par l'esthétique du sourire.",
        availability: true,
        image: "/doctors/dr-lea-diallo.jpeg"
      },
      {
        id: "2", 
        name: "Dr. Kwame Johnson",
        email: "kwame.johnson@dentassist.com",
        specialization: "Chirurgien-Dentiste",
        bio: "Expert en implantologie et chirurgie buccale. Membre de l'Académie dentaire internationale.",
        availability: true,
        image: "/doctors/dr-kwame-johnson.jpeg"
      },
      {
        id: "3",
        name: "Dr. Fatoumata Bâ",
        email: "fatoumata.ba@dentassist.com",
        specialization: "Pédodontiste",
        bio: "Spécialiste des soins dentaires pour enfants. Approche douce et adaptée aux plus jeunes.",
        availability: false,
        image: "/doctors/dr-fatoumata-ba.jpeg"
      },
      {
        id: "4",
        name: "Dr. Malik Sow",
        email: "malik.sow@dentassist.com",
        specialization: "Parodontiste",
        bio: "Expert en traitement des gencives et maladies parodontales. Praticien reconnu pour sa minutie.",
        availability: true,
        image: "/doctors/dr-malik-sow.jpeg"
      },
      {
        id: "5",
        name: "Dr. Aïsha Traoré",
        email: "aisha.traore@dentassist.com",
        specialization: "Esthétique Dentaire",
        bio: "Spécialiste en blanchiment et facettes dentaires. Transforme les sourires avec passion.",
        availability: true,
        image: "/doctors/dr-aisha-traore.jpeg"
      },
      {
        id: "6",
        name: "Dr. Jean-Luc Mvoubou",
        email: "jeanluc.mvoubou@dentassist.com",
        specialization: "Endodontiste",
        bio: "Expert en traitements de racines et soins endodontiques complexes.",
        availability: true,
        image: "/doctors/dr-jean-luc-mvoubou.jpeg"
      }
    ],
  });

  console.log('✅ Docteurs créés avec succès !');
}

main()
  .catch((e) => {
    console.error('❌ Erreur:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });