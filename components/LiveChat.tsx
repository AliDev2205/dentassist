"use client";

import { useState, useRef, useEffect } from 'react';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export default function LiveChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: 'Bonjour ! Je suis l\'assistant DentAssist. Comment puis-je vous aider aujourd\'hui ?',
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        // Ajouter le message de l'utilisateur
        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputMessage,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsTyping(true);

        // Simuler une réponse de l'IA après un délai
        setTimeout(() => {
            const botResponses = [
                "Je comprends votre question. Pouvez-vous me donner plus de détails ?",
                "Je peux vous aider à prendre un rendez-vous avec un dentiste. Souhaitez-vous que je vous redirige vers la page des rendez-vous ?",
                "Pour les urgences dentaires, je vous recommande de contacter directement un dentiste ou de vous rendre aux urgences.",
                "Je suis spécialisé dans les conseils généraux sur la santé dentaire. Quelle est votre question précise ?",
                "Je peux vous expliquer comment bien vous brosser les dents, prendre rendez-vous, ou répondre à vos questions sur les soins dentaires.",
                "Malheureusement, je ne peux pas remplacer un diagnostic médical. Pour des problèmes spécifiques, je vous recommande de consulter un dentiste."
            ];

            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: randomResponse,
                sender: 'bot',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1500);
    };

    const suggestedQuestions = [
        "Comment prendre un rendez-vous ?",
        "Quels sont vos tarifs ?",
        "Urgence dentaire que faire ?",
        "Comment bien se brosser les dents ?"
    ];

    return (
        <>
            {/* Bouton de chat flottant */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 animate-bounce"
                >
                    <div className="flex items-center">
                        <span className="text-xl mr-2">💬</span>
                        <span className="text-sm font-medium">Chat</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                </button>
            )}

            {/* Fenêtre de chat */}
            {isOpen && (
                <div className="fixed bottom-6 left-6 w-80 h-96 bg-white rounded-lg shadow-xl border z-50 flex flex-col">
                    {/* Header du chat */}
                    <div className="bg-green-500 text-white p-4 rounded-t-lg flex justify-between items-center">
                        <div className="flex items-center">
                            <span className="text-xl mr-2">💬</span>
                            <div>
                                <h3 className="font-semibold text-gray-900">Chat en direct</h3>
                                <p className="text-gray-600">Disponible 24h/24</p>
                                <p className="text-sm text-gray-500">
                                    Cliquez sur le bouton vert en bas à gauche pour chatter avec notre assistant IA
                                </p>   </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-green-200 text-lg"
                        >
                            ×
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                        <div className="space-y-4">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'
                                        }`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-lg p-3 ${message.sender === 'user'
                                            ? 'bg-green-500 text-white'
                                            : 'bg-white border border-gray-200 text-gray-800'
                                            }`}
                                    >
                                        <p className="text-sm">{message.text}</p>
                                        <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-green-200' : 'text-gray-500'
                                            }`}>
                                            {message.timestamp.toLocaleTimeString('fr-FR', {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-gray-200 rounded-lg p-3">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>
                    </div>

                    {/* Questions suggérées */}
                    {messages.length <= 2 && (
                        <div className="px-4 py-2 bg-gray-100 border-t">
                            <p className="text-xs text-gray-600 mb-2">Questions rapides :</p>
                            <div className="flex flex-wrap gap-1">
                                {suggestedQuestions.map((question, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setInputMessage(question)}
                                        className="bg-white border border-gray-300 rounded-full px-3 py-1 text-xs text-gray-700 hover:bg-gray-50 transition"
                                    >
                                        {question}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Input */}
                    <form onSubmit={handleSendMessage} className="p-4 border-t">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Tapez votre message..."
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                            />
                            <button
                                type="submit"
                                disabled={!inputMessage.trim()}
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed whitespace-nowrap flex-shrink-0"
                            >
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}