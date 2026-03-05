import Navbar from '@/components/Navbar';

export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-12">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl animate-pulse"></div>
            <div className="text-center">
              <h2 className="text-2xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
                Chargement...
              </h2>
              <p className="text-slate-600">
                Préparation de votre tableau de bord
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}