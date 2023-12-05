import { Inter, My_Soul, Whisper, Cherish, WindSong } from 'next/font/google';
// import Background from '@/components/layout/Background';
import Footer from '@/components/layout/Footer';
import './globals.css';
import pageContent from '@/data/siteContent.json';
import ThemeProvider from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-main' });
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
        <html lang="en" className={`${inter.variable} ${h1font.variable}`}>
            <body className="font-main">
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
