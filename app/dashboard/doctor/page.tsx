"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

interface Appointment {
  id: string;
  date: string;
  status: string;
  user: {
    name: string;
    email: string;
  };
}

interface WorkingHours {
  [key: string]: { start: string; end: string; available: boolean };
}

export default function DoctorDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [workingHours, setWorkingHours] = useState<WorkingHours>({
    monday: { start: "09:00", end: "17:00", available: true },
    tuesday: { start: "09:00", end: "17:00", available: true },
    wednesday: { start: "09:00", end: "17:00", available: true },
    thursday: { start: "09:00", end: "17:00", available: true },
    friday: { start: "09:00", end: "17:00", available: true },
    saturday: { start: "09:00", end: "12:00", available: false },
    sunday: { start: "00:00", end: "00:00", available: false }
  });

  useEffect(() => {
    // Simulation des données - à remplacer par un appel API
    const mockAppointments: Appointment[] = [
      {
        id: "1",
        date: "2024-01-15T10:00:00Z",
        status: "confirmed",
        user: { name: "Marie Dupont", email: "marie@email.com" }
      },
      {
        id: "2", 
        date: "2024-01-15T14:30:00Z",
        status: "pending",
        user: { name: "Jean Martin", email: "jean@email.com" }
      },
      {
        id: "3",
        date: "2024-01-16T11:00:00Z",
        status: "confirmed",
        user: { name: "Sophie Laurent", email: "sophie@email.com" }
      }
    ];
    
    setAppointments(mockAppointments);
    setLoading(false);
  }, []);

  const updateAppointmentStatus = async (appointmentId: string, newStatus: string) => {
    // Simulation mise à jour
    setAppointments(prev => 
      prev.map(apt => 
        apt.id === appointmentId ? { ...apt, status: newStatus } : apt
      )
    );
  };

  const updateWorkingHours = (day: string, field: string, value: any) => {
    setWorkingHours(prev => ({
      ...prev,
      [day]: { ...prev[day], [field]: value }
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto py-6 px-4">
          <div className="animate-pulse">Chargement du dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="mb-6">
          <Link 
            href="/dashboard" 
            className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
          >
            ← Retour au tableau de bord
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard Docteur
          </h1>
          <p className="text-gray-600 mt-2">
            Gérez vos rendez-vous et vos disponibilités
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Section Rendez-vous */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Rendez-vous à venir
            </h2>
            
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {appointment.user.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{appointment.user.email}</p>
                      <p className="text-gray-500 text-sm">
                        {new Date(appointment.date).toLocaleDateString('fr-FR', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      appointment.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800'
                        : appointment.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {appointment.status === 'confirmed' ? 'Confirmé' : 
                       appointment.status === 'pending' ? 'En attente' : 'Annulé'}
                    </span>
                  </div>
                  
                  <div className="flex space-x-2 mt-3">
                    <button
                      onClick={() => updateAppointmentStatus(appointment.id, 'confirmed')}
                      className="flex-1 bg-green-600 text-white py-2 rounded text-sm font-medium hover:bg-green-700 transition"
                    >
                      Confirmer
                    </button>
                    <button
                      onClick={() => updateAppointmentStatus(appointment.id, 'cancelled')}
                      className="flex-1 bg-red-600 text-white py-2 rounded text-sm font-medium hover:bg-red-700 transition"
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              ))}
              
              {appointments.length === 0 && (
                <p className="text-gray-500 text-center py-8">
                  Aucun rendez-vous à venir
                </p>
              )}
            </div>
          </div>

          {/* Section Disponibilités */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Gestion des horaires
            </h2>
            
            <div className="space-y-4">
              {Object.entries(workingHours).map(([day, hours]) => (
                <div key={day} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      checked={hours.available}
                      onChange={(e) => updateWorkingHours(day, 'available', e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    <span className="font-medium capitalize text-gray-900 min-w-24">
                      {day === 'monday' ? 'Lundi' :
                       day === 'tuesday' ? 'Mardi' :
                       day === 'wednesday' ? 'Mercredi' :
                       day === 'thursday' ? 'Jeudi' :
                       day === 'friday' ? 'Vendredi' :
                       day === 'saturday' ? 'Samedi' : 'Dimanche'}
                    </span>
                  </div>
                  
                  {hours.available && (
                    <div className="flex items-center space-x-2">
                      <input
                        type="time"
                        value={hours.start}
                        onChange={(e) => updateWorkingHours(day, 'start', e.target.value)}
                        className="border border-gray-300 rounded px-2 py-1 text-sm"
                      />
                      <span className="text-gray-500">à</span>
                      <input
                        type="time"
                        value={hours.end}
                        onChange={(e) => updateWorkingHours(day, 'end', e.target.value)}
                        className="border border-gray-300 rounded px-2 py-1 text-sm"
                      />
                    </div>
                  )}
                </div>
              ))}
              
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition mt-4">
                Sauvegarder les horaires
              </button>
            </div>

            {/* Statistiques rapides */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Aujourd'hui</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-600">3</div>
                  <div className="text-xs text-gray-600">Rendez-vous</div>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-600">2</div>
                  <div className="text-xs text-gray-600">Confirmés</div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-yellow-600">1</div>
                  <div className="text-xs text-gray-600">En attente</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}