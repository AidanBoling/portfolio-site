'use client';
import { useState, useEffect, useContext } from 'react';
import { LightThemeContext } from './ThemeProvider';
import { ParallaxContext } from './ParallaxContextProvider';
import { SunIcon, MoonIcon } from './icons';

export function ThemeButton({ className, role }) {
    const { useLightTheme, toggleLightTheme } = useContext(LightThemeContext);
    const [mounted, setMounted] = useState(false);

    const text = {
        isLight: 'Toggle dark mode',
        isDark: 'Toggle light mode',
    };

    className = `group ${className !== undefined ? className : ''}`;

    useEffect(() => {
        setMounted(true);
    }, []);

    function toggleThemeOverride(bool) {
        bool === true
            ? (localStorage.theme = 'light')
            : (localStorage.theme = 'dark');
    }

    function handleClick() {
        toggleThemeOverride(!useLightTheme);
        toggleLightTheme();
    }

    if (!mounted) return null;

    return (
        <button
            role={role}
            aria-pressed={useLightTheme}
            onClick={handleClick}
            className={className}>
            <div
                aria-hidden="true"
                className="mr-2 w-[45px] align-middle inline-block">
                {useLightTheme ? (
                    <MoonIcon className="xs:mx-auto h-6 w-6" strokeWidth="2" />
                ) : (
                    <SunIcon className="xs:mx-auto h-7 w-7" />
                )}
            </div>
            <span className="ml-2 max-xxs:text-sm font-normal dark:font-light text-wrap-none">
                {useLightTheme ? text.isLight : text.isDark}
            </span>
        </button>
    );
}

export function ParallaxButton({ className, role }) {
    const { enableParallax, toggleParallax } = useContext(ParallaxContext);
    const [mounted, setMounted] = useState(false);

    const text = {
        isOn: 'Disable parallax',
        isOff: 'Enable parallax',
    };

    className = `group ${className !== undefined ? className : ''}`;

    useEffect(() => {
        setMounted(true);
    }, []);

    function handleClick() {
        toggleParallax();
    }

    if (!mounted) return null;

    return (
        <button
            role={role}
            aria-pressed={enableParallax}
            onClick={handleClick}
            className={className}
            aria-label={
                (enableParallax ? text.isOn : text.isOff) + ' scroll effect'
            }>
            <div className="switch max-xs:switch-small mr-4 relative align-middle">
                <span
                    aria-hidden="true"
                    className="slider max-xs:switch-small outline outline-1 outline-indigo-500/50 border-blue-300/60 before:bg-gray-400/80 group-aria-pressed:before:bg-gray-200/80 bg-clip-content backdrop-brightness-125 bg-gradient-to-r from-teal-500/40 to-indigo-800/50 group-aria-pressed:bg-gradient-to-r group-aria-pressed:from-teal-500/70 group-aria-pressed:to-indigo-600/90"></span>
            </div>
            <span className="max-xxs:text-sm font-normal dark:font-light text-wrap-none">
                {enableParallax ? text.isOn : text.isOff}
            </span>
        </button>
    );
}
