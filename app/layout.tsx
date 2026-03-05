import type { Metadata } from "next";
import { Montserrat, Outfit } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import Layout from '@/components/Layout';
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DentAssist - Prenez soin de votre sourire",
  description: "Trouvez un dentiste et obtenez des réponses instantanées avec notre assistant IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="fr" suppressHydrationWarning>
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          />
        </head>
        <body
          className={`${montserrat.variable} ${outfit.variable} antialiased`}
          suppressHydrationWarning
        >
          <Layout>
            {children}
          </Layout>
        </body>
      </html>
    </ClerkProvider>
  );
}