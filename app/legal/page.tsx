import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              Mentions Légales
            </h1>
            <p className="text-xl text-slate-600">
              Informations légales et conditions d'utilisation de DentAssist
            </p>
          </div>

          <div className="space-y-12 text-slate-700 leading-relaxed">
            <section className="group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-building text-white text-xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Informations générales</h2>
                  <div className="space-y-3">
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-slate-800 min-w-32">Nom de l'entreprise :</span>
                      <span>DentAssist SAS</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-slate-800 min-w-32">Adresse :</span>
                      <span>123 Avenue des Dentistes, 75000 Paris</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-slate-800 min-w-32">Email :</span>
                      <span className="text-cyan-600">contact@dentassist.com</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-slate-800 min-w-32">Téléphone :</span>
                      <span>01 23 45 67 89</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-slate-800 min-w-32">Capital social :</span>
                      <span>10 000 €</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-slate-800 min-w-32">RCS :</span>
                      <span>Paris B 123 456 789</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-slate-800 min-w-32">Numéro TVA :</span>
                      <span>FR 12 123456789</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-server text-white text-xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Hébergement</h2>
                  <p className="mb-4">Notre site est hébergé par :</p>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                    <p className="font-semibold text-slate-800 mb-2">Vercel Inc.</p>
                    <p className="text-slate-600">340 S Lemon Ave #4133</p>
                    <p className="text-slate-600">Walnut, CA 91789</p>
                    <p className="text-slate-600">United States</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-copyright text-white text-xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Propriété intellectuelle</h2>
                  <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-user-shield text-white text-xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Protection des données personnelles</h2>
                  <p>Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité des données vous concernant.</p>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-cookie-bite text-white text-xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Cookies</h2>
                  <p>Notre site utilise des cookies pour améliorer l'expérience utilisateur. En naviguant sur notre site, vous acceptez l'utilisation des cookies.</p>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-triangle-exclamation text-white text-xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Responsabilité</h2>
                  <p>Les informations contenues sur ce site sont aussi précises que possible. Cependant, DentAssist ne peut être tenue responsable des omissions, inexactitudes et carences dans la mise à jour.</p>
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