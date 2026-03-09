import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Add the allowed IP addresses here.
// Note: In local development, the IP might be ::1 or 127.0.0.1
// You will need to add your actual public IP and her public IP when deploying.
const ALLOWED_IPS = [
    '::1',
    '127.0.0.1',
    // 'YOUR_IP_HERE',
    // 'HER_IP_HERE'
];

export function proxy(request: NextRequest) {
    // If we are navigating to the denied page or static assets, let it pass
    if (
        request.nextUrl.pathname === '/denied' ||
        request.nextUrl.pathname.startsWith('/_next') ||
        request.nextUrl.pathname.startsWith('/pictures') ||
        request.nextUrl.pathname.startsWith('/music') ||
        request.nextUrl.pathname === '/favicon.ico'
    ) {
        return NextResponse.next();
    }

    // Get the IP address from headers (Vercel uses x-real-ip or x-forwarded-for)
    let ip = request.headers.get('x-real-ip') ?? request.headers.get('x-forwarded-for') ?? 'Unknown';

    // Handle multiple IPs in x-forwarded-for (e.g. "clientIp, proxy1, proxy2")
    if (ip.includes(',')) {
        ip = ip.split(',')[0].trim();
    }

    console.log(`Access attempt from IP: ${ip}`);

    // Check if the IP is in our allowed list
    // For safety during setup, we'll allow access if ALLOWED_IPS is practically empty of real IPs, 
    // but to strictly enforce it, we just check the array.

    // To strictly enforce:
    const isAllowed = ALLOWED_IPS.includes(ip);

    // If not allowed, redirect to the magical "denied" page
    if (!isAllowed) {
        return NextResponse.redirect(new URL('/denied', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
