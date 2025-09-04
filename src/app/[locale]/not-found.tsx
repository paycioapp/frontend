// app/not-found.tsx
'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <div  className='flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800'>
            <h1 style={{ fontSize: '3rem' }}>404 - Page Not Found</h1>
            <p style={{ fontSize: '1.2rem' }}>
                You’ve wandered too far, noble warrior.
            </p>
            <Link href="/" style={{ fontSize: '1rem', color: '#a78bfa', textDecoration: 'underline' }}>
                Return to Home
            </Link>
        </div>
    );
}
