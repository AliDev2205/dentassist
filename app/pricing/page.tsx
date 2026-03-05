import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

export default function PricingPage() {
  const plans = [
    {
      name: "Découverte",
      price: "Gratuit",
      description: "Parfait pour découvrir nos services",
      features: [
        "Assistant IA basique",
        "Recherche de dentistes",
        "1 rendez-vous/mois",
        "Support par email",
        "Accès aux articles dentaires"
      ],
      buttonText: "Commencer gratuitement",
      popular: false,
      href: "/sign-in"
    },
    {
      name: "Standard",
      price: "19€",
      period: "/mois",
      description: "Idéal pour les soins réguliers",
      features: [
        "Assistant IA complet",
        "Rendez-vous illimités",
        "Rappels SMS",
        "Support prioritaire",
        "Carnet de santé numérique",
        "Historique des consultations"
      ],
      buttonText: "Essayer gratuitement",
      popular: true,
      href: "/sign-in"
    },
    {
      name: "Premium",
      price: "39€",
      period: "/mois",
      description: "Pour une santé dentaire optimale",
      features: [
        "Tout inclus dans Standard",
        "Assistant vocal avancé",
        "Urgences 24/7",
        "Conseil personnalisé",
        "Analyse IA des symptômes",
        "Rapports santé mensuels",
        "Accès famille (4 personnes)"
      ],
      buttonText: "Contactez-nous",
      popular: false,
      href: "/sign-in"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center bg-slate-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg/pricing-bg.png"
            alt="Pricing Background"
            fill
            className="object-cover opacity-60"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/60"></div>
        </div>

        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 py-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
            Des soins dentaires
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              accessibles à tous
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Choisissez la formule qui correspond à vos besoins.
            Commencez gratuitement et évoluez selon vos besoins.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`group relative ${plan.popular
                  ? 'md:scale-105 z-10'
                  : 'hover:scale-105'
                  } transition-all duration-500`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Plus populaire
                    </span>
                  </div>
                )}

                <div className={`relative h-full bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border ${plan.popular
                  ? 'border-cyan-200/50'
                  : 'border-white/20 group-hover:border-cyan-200/50'
                  } p-8 transition-all duration-300 group-hover:shadow-3xl`}>

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center mb-3">
                      <span className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-slate-500 ml-2 text-lg">{plan.period}</span>
                      )}
                    </div>
                    <p className="text-slate-600 text-lg">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.href}
                    className={`block w-full py-4 px-6 rounded-2xl text-center font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 hover:scale-105'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200 hover:scale-105'
                      }`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur nos formules
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Puis-je changer de formule à tout moment ?",
                answer: "Oui, vous pouvez passer à une formule supérieure à tout moment. Le changement vers une formule inférieure est possible en fin de mois."
              },
              {
                question: "Y a-t-il un engagement ?",
                answer: "Aucun engagement. Vous pouvez résilier votre abonnement à tout moment."
              },
              {
                question: "L'assistant IA remplace-t-il un dentiste ?",
                answer: "Non, notre assistant IA est un outil d'information et de conseil. Il ne remplace pas une consultation chez un dentiste professionnel."
              },
              {
                question: "Comment fonctionne l'essai gratuit ?",
                answer: "L'essai gratuit de 14 jours vous donne accès à toutes les fonctionnalités de la formule Standard. Aucune carte bancaire n'est requise."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 p-6"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed pl-11">
                  {faq.answer}
                </p>
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
            Prêt à prendre soin de votre sourire ?
          </h2>
          <p className="text-xl text-cyan-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Rejoignez des milliers de patients qui font confiance à DentAssist pour leur santé dentaire
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
              href="/about"
              className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                En savoir plus
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}