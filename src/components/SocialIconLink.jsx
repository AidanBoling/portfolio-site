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
}) {
    const { useLightTheme } = useContext(LightThemeContext);
    const darkModeIcon =
        (socialData.iconDark && socialData.iconDark) || socialData.icon;

    const width = (w && w) || 48;
    const height = (h && h) || width;

    const paddingY = offsetH ? offsetH * height : 0;

    return (
        <a
            href={socialData.link}
            target="_blank"
            className={showName && `flex flex-col gap-2 items-center`}>
            <Image
                className={`social-icon`}
                src={useLightTheme ? socialData.icon : darkModeIcon}
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
            {showName && <span className="text-sm">{socialData.name}</span>}
        </a>
    );
}
