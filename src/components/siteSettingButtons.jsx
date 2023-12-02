'use client';
import { useState, useEffect } from 'react';

export function ThemeButton({
    className,
    useLightTheme,
    setUseLightTheme,
    setShowMenu,
    role,
}) {
    const text = {
        isLight: 'Toggle dark mode',
        isDark: 'Toggle light mode',
    };
    const [isPressed, setIsPressed] = useState(useLightTheme);
    const [btnText, setBtnText] = useState();
    const [mounted, setMounted] = useState(false);

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

    function toggleTheme() {
        setIsPressed(!isPressed);
        toggleThemeOverride(!isPressed);
        setUseLightTheme(!isPressed);
        setShowMenu(false);
    }

    if (!mounted) return null;

    return (
        <button
            id="btn"
            role={role}
            aria-pressed={isPressed}
            onClick={toggleTheme}
            className={className}
            // aria-label={btnText}
            // aria-labelledby="btnLabel"
        >
            <div className="switch mr-2 relative align-middle">
                <span
                    aria-hidden="true"
                    className="slider outline outline-1 outline-indigo-500/50 border-blue-300/60 before:bg-gray-400/80 group-aria-pressed:before:bg-gray-200/80 bg-clip-content backdrop-brightness-125 bg-gradient-to-r from-teal-500/40 to-indigo-800/50 group-aria-pressed:bg-gradient-to-r group-aria-pressed:from-teal-500/70 group-aria-pressed:to-indigo-600/90"></span>
            </div>
            <span id="btnLabel" className="text-sm text-center text-wrap-none">
                {btnText}
            </span>
        </button>
    );
}

export function ParallaxButton({
    className,
    enableParallax,
    setEnableParallax,
    setShowMenu,
    role,
}) {
    const text = {
        isOn: 'Disable',
        isOff: 'Enable',
    };
    const [isPressed, setIsPressed] = useState(enableParallax);
    const [buttonText, setButtonText] = useState();
    const [mounted, setMounted] = useState(false);

    className = `group ${className !== undefined ? className : ''}`;

    useEffect(() => {
        isPressed ? setButtonText(text.isOn) : setButtonText(text.isOff);
        setMounted(true);
    }, [isPressed]);

    function toggleParallax() {
        setIsPressed(!isPressed);
        setEnableParallax(!isPressed);
        setShowMenu(false);
    }

    if (!mounted) return null;

    return (
        <button
            id="btn"
            role={role}
            aria-pressed={isPressed}
            onClick={toggleParallax}
            className={className}
            aria-label={buttonText + ' parallax scroll effect'}
            aria-labelledby="btnLabel">
            <div className="switch mr-2 relative align-middle">
                <span
                    aria-hidden="true"
                    className="slider outline outline-1 outline-indigo-500/50 border-blue-300/60 before:bg-gray-400/80 group-aria-pressed:before:bg-gray-200/80 bg-clip-content backdrop-brightness-125 bg-gradient-to-r from-teal-500/40 to-indigo-800/50 group-aria-pressed:bg-gradient-to-r group-aria-pressed:from-teal-500/70 group-aria-pressed:to-indigo-600/90"></span>
            </div>
            <span id="btnLabel" className="text-sm text-center text-wrap-none">
                {buttonText + ' parallax'}
            </span>
        </button>
    );
}
