'use client';
import { createContext, useState, useEffect } from 'react';

export const LightThemeContext = createContext();

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

    function toggleLightTheme() {
        setUseLightTheme(!useLightTheme);
    }

    if (useLightTheme === undefined) return null;

    return (
        <LightThemeContext.Provider value={{ useLightTheme, toggleLightTheme }}>
            {children}
        </LightThemeContext.Provider>
    );
}
