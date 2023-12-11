'use client';
import { createContext, useState, useEffect } from 'react';

export const ParallaxContext = createContext();

export default function ParallaxContextProvider({ children }) {
    const [enableParallax, setEnableParallax] = useState();

    useEffect(() => {
        const prefersReduced =
            window.matchMedia(`(prefers-reduced-motion: reduce)`).matches ===
            true;
        const userOverride = localStorage.getItem('parallax');
        console.log('User local storage parallax: ', userOverride);

        if (userOverride) {
            userOverride === 'true'
                ? setEnableParallax(true)
                : setEnableParallax(false);
        } else {
            setEnableParallax(!prefersReduced);
        }
    }, []);

    function toggleParallax() {
        setEnableParallax(!enableParallax);
    }

    if (enableParallax === undefined) return null;

    return (
        <ParallaxContext.Provider value={{ enableParallax, toggleParallax }}>
            {children}
        </ParallaxContext.Provider>
    );
}
