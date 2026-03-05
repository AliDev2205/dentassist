"use client"
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo et navigation desktop */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <div className="relative">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105 border border-slate-100 p-1.5">
                  <Image
                    src="/images/logo.png"
                    alt="DentAssist Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
                DentAssist
              </span>
            </Link>

            {/* Navigation links - Desktop */}
            <div className="hidden md:ml-12 md:flex md:space-x-1">
              <Link
                href="/"
                className="relative text-slate-700 hover:text-slate-900 inline-flex items-center px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 hover:bg-slate-100/80 group"
              >
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-house text-sm opacity-60"></i>
                  Accueil
                </span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </Link>

              <Link
                href="/about"
                className="relative text-slate-600 hover:text-slate-900 inline-flex items-center px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 hover:bg-slate-100/80 group"
              >
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-info text-sm opacity-60"></i>
                  À propos
                </span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </Link>

              <Link
                href="/pricing"
                className="relative text-slate-600 hover:text-slate-900 inline-flex items-center px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 hover:bg-slate-100/80 group"
              >
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-tag text-sm opacity-60"></i>
                  Tarifs
                </span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </Link>

              <Link
                href="/contact"
                className="relative text-slate-600 hover:text-slate-900 inline-flex items-center px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 hover:bg-slate-100/80 group"
              >
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-envelope text-sm opacity-60"></i>
                  Contact
                </span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </Link>
            </div>
          </div>

          {/* Boutons de connexion et menu mobile */}
          <div className="flex items-center space-x-4">
            <SignedOut>
              <div className="hidden sm:block">
                <SignInButton mode="modal">
                  <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <span className="flex items-center gap-2">
                      Connexion
                      <i className="fa-solid fa-right-to-bracket text-xs group-hover:translate-x-0.5 transition-transform duration-200"></i>
                    </span>
                  </button>
                </SignInButton>
              </div>
            </SignedOut>

            <SignedIn>
              <Link
                href="/dashboard"
                className="hidden sm:block group bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Tableau de bord
                  <i className="fa-solid fa-chart-line text-xs group-hover:translate-x-0.5 transition-transform duration-200"></i>
                </span>
              </Link>

              <div className="relative hidden sm:block">
                <UserButton afterSignOutUrl="/" />
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-200 -z-10"></div>
              </div>
            </SignedIn>

            {/* Bouton hamburger mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-slate-100/80 transition-all duration-200 group"
              aria-label="Menu mobile"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <span className={`block h-0.5 w-6 bg-slate-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block h-0.5 w-6 bg-slate-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 w-6 bg-slate-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-lg p-6 space-y-4">
            {/* Liens de navigation mobile */}
            <div className="space-y-3">
              <Link
                href="/"
                className="flex items-center gap-3 p-3 text-slate-700 hover:text-slate-900 rounded-xl hover:bg-slate-50/80 transition-all duration-200 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-house text-white text-xs"></i>
                </div>
                <span className="font-medium">Accueil</span>
              </Link>

              <Link
                href="/about"
                className="flex items-center gap-3 p-3 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-50/80 transition-all duration-200 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-circle-info text-white text-xs"></i>
                </div>
                <span className="font-medium">À propos</span>
              </Link>

              <Link
                href="/pricing"
                className="flex items-center gap-3 p-3 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-50/80 transition-all duration-200 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-tag text-white text-xs"></i>
                </div>
                <span className="font-medium">Tarifs</span>
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-3 p-3 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-50/80 transition-all duration-200 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-envelope text-white text-xs"></i>
                </div>
                <span className="font-medium">Contact</span>
              </Link>
            </div>

            {/* Séparateur */}
            <div className="border-t border-slate-200/60 pt-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <button
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fa-solid fa-right-to-bracket text-sm"></i>
                    Connexion
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <div className="space-y-3">
                  <Link
                    href="/dashboard"
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fa-solid fa-chart-line text-sm"></i>
                    Tableau de bord
                  </Link>

                  <div className="flex justify-center">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}