import {
    Inter,
    My_Soul,
    Whisper,
    Cherish,
    WindSong,
    Red_Hat_Text,
    // Mulish,
    Gothic_A1,
} from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import ParallaxContextProvider from '@/components/ParallaxContextProvider';
import BackgroundBase from '@/components/layout/BackgroundBase';
import Background from '@/components/layout/Background';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import pageContent from '@/data/siteContent.json';

const main = Red_Hat_Text({
    subsets: ['latin'],
    display: 'swap',
    style: ['normal', 'italic'],
    variable: '--font-main',
});

// const main = Gothic_A1({
//     subsets: ['latin'],
//     display: 'swap',
//     style: ['normal'],
//     weight: ['200', '300', '400', '500'],
//     variable: '--font-main',
// });

// const main = Inter({ subsets: ['latin'], variable: '--font-main' });

// const main = Mulish({
//     subsets: ['latin'],
//     display: 'swap',
//     style: ['normal', 'italic'],
//     variable: '--font-main',
// });

// const h1font = My_Soul({
//     subsets: ['latin'],
//     weight: ['400'],
//     display: 'swap',
//     variable: '--font-h1-custom',
// });

// const h1font = Cherish({
//     subsets: ['latin'],
//     weight: ['400'],
//     display: 'swap',
//     variable: '--font-h1-custom',
// });

// const h1font = Whisper({
//     subsets: ['latin'],
//     weight: ['400'],
//     display: 'swap',
//     variable: '--font-h1-custom',
// });

const h1font = WindSong({
    subsets: ['latin'],
    weight: ['500'],
    display: 'swap',
    variable: '--font-h1-custom',
});
export const metadata = {
    title: pageContent.metadata.title,
    description: pageContent.metadata.description,
};

export default function RootLayout({ children }) {
    const footerHeight = '140px';

    return (
        <html lang="en" className={`${main.variable} ${h1font.variable}`}>
            <body className="font-main">
                <ThemeProvider>
                    <ParallaxContextProvider>
                        <BackgroundBase>
                            <Navbar />
                            <Background>
                                {children}
                                <Footer />
                            </Background>
                        </BackgroundBase>
                    </ParallaxContextProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
