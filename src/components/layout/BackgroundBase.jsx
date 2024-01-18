'use client';
import { useEffect, useContext } from 'react';
import { LightThemeContext } from '../ThemeProvider';

export default function BackgroundBase({ children }) {
    const { useLightTheme } = useContext(LightThemeContext);

    // Set dark/light mode
    useEffect(() => {
        if (useLightTheme !== undefined) {
            if (useLightTheme === true) {
                // console.log('Prefers theme: light');
                document.documentElement.classList.remove('dark');
            } else {
                // console.log('Prefers theme: dark');
                document.documentElement.classList.add('dark');
            }
        }
    }, [useLightTheme]);

    return (
        <div className="bg-slate-100 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-925 bg-fixed relative overflow-hidden">
            {/* <div className="w-screen h-full absolute bg-geometric-pattern bg-fixed-size bg-fixed opacity-[.04] dark:opacity-[.08]"></div> */}
            {children}
        </div>
    );
}
