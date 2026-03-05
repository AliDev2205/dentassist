"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      if (data.response) {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: data.response,
          role: "assistant",
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, assistantMessage]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Désolé, une erreur s'est produite. Veuillez réessayer.",
        role: "assistant",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100">
      <Navbar />

      <div className="max-w-4xl mx-auto py-8 px-4 h-[calc(100vh-80px)] flex flex-col">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="group inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 mb-6 transition-colors duration-200"
          >
            <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform duration-200"></i>
            Retour au tableau de bord
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
            Assistant Dentaire IA
          </h1>
          <p className="text-xl text-slate-600">
            Posez vos questions sur la santé bucco-dentaire
          </p>
        </div>

        {/* Chat Container */}
        <div className="flex-1 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 flex flex-col overflow-hidden">
          {/* Messages Area */}
          <div className="flex-1 p-6 overflow-y-auto">
            {messages.length === 0 ? (
              <div className="text-center text-slate-600 mt-8">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <i className="fa-solid fa-robot text-white text-4xl"></i>
                </div>
                <p className="text-2xl font-semibold text-slate-800 mb-3">Bonjour ! 👋</p>
                <p className="text-lg mb-4">Je suis votre assistant dentaire intelligent.</p>
                <p className="text-sm mb-6 max-w-md mx-auto leading-relaxed">
                  Posez-moi vos questions sur la santé bucco-dentaire, l'hygiène, les soins,
                  la prévention ou tout autre sujet lié à votre santé dentaire.
                </p>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-4 max-w-md mx-auto border border-cyan-200/50">
                  <p className="text-sm font-medium text-cyan-700 mb-2">💡 Questions d'exemple :</p>
                  <ul className="text-xs text-cyan-600 space-y-1 text-left">
                    <li>• "Comment bien se brosser les dents ?"</li>
                    <li>• "Quels sont les symptômes d'une carie ?"</li>
                    <li>• "Comment prévenir le tartre ?"</li>
                    <li>• "À quelle fréquence consulter un dentiste ?"</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"
                      }`}
                  >
                    <div className="flex gap-3 max-w-[85%]">
                      {message.role === "assistant" && (
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                      <div
                        className={`rounded-2xl p-4 shadow-lg ${message.role === "user"
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                            : "bg-white/90 backdrop-blur-sm text-slate-800 border border-slate-200/50"
                          }`}
                      >
                        <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                        <p className={`text-xs mt-3 ${message.role === "user" ? "text-cyan-100" : "text-slate-500"
                          }`}>
                          {message.timestamp.toLocaleTimeString('fr-FR', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                      {message.role === "user" && (
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="flex gap-3 max-w-[85%]">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                        <i className="fa-solid fa-robot text-white text-xs"></i>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-slate-200/50">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-slate-200/50 p-6 bg-white/60 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="flex gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Posez votre question sur la santé dentaire..."
                  className="w-full px-6 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 bg-white/80 backdrop-blur-sm transition-all duration-200 pr-24"
                  disabled={loading}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-slate-400">
                  ↵ Entrée
                </div>
              </div>
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:from-slate-400 disabled:to-slate-500 disabled:cursor-not-allowed disabled:shadow-none flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                    Envoi...
                  </>
                ) : (
                  <>
                    Envoyer
                    <i className="fa-solid fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>
            <p className="text-xs text-slate-500 text-center mt-4">
              L'assistant IA fournit des informations générales et ne remplace pas une consultation chez un dentiste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}