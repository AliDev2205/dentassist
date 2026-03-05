import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import VoiceAssistant from '@/components/VoiceAssistant';

export default async function DashboardPage() {
  const { userId } = await auth();

  // Si l'utilisateur n'est pas connecté, on le redirige vers la page de connexion
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100">
      <Navbar />

      <div className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Header du Dashboard */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              Tableau de bord
            </h1>
            <p className="text-xl text-slate-600">
              Bienvenue sur votre espace personnel DentAssist
            </p>
          </div>

          {/* Cartes principales */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Link
              href="/dashboard/doctors"
              className="group bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-calendar-check text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-3">Prendre un rendez-vous</h3>
                  <p className="text-slate-600 leading-relaxed">Trouvez un dentiste et réservez en ligne en quelques clics</p>
                </div>
              </div>
              <div className="mt-6 flex items-center text-cyan-600 font-medium group-hover:translate-x-2 transition-transform duration-200">
                Commencer
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </div>
            </Link>

            <Link
              href="/dashboard/assistant"
              className="group bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-robot text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-3">Assistant IA</h3>
                  <p className="text-slate-600 leading-relaxed">Posez vos questions sur la santé dentaire et obtenez des réponses instantanées</p>
                </div>
              </div>
              <div className="mt-6 flex items-center text-emerald-600 font-medium group-hover:translate-x-2 transition-transform duration-200">
                Consulter
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </div>
            </Link>
          </div>

          {/* Section rendez-vous */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-slate-800">Vos prochains rendez-vous</h3>
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-calendar-alt text-white text-xs"></i>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <i className="fa-solid fa-clock text-cyan-600 text-xl"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Aucun rendez-vous à venir</p>
                    <p className="text-sm text-slate-600 mt-1">Prenez votre premier rendez-vous !</p>
                  </div>
                </div>
                <Link
                  href="/dashboard/doctors"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
                >
                  Réserver
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VoiceAssistant />
    </div>
  );
}