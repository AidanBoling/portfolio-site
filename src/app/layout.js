import { Inter } from 'next/font/google';
import Background from '@/components/layout/Background';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Aidan Boling | Portfolio',
    description: 'Portfolio website for Aidan Boling, a full stack developer',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-zinc-900 -z-20`}>
                <Background>{children}</Background>
            </body>
        </html>
    );
}
