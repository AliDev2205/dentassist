import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const team = [
    {
      name: "Dr. Sophie Martin",
      role: "Directrice Médicale",
      description: "15 ans d'expérience en orthodontie, passionnée par l'innovation digitale en santé dentaire.",
      expertise: "Orthodontie, Innovation Digitale",
      icon: "fa-solid fa-user-doctor"
    },
    {
      name: "Pierre Dubois",
      role: "CEO & Fondateur",
      description: "Entrepreneur dans la santé tech avec une vision : rendre les soins dentaires accessibles à tous.",
      expertise: "Stratégie, Développement Business",
      icon: "fa-solid fa-user-tie"
    },
    {
      name: "Marie Laurent",
      role: "Responsable Technologie",
      description: "Ingénieure en informatique spécialisée dans les solutions santé et l'expérience utilisateur.",
      expertise: "Développement, IA, UX/UI",
      icon: "fa-solid fa-user-gear"
    }
  ];

  const values = [
    {
      icon: "fa-solid fa-shield-halved text-cyan-500",
      title: "Confidentialité",
      description: "Vos données de santé sont protégées et cryptées selon les normes les plus strictes."
    },
    {
      icon: "fa-solid fa-bullseye text-blue-500",
      title: "Précision",
      description: "Notre assistant IA fournit des informations vérifiées par des professionnels dentaires."
    },
    {
      icon: "fa-solid fa-heart-pulse text-emerald-500",
      title: "Empathie",
      description: "Nous comprenons que la santé dentaire peut être source de stress, nous sommes là pour vous accompagner."
    },
    {
      icon: "fa-solid fa-microchip text-indigo-500",
      title: "Innovation",
      description: "Nous utilisons les dernières technologies pour améliorer votre expérience de soins."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-slate-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg/about-bg.png"
            alt="About Background"
            fill
            className="object-cover opacity-60"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/60"></div>
        </div>

        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
              Révolutionner les
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                soins dentaires
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed font-medium">
              Chez DentAssist, nous croyons que prendre soin de votre sourire devrait être
              simple, accessible et sans stress. Nous combinons expertise médicale et
              technologie de pointe pour vous offrir la meilleure expérience.
            </p>
          </div>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-24 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent mb-8">
                Notre histoire
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Fondé en 2024, DentAssist est né d'un constat simple : prendre rendez-vous
                  chez le dentiste est souvent compliqué, stressant et chronophage.
                </p>
                <p>
                  Notre équipe, composée de dentistes expérimentés et d'experts en technologie,
                  s'est donnée pour mission de simplifier l'accès aux soins dentaires grâce
                  à l'intelligence artificielle.
                </p>
                <p>
                  Aujourd'hui, DentAssist aide des milliers de patients à trouver les bons
                  professionnels, à obtenir des réponses à leurs questions et à prendre
                  rendez-vous en quelques clics.
                </p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8">
              <h3 className="text-3xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent mb-8">
                Nos chiffres
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                    50+
                  </div>
                  <div className="text-slate-600 font-medium">Dentistes partenaires</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                    5k+
                  </div>
                  <div className="text-slate-600 font-medium">Patients satisfaits</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                    24/7
                  </div>
                  <div className="text-slate-600 font-medium">Assistant IA disponible</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                    98%
                  </div>
                  <div className="text-slate-600 font-medium">De satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              Nos valeurs
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Les principes qui guident chaque décision que nous prenons
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20"
              >
                <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center text-4xl mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <i className={value.icon}></i>
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre équipe */}
      <section className="py-24 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              Notre équipe
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Des experts passionnés réunis pour transformer votre expérience dentaire
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <i className={member.icon}></i>
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-3">{member.name}</h3>
                <p className="text-cyan-600 font-semibold mb-4">{member.role}</p>
                <p className="text-slate-600 mb-6 leading-relaxed">{member.description}</p>
                <p className="text-sm text-slate-500 font-medium">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-cyan-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Rejoignez l'aventure DentAssist
          </h2>
          <p className="text-xl text-cyan-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Prenez le contrôle de votre santé dentaire dès aujourd'hui avec notre plateforme innovante
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-in"
              className="group bg-white text-cyan-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:bg-slate-50"
            >
              <span className="flex items-center gap-2">
                Commencer maintenant
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </span>
            </Link>
            <Link
              href="/pricing"
              className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Voir nos tarifs
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}