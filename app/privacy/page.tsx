import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-xl text-slate-600">
              Comment nous protégeons et utilisons vos données personnelles
            </p>
          </div>

          <div className="space-y-12 text-slate-700 leading-relaxed">
            <section className="group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-shield-halved text-white text-xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Collecte des données</h2>
                  <p className="mb-4">Nous collectons les données suivantes :</p>
                  <ul className="space-y-3">
                    {[
                      "Nom et prénom",
                      "Adresse email",
                      "Numéro de téléphone",
                      "Informations de santé dentaire (avec votre consentement)",
                      "Historique des rendez-vous"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-bolt text-white text-xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Utilisation des données</h2>
                  <p className="mb-4">Vos données sont utilisées pour :</p>
                  <ul className="space-y-3">
                    {[
                      "Gérer vos rendez-vous dentaires",
                      "Vous fournir des conseils personnalisés",
                      "Améliorer nos services",
                      "Vous envoyer des rappels et notifications"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-users text-white text-xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Partage des données</h2>
                  <p className="mb-4">Nous ne partageons vos données qu'avec :</p>
                  <ul className="space-y-3">
                    {[
                      "Les dentistes partenaires (uniquement pour vos rendez-vous)",
                      "Nos prestataires techniques (hébergement, email)",
                      "Les autorités légales (sur demande officielle)"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-violet-500 rounded-full flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-user-gear text-white text-xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Vos droits</h2>
                  <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Droit d'accès à vos données",
                      "Droit de rectification",
                      "Droit à l'effacement",
                      "Droit à la portabilité",
                      "Droit d'opposition"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-4 border border-amber-200/50">
                    <p className="text-amber-800 font-medium">
                      Pour exercer ces droits, contactez-nous à :{" "}
                      <span className="text-cyan-600">privacy@dentassist.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-lock text-white text-xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Sécurité</h2>
                  <p>Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.</p>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-clock-rotate-left text-white text-xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Conservation</h2>
                  <p>Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles sont collectées, et conformément aux obligations légales.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-slate-200/50">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium transition-colors duration-200"
            >
              <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform duration-200"></i>
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}