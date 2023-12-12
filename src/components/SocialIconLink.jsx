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
}) {
    const { useLightTheme } = useContext(LightThemeContext);
    const darkModeIcon =
        (socialData.iconDark && socialData.iconDark) || socialData.icon;

    const width = (w && w) || 48;
    const height = (h && h) || width;

    const paddingY = offsetH ? offsetH * height : 0;

    let source;
    if (color && color === 'light') {
        source = darkModeIcon;
    } else if (color && color === 'dark') {
        source = socialData.icon;
    } else {
        source = useLightTheme ? socialData.icon : darkModeIcon;
    }

    //TODO: Check visually hidden label (accessibility)

    return (
        <a
            href={socialData.link}
            target="_blank"
            className={`relative${
                showName && ' flex flex-col gap-2 items-center'
            }`}
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
            <span className={!showName ? 'text-sm visually-hidden' : 'text-sm'}>
                {socialData.name}
            </span>
        </a>
    );
}
