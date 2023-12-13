'use client';
import { useState, useEffect, useContext } from 'react';
import { LightThemeContext } from './ThemeProvider';
import { ParallaxContext } from './ParallaxContextProvider';
import { SunIcon, MoonIcon } from './icons';

export function ThemeButton({ className, role }) {
    const { useLightTheme, toggleLightTheme } = useContext(LightThemeContext);

    const [isPressed, setIsPressed] = useState(useLightTheme);
    const [btnText, setBtnText] = useState();
    const [mounted, setMounted] = useState(false);

    const text = {
        isLight: 'Toggle dark mode',
        isDark: 'Toggle light mode',
    };

    className = `group ${className !== undefined ? className : ''}`;

    useEffect(() => {
        isPressed ? setBtnText(text.isLight) : setBtnText(text.isDark);
        setMounted(true);
    }, [isPressed]);

    function toggleThemeOverride(bool) {
        bool === true
            ? (localStorage.theme = 'light')
            : (localStorage.theme = 'dark');
    }

    function handleClick() {
        setIsPressed(!isPressed);
        toggleThemeOverride(!isPressed);
        toggleLightTheme();

        // setShowMenu(false);
    }

    if (!mounted) return null;

    return (
        <button
            id="btn"
            role={role}
            aria-pressed={isPressed}
            onClick={handleClick}
            className={className}
            // aria-labelledby="btnLabel"
        >
            <div
                aria-hidden="true"
                className="mr-2 w-[45px] align-middle inline-block">
                {useLightTheme ? (
                    <MoonIcon className="xs:mx-auto h-6 w-6" strokeWidth="2" />
                ) : (
                    <SunIcon className="xs:mx-auto h-7 w-7" />
                )}
            </div>
            <span
                id="btnLabel"
                className="max-xxs:text-sm font-light text-center text-wrap-none">
                {btnText}
            </span>
        </button>
    );
}

export function ParallaxButton({ className, role }) {
    const { enableParallax, toggleParallax } = useContext(ParallaxContext);

    const [isPressed, setIsPressed] = useState(enableParallax);
    const [buttonText, setButtonText] = useState();
    const [mounted, setMounted] = useState(false);

    const text = {
        isOn: 'Disable',
        isOff: 'Enable',
    };

    className = `group ${className !== undefined ? className : ''}`;

    useEffect(() => {
        isPressed ? setButtonText(text.isOn) : setButtonText(text.isOff);
        setMounted(true);
    }, [isPressed]);

    function handleClick() {
        setIsPressed(!isPressed);
        toggleParallax();
        // setShowMenu(false);
    }

    if (!mounted) return null;

    return (
        <button
            id="btn"
            role={role}
            aria-pressed={isPressed}
            onClick={handleClick}
            className={className}
            aria-label={buttonText + ' parallax scroll effect'}
            // aria-labelledby="btnLabel"
        >
            <div className="switch max-xs:switch-small mr-4 relative align-middle">
                <span
                    aria-hidden="true"
                    className="slider max-xs:switch-small outline outline-1 outline-indigo-500/50 border-blue-300/60 before:bg-gray-400/80 group-aria-pressed:before:bg-gray-200/80 bg-clip-content backdrop-brightness-125 bg-gradient-to-r from-teal-500/40 to-indigo-800/50 group-aria-pressed:bg-gradient-to-r group-aria-pressed:from-teal-500/70 group-aria-pressed:to-indigo-600/90"></span>
            </div>
            <span
                id="btnLabel"
                className="max-xxs:text-sm font-light text-center text-wrap-none">
                {buttonText + ' parallax'}
            </span>
        </button>
    );
}
