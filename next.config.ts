import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  // Configuration expérimentale
  experimental: {
    serverActions: {
      // Configuration des Server Actions
      bodySizeLimit: '2mb',
    },
  },
  // Configuration pour les images
  images: {
    domains: ['images.unsplash.com', 'images.ctfassets.net'],
  },
  // Configuration pour les alias de chemins
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
    };
    return config;
  },
  
  // Configuration pour Clerk (si nécessaire)
  // Assurez-vous que les en-têtes nécessaires sont autorisés
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
