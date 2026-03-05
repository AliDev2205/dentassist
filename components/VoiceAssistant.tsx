"use client";

import { useState } from 'react';
import { useVapi } from '@/hooks/useVapi';

export default function VoiceAssistant() {
  const { call, isListening, error, transcript, startCall, stopCall, toggleCall } = useVapi();
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleStartCall = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    startCall();
  };

  const handleStopCall = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    stopCall();
  };

  const handleToggleCall = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleCall();
  };

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
    if (call) {
      stopCall();
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleButtonClick}
          className={`p-4 rounded-full shadow-lg transition-all duration-300 ${
            isListening 
              ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
              : 'bg-green-500 hover:bg-green-600'
          } text-white`}
        >
          <span className="text-xl">
            {isListening ? '🎙️' : '🤖'}
          </span>
        </button>
        <div className="text-xs text-center mt-1 text-gray-600">
          {isListening ? 'En écoute...' : 'Assistant'}
        </div>
      </div>

      {/* Fenêtre de chat vocal */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-lg shadow-xl border z-50">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Assistant Dentaire Vocal</h3>
              <button 
                onClick={handleClose}
                className="text-white hover:text-gray-200 text-xl"
              >
                ×
              </button>
            </div>
          </div>

          {/* Contenu */}
          <div className="p-4">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                <p className="font-medium">Erreur</p>
                <p className="text-sm">{error}</p>
              </div>
            )}

            {!process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY && (
              <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
                <p className="text-sm">⚠️ Clé API Vapi manquante dans .env.local</p>
              </div>
            )}

            {call ? (
              <div className="space-y-4">
                {/* Indicateur de statut */}
                <div className={`text-center p-3 rounded-lg ${
                  call.status === 'connected' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {call.status === 'loading' && '🔄 Connexion à lassistant...'}
                  {call.status === 'connected' && '✅ En ligne - Parlez maintenant'}
                </div>

                {/* Transcription */}
                {transcript && (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">{transcript}</p>
                  </div>
                )}

                {/* Barre audio animée */}
                {isListening && (
                  <div className="flex space-x-1 justify-center">
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                      <div
                        key={i}
                        className="w-1 bg-blue-500 rounded-full animate-pulse"
                        style={{
                          height: `${Math.random() * 24 + 8}px`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Bouton d'arrêt */}
                <button
                  onClick={handleStopCall}
                  className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition font-semibold"
                >
                  🛑 Arrêter lappel
                </button>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <div className="text-4xl">🎙️</div>
                <p className="text-gray-600 text-sm">
                  Assistant vocal spécialisé en santé dentaire
                </p>
                <p className="text-xs text-gray-500">
                  Posez vos questions sur les soins, l'hygiène, les rendez-vous...
                </p>
                
                <button
                  onClick={handleStartCall}
                  disabled={!process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  🎤 Démarrer l'appel vocal
                </button>

                {!process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY && (
                  <p className="text-xs text-red-500">
                    Configurez VAPI_PUBLIC_KEY dans .env.local
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}