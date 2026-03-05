"use client";

import { useState, useCallback, useEffect, useRef } from 'react';
import Vapi from '@vapi-ai/web';

export function useVapi() {
  const [call, setCall] = useState<any>(null);
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [transcript, setTranscript] = useState('');
  const vapiRef = useRef<Vapi | null>(null);

  // Initialisation Vapi
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY) {
      vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
      
      // Configuration des événements
      vapiRef.current.on('call-start', () => {
        console.log('✅ Call started');
        setCall({ status: 'connected' });
        setIsListening(true);
        setError(null);
      });

      vapiRef.current.on('call-end', () => {
        console.log('🛑 Call ended');
        setCall(null);
        setIsListening(false);
        setTranscript('');
      });

      vapiRef.current.on('speech-start', () => {
        console.log('🎙️ Assistant speaking');
      });

      vapiRef.current.on('speech-end', () => {
        console.log('🔇 Assistant stopped speaking');
      });

      vapiRef.current.on('message', (message: any) => {
        if (message.type === 'transcript' && message.transcript) {
          setTranscript(message.transcript);
        }
      });

      vapiRef.current.on('error', (error: any) => {
        console.error('❌ Vapi error:', error);
        setError(error.message || 'Erreur avec lassistant vocal');
      });
    }
  }, []);

  const startCall = useCallback(async () => {
    try {
      if (!vapiRef.current) {
        throw new Error('Vapi non initialisé');
      }

      if (!process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY) {
        throw new Error('Clé API Vapi manquante');
      }

      if (!process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID) {
        throw new Error('ID assistant Vapi manquant');
      }

      console.log('🎙️ Démarrage de lappel Vapi...');
      setCall({ status: 'loading' });
      setError(null);
      setTranscript('');

      await vapiRef.current.start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID);

    } catch (err: any) {
      console.error('❌ Erreur démarrage appel:', err);
      setError(err.message || 'Erreur lors du démarrage de lappel');
      setCall(null);
    }
  }, []);

  const stopCall = useCallback(async () => {
    try {
      if (vapiRef.current) {
        await vapiRef.current.stop();
      }
    } catch (err) {
      console.error('Erreur arrêt appel:', err);
    } finally {
      setCall(null);
      setIsListening(false);
      setTranscript('');
      setError(null);
    }
  }, []);

  const toggleCall = useCallback(async () => {
    if (call) {
      await stopCall();
    } else {
      await startCall();
    }
  }, [call, startCall, stopCall]);

  return {
    call,
    isListening,
    error,
    transcript,
    startCall,
    stopCall,
    toggleCall
  };
}