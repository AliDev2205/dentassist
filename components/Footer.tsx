import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center group">
                            <div className="w-20 h-20 flex items-center justify-center mr-2 transition-all duration-300 group-hover:scale-105">
                                <img
                                    src="/images/logo.png"
                                    alt="DentAssist Logo"
                                    className="w-full h-full object-contain mix-blend-multiply"
                                />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                                DentAssist
                            </span>
                        </Link>
                        <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                            Votre partenaire de confiance pour des soins dentaires accessibles et de qualité.
                        </p>
                        <div className="mt-6 flex space-x-4">
                            {/* Facebook */}
                            <a href="#" className="text-slate-400 hover:text-blue-500 transition-all duration-300 hover:scale-110">
                                <i className="fa-brands fa-facebook text-xl"></i>
                            </a>

                            {/* X (Twitter) */}
                            <a href="#" className="text-slate-400 hover:text-black transition-all duration-300 hover:scale-110">
                                <i className="fa-brands fa-x-twitter text-xl"></i>
                            </a>

                            {/* LinkedIn */}
                            <a href="#" className="text-slate-400 hover:text-blue-600 transition-all duration-300 hover:scale-110">
                                <i className="fa-brands fa-linkedin text-xl"></i>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/229XXXXXXXXX"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-green-500 transition-all duration-300 hover:scale-110"
                            >
                                <i className="fa-brands fa-whatsapp text-xl"></i>
                            </a>
                        </div>
                    </div>

                    {/* Liens rapides */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
                        <ul className="space-y-3">
                            {[
                                { href: "/", label: "Accueil", icon: "fa-solid fa-house" },
                                { href: "/about", label: "À propos", icon: "fa-solid fa-circle-info" },
                                { href: "/pricing", label: "Tarifs", icon: "fa-solid fa-tag" },
                                { href: "/contact", label: "Contact", icon: "fa-solid fa-envelope" },
                                { href: "/dashboard", label: "Tableau de bord", icon: "fa-solid fa-chart-line" }
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-slate-300 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group">
                                        <i className={`fa-solid ${item.icon} text-xs group-hover:scale-110 transition-transform duration-300`}></i>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
                        <ul className="space-y-3">
                            {[
                                { label: "Trouver un dentiste", icon: "fa-solid fa-magnifying-glass", href: "/dashboard/doctors" },
                                { label: "Prise de rendez-vous", icon: "fa-solid fa-calendar-check", href: "/dashboard/doctors" },
                                { label: "Assistant IA dentaire", icon: "fa-solid fa-robot", href: "/dashboard/assistant" },
                                { label: "Conseils santé", icon: "fa-solid fa-stethoscope", href: "/about" }
                            ].map((service) => (
                                <li key={service.label}>
                                    <Link href={service.href} className="text-slate-300 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group cursor-pointer">
                                        <i className={`fa-solid ${service.icon} text-xs group-hover:scale-110 transition-transform duration-300`}></i>
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Légale */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex items-center gap-2">
                                <i className="fa-solid fa-envelope text-cyan-400 text-xs text-center w-4"></i>
                                contact@dentassist.com
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fa-solid fa-phone text-cyan-400 text-xs text-center w-4"></i>
                                01 23 45 67 89
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fa-solid fa-location-dot text-cyan-400 text-xs text-center w-4"></i>
                                Parakou, Bénin
                            </li>
                        </ul>
                        <div className="mt-6 space-y-3">
                            <Link href="/privacy" className="block text-sm text-slate-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group">
                                <i className="fa-solid fa-lock text-xs group-hover:scale-110 transition-transform duration-300"></i>
                                Politique de confidentialité
                            </Link>
                            <Link href="/legal" className="block text-sm text-slate-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group">
                                <i className="fa-solid fa-gavel text-xs group-hover:scale-110 transition-transform duration-300"></i>
                                Mentions légales
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-slate-400 text-sm">
                            © {currentYear} DentAssist. Tous droits réservés.
                        </div>
                        <div className="mt-4 md:mt-0 flex items-center gap-2 text-sm text-slate-400">
                            Réalisé par{" "}
                            <a
                                href="https://wa.me/22965302251"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                            >
                                Alimi LAMIDI
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}