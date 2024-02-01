'use client';
import Image from 'next/image';
import { useContext } from 'react';
import { LightThemeContext } from './ThemeProvider';

export default function SocialIconLink({
    socialData,
    showName,
    offsetH,
    w,
    h,
    color,
    textRight,
    textLeft,
    textSize,
    footerAlt,
}) {
    const { useLightTheme } = useContext(LightThemeContext);
    const lightModeIcon =
        (footerAlt && socialData.iconFooter) || socialData.icon;
    const darkModeIcon =
        (footerAlt ? socialData.iconDarkFooter : socialData.iconDark) ||
        socialData.icon;

    const width = (w && w) || 48;
    const height = (h && h) || width;

    const paddingY = offsetH ? offsetH * height : 0;

    let source;
    if (color && color === 'light') {
        source = darkModeIcon;
    } else if (color && color === 'dark') {
        source = lightModeIcon;
    } else {
        source = useLightTheme ? lightModeIcon : darkModeIcon;
    }

    const flexClass = ` flex items-center gap-2 ${
        textRight ? 'flex-row' : textLeft ? 'flex-row-reversed' : 'flex-col'
    }`;

    //TODO: Double-check visually hidden label (accessibility)

    return (
        <a
            href={socialData.link}
            target="_blank"
            className={`relative${showName && flexClass}`}
            // aria-label={!showName && socialData.name}
        >
            <Image
                className={`social-icon`}
                src={source}
                alt=""
                aria-hidden={true}
                width={width}
                height={height}
                style={{
                    maxHeight: height,
                    paddingTop: `${paddingY}px`,
                    paddingBottom: `${paddingY}px`,
                    objectFit: 'contain',
                }}
            />
            <span
                className={
                    !showName
                        ? 'text-sm visually-hidden'
                        : textSize || 'text-sm'
                }>
                {socialData.name}
            </span>
        </a>
    );
}
