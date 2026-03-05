"use client";

import { useState, useEffect } from "react";
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/images/hero/hero-1.png",
    "/images/hero/hero-2.png",
    "/images/hero/hero-3.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Slider Background */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
            >
              <Image
                src={slide}
                alt={`Dental slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
              {/* Subtle overlay instead of heavy blur */}
              <div className="absolute inset-0 bg-white/40"></div>
            </div>
          ))}
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent z-[1]"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl z-[1]"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl z-[1]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-[2]">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-8 shadow-sm animate-fade-in">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700">Assistant IA dentaire disponible 24h/24</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent animate-fade-in-up">
              Votre sourire
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                mérite le meilleur
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Trouvez le dentiste parfait et obtenez des réponses instantanées
              avec notre assistant IA spécialisé en santé dentaire
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
              <Link href="/dashboard/doctors" className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-cyan-600 hover:to-blue-700">
                <span className="flex items-center gap-2">
                  Prendre rendez-vous
                  <i className="fa-solid fa-calendar-check group-hover:translate-x-1 transition-transform duration-200"></i>
                </span>
              </Link>

              <Link href="/dashboard/assistant" className="group bg-white/80 backdrop-blur-sm text-slate-700 px-8 py-4 rounded-2xl font-semibold text-lg border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-white">
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-robot text-lg"></i>
                  Essayer l'IA
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnement */}
      <section className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              Simple et efficace
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Trois étapes pour prendre soin de votre santé dentaire
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Étape 1 */}
            <div className="group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-sm font-bold border-2 border-white">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-800">Trouvez un dentiste</h3>
              <p className="text-slate-600 leading-relaxed">
                Parcourez notre réseau de dentistes qualifiés et certifiés près de chez vous
              </p>
            </div>

            {/* Étape 2 */}
            <div className="group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i className="fa-solid fa-calendar-days"></i>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-bold border-2 border-white">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-800">Réservez en ligne</h3>
              <p className="text-slate-600 leading-relaxed">
                Choisissez un créneau qui vous convient et confirmez en quelques clics
              </p>
            </div>

            {/* Étape 3 */}
            <div className="group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i className="fa-solid fa-comments-medical"></i>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center text-sm font-bold border-2 border-white">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-800">Consultez l'IA</h3>
              <p className="text-slate-600 leading-relaxed">
                Obtenez des réponses instantanées à vos questions sur la santé dentaire
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Témoignages */}
      <section className="py-24 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-slate-600">
              Découvrez les retours de nos patients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Thomas Durand",
                role: "Patient régulier",
                content: "DentAssist a radicalement changé ma façon de prendre soin de mes dents. L'assistant IA est d'une aide précieuse entre deux consultations.",
                avatar: "TD"
              },
              {
                name: "Sarah Martin",
                role: "Maman de 2 enfants",
                content: "Trouver un dentiste disponible rapidement pour mes enfants était un cauchemar. Avec DentAssist, tout se fait en 2 minutes.",
                avatar: "SM"
              },
              {
                name: "Marc Dubreuil",
                role: "Nouveau patient",
                content: "Interface intuitive et service ultra-rapide. L'analyse préliminaire par l'IA m'a beaucoup rassuré avant mon premier rendez-vous.",
                avatar: "MD"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-md">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 text-amber-400 mb-4 text-xs">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="text-slate-600 leading-relaxed italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conseils Santé Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 opacity-10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-[100px] -ml-32 -mb-32"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:max-w-xl">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Prêt à retrouver votre plus beau sourire ?
                </h2>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Rejoignez des milliers d'utilisateurs qui prennent déjà soin
                  de leur santé dentaire avec DentAssist.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/dashboard/doctors" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform duration-300">
                    Commencer maintenant
                  </Link>
                  <Link href="/about" className="bg-white/10 text-white px-8 py-4 rounded-2xl font-bold border border-white/20 hover:bg-white/20 transition-all duration-300">
                    En savoir plus
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <i className="fa-solid fa-lightbulb text-cyan-400"></i>
                  Le conseil du jour
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  "Un brossage efficace dure au moins 2 minutes, deux fois par jour.
                  N'oubliez pas les espaces interdentaires pour une hygiène optimale."
                </p>
                <div className="pt-6 border-t border-white/10">
                  <span className="text-cyan-400 font-medium cursor-pointer hover:underline flex items-center gap-2">
                    Voir plus de conseils
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}