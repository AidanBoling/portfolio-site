import { Inter } from 'next/font/google';
// import Background from '@/components/layout/Background';
import Footer from '@/components/layout/Footer';
import './globals.css';
import pageContent from '@/data/siteContent.json';
import ThemeProvider from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: pageContent.metadata.title,
    description: pageContent.metadata.description,
};

export default function RootLayout({ children }) {
    const footerHeight = '140px';

    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <ThemeProvider>
                    {/* <Background> */}
                    {children}
                    <Footer />
                    {/* </Background> */}
                </ThemeProvider>
            </body>
        </html>
    );
}
