'use client';
import Image from 'next/image';
import { useContext } from 'react';
import { LightThemeContext } from './ThemeProvider';

export default function Icon({ iconSrc, iconSrcDark, w, h, color }) {
    const { useLightTheme } = useContext(LightThemeContext);
    const darkModeIcon = iconSrcDark || iconSrc;

    const width = (w && w) || 48;
    const height = (h && h) || width;

    // const paddingY = offsetH ? offsetH * height : 0;

    let source;
    if (color && color === 'light') {
        source = darkModeIcon;
    } else if (color && color === 'dark') {
        source = iconSrc;
    } else {
        source = useLightTheme ? iconSrc : darkModeIcon;
    }

    return (
        <Image
            className={`social-icon`}
            src={source}
            alt=""
            aria-hidden={true}
            width={width}
            height={height}
            style={{
                maxHeight: height,
                objectFit: 'contain',
            }}
        />
    );
}
