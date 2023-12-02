'use client';
import { useState, useEffect } from 'react';
import Background from './layout/Background';

export default function ThemeProvider({ children }) {
    const [useLightTheme, setUseLightTheme] = useState();

    useEffect(() => {
        const prefersDarkTheme =
            window.matchMedia('(prefers-color-scheme: dark)').matches === true;

        if ('theme' in localStorage) {
            if (localStorage.theme === 'dark') {
                setUseLightTheme(false);
            } else {
                setUseLightTheme(true);
            }
        } else {
            setUseLightTheme(!prefersDarkTheme);
        }
    }, []);

    if (useLightTheme === undefined) return null;

    return <Background lightTheme={useLightTheme}>{children}</Background>;
}
