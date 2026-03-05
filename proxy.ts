import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Liste des routes publiques
const publicRoutes = [
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api(.*)",
  "/_next(.*)",
  "/(.*?\\.(?!svg|png|jpg|jpeg|gif|webp|ico|json|xml|txt|css|js|woff|woff2|ttf|eot)$)([^.]+$)"
];

const isPublicRoute = createRouteMatcher(publicRoutes);

export default clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl;
  
  // Autoriser l'accès aux routes publiques
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  // Pour toutes les autres routes, vérifier l'authentification
  const session = await auth();
  if (!session.userId) {
    // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
    const signInUrl = new URL('/sign-in', req.url);
    signInUrl.searchParams.set('redirect_url', req.url);
    return NextResponse.redirect(signInUrl);
  }
  
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Protéger toutes les routes par défaut
    "/((?!.*\\..*|_next/static|_next/image|favicon.ico).*)",
  ],
};