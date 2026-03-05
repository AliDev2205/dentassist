"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  bio?: string;
  availability: boolean;
  image?: string;
}

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [reservationLoading, setReservationLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationDetails, setConfirmationDetails] = useState({
    doctorName: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch("/api/doctors");

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      } const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
      // Données simulées avec les noms diversifiés et photos
      const mockDoctors: Doctor[] = [
        {
          id: "1",
          name: "Dr. Léa Diallo",
          specialization: "Orthodontiste",
          bio: "Spécialiste en orthodontie invisible avec 8 ans d'expérience. Passionnée par l'esthétique du sourire.",
          availability: true,
          image: "/doctors/dr-lea-diallo.jpeg"
        },
        {
          id: "2",
          name: "Dr. Kwame Johnson",
          specialization: "Chirurgien-Dentiste",
          bio: "Expert en implantologie et chirurgie buccale. Membre de l'Académie dentaire internationale.",
          availability: true,
          image: "/doctors/dr-kwame-johnson.jpeg"
        },
        {
          id: "3",
          name: "Dr. Fatoumata Bâ",
          specialization: "Pédodontiste",
          bio: "Spécialiste des soins dentaires pour enfants. Approche douce et adaptée aux plus jeunes.",
          availability: false,
          image: "/doctors/dr-fatoumata-ba.jpeg"
        },
        {
          id: "4",
          name: "Dr. Malik Sow",
          specialization: "Parodontiste",
          bio: "Expert en traitement des gencives et maladies parodontales. Praticien reconnu pour sa minutie.",
          availability: true,
          image: "/doctors/dr-malik-sow.jpeg"
        },
        {
          id: "5",
          name: "Dr. Aïsha Traoré",
          specialization: "Esthétique Dentaire",
          bio: "Spécialiste en blanchiment et facettes dentaires. Transforme les sourires avec passion.",
          availability: true,
          image: "/doctors/dr-aisha-traore.jpeg"
        },
        {
          id: "6",
          name: "Dr. Jean-Luc Mvoubou",
          specialization: "Endodontiste",
          bio: "Expert en traitements de racines et soins endodontiques complexes.",
          availability: true,
          image: "/doctors/dr-jean-luc-mvoubou.jpeg"
        }
      ];

      setDoctors(mockDoctors);
    } finally {
      setLoading(false);
    }
  };

  const handleAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDoctor || !selectedDate || !selectedTime) return;

    setReservationLoading(true);

    try {
      const appointmentDateTime = `${selectedDate}T${selectedTime}:00.000Z`;

      console.log('Envoi de la requête:', {
        doctorId: selectedDoctor.id,
        date: appointmentDateTime
      });

      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doctorId: selectedDoctor.id,
          date: appointmentDateTime,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setConfirmationDetails({
          doctorName: selectedDoctor.name,
          date: selectedDate,
          time: selectedTime,
        });
        setShowConfirmation(true);
        setSelectedDoctor(null);
        setSelectedDate("");
        setSelectedTime("");

        // Recharge les docteurs pour mettre à jour les disponibilités
        fetchDoctors();
      } else {
        console.error('Erreur API:', data);
        alert(`❌ ${data.error || "Erreur lors de la réservation"}`);
      }
    } catch (error) {
      console.error("Error creating appointment:", error);
      alert("❌ Erreur de connexion. Vérifiez votre connexion internet.");
    } finally {
      setReservationLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100">
        <Navbar />
        <div className="max-w-7xl mx-auto py-8 px-4">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl animate-pulse mx-auto mb-4"></div>
              <p className="text-slate-600 text-lg">Chargement des dentistes...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100">
      <Navbar />

      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="group inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 mb-6 transition-colors duration-200"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour au tableau de bord
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
            Dentistes disponibles
          </h1>
          <p className="text-xl text-slate-600">
            Choisissez un dentiste et prenez rendez-vous en ligne
          </p>
        </div>

        {/* Grid des dentistes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="group bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-start gap-4 mb-6">
                {/* Container d'image amélioré */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 bg-slate-100">
                    <Image
                      src={doctor.image || '/doctors/default-doctor.jpg'}
                      alt={`Photo du ${doctor.name}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                      style={{ transform: 'scale(0.9)' }}
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-slate-800 mb-1 truncate">{doctor.name}</h3>
                  <p className="text-cyan-600 font-medium text-sm">{doctor.specialization}</p>
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                {doctor.bio || "Spécialiste en soins dentaires avec une expertise reconnue"}
              </p>

              <div className="flex items-center justify-between">
                <span className={`px-3 py-2 rounded-xl text-xs font-medium ${doctor.availability
                  ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                  : "bg-red-100 text-red-700 border border-red-200"
                  }`}>
                  {doctor.availability ? "Disponible" : "Occupé"}
                </span>

                <button
                  onClick={() => setSelectedDoctor(doctor)}
                  disabled={!doctor.availability}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:from-slate-400 disabled:to-slate-500 disabled:cursor-not-allowed disabled:shadow-none"
                >
                  Réserver
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de réservation */}
        {selectedDoctor && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8 max-w-md w-full">
              <div className="flex items-center gap-4 mb-6">
                {/* Photo dans le modal améliorée */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg bg-slate-100">
                    <Image
                      src={selectedDoctor.image || '/doctors/default-doctor.jpg'}
                      alt={`Photo du ${selectedDoctor.name}`}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                      style={{ transform: 'scale(0.9)' }}
                    />
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-slate-800 truncate">
                    Dr. {selectedDoctor.name}
                  </h3>
                  <p className="text-cyan-600 font-medium text-sm">{selectedDoctor.specialization}</p>
                </div>
              </div>

              <form onSubmit={handleAppointment}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">
                      Date du rendez-vous
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 bg-white/50 backdrop-blur-sm transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">
                      Heure du rendez-vous
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 bg-white/50 backdrop-blur-sm transition-all duration-200"
                      required
                    >
                      <option value="">Choisir une heure</option>
                      {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'].map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    type="submit"
                    disabled={reservationLoading}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {reservationLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <i className="fa-solid fa-spinner animate-spin"></i>
                        Réservation...
                      </span>
                    ) : (
                      "Confirmer le rendez-vous"
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedDoctor(null)}
                    className="flex-1 bg-slate-100 text-slate-700 py-4 rounded-2xl font-semibold hover:bg-slate-200 transition-all duration-300"
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal de confirmation de succès */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 z-[60] animate-fade-in">
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-white/20 p-10 max-w-lg w-full transform transition-all duration-300 scale-100 animate-fade-in-up">
              <div className="text-center">
                <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 animate-bounce-short">
                  <i className="fa-solid fa-circle-check"></i>
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  Rendez-vous confirmé !
                </h3>

                <div className="bg-slate-50 rounded-3xl p-8 mb-8 text-left border border-slate-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center text-xl">
                      <i className="fa-solid fa-user-doctor"></i>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Praticien</p>
                      <p className="font-bold text-slate-800">{confirmationDetails.doctorName}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-xl">
                        <i className="fa-solid fa-calendar"></i>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">Date</p>
                        <p className="font-bold text-slate-800">{confirmationDetails.date}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center text-xl">
                        <i className="fa-solid fa-clock"></i>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">Heure</p>
                        <p className="font-bold text-slate-800">{confirmationDetails.time}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 mb-10 leading-relaxed font-medium">
                  ✅ Rendez-vous confirmé avec {confirmationDetails.doctorName} le {confirmationDetails.date} à {confirmationDetails.time}
                </p>

                <button
                  onClick={() => setShowConfirmation(false)}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  C'est compris !
                </button>
              </div>
            </div>
          </div>
        )}

        {/* État vide */}
        {doctors.length === 0 && !loading && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-hospital text-slate-400 text-4xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">Aucun dentiste disponible</h3>
            <p className="text-slate-600 mb-6">Revenez plus tard pour voir les disponibilités.</p>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Retour au tableau de bord
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}