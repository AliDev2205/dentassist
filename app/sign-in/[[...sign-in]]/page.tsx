import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-4xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
            Bienvenue
          </h2>
          <p className="text-lg text-slate-600">
            Connectez-vous à votre compte DentAssist
          </p>
        </div>

        {/* SignIn Component Container */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8">
          <SignIn 
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "bg-transparent shadow-none",
                header: "hidden",
                socialButtonsBlockButton: 
                  "border border-slate-200 bg-white/50 hover:bg-white/80 text-slate-700 font-medium rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-md",
                socialButtonsBlockButtonText: "text-slate-700",
                dividerLine: "bg-slate-200",
                dividerText: "text-slate-500 bg-white/80",
                formFieldLabel: "text-slate-700 font-medium",
                formFieldInput: 
                  "border border-slate-200 bg-white/50 rounded-xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-200",
                formButtonPrimary:
                  "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
                footer: "hidden",
                identityPreviewEditButton: 
                  "text-cyan-600 hover:text-cyan-700 transition-colors duration-200",
                formResendCodeLink:
                  "text-cyan-600 hover:text-cyan-700 transition-colors duration-200",
                alert: "bg-amber-50 border-amber-200 text-amber-800 rounded-xl",
                headerSubtitle: "text-slate-600",
                formFieldAction: "text-cyan-600 hover:text-cyan-700 transition-colors duration-200"
              },
              variables: {
                colorPrimary: '#06b6d4',
                colorBackground: 'transparent',
                colorText: '#1e293b',
                colorTextSecondary: '#64748b',
                colorInputBackground: 'rgba(255, 255, 255, 0.5)',
                colorInputText: '#1e293b',
              }
            }}
          />
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-slate-500">
            En vous connectant, vous acceptez nos{" "}
            <a href="#" className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors duration-200">
              conditions d'utilisation
            </a>{" "}
            et notre{" "}
            <a href="#" className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors duration-200">
              politique de confidentialité
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}