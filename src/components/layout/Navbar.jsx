'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ThemeButton, ParallaxButton } from '@/components/siteSettingButtons';

const navlinks = [
    { name: 'AB', href: '/', class: 'mr-auto' },
    { name: 'About', href: '#about', class: '' },
    { name: 'Work', href: '#projects', class: '' },
    { name: 'Contact', href: '#contact', class: '' },
];

function SettingsMenu() {
    const [showMenu, setShowMenu] = useState(false);

    function toggleShow() {
        setShowMenu(!showMenu);
    }

    const menuItemStyle =
        'py-3 px-4 hover:bg-gray-200 hover:dark:bg-gray-900/100 hover:cursor-pointer transition w-full text-start';

    return (
        <div className="z-30 relative min-w-[30px]">
            <button
                className="peer absolute right-0 -top-[4px] opacity-80 dark:opacity-70 aria-expanded:opacity-100 hover:opacity-100 hover:dark:opacity-90 transition-opacity"
                // onBlur={() => setShowMenu(false)}
                onClick={toggleShow}
                aria-haspopup="true"
                aria-expanded={showMenu}
                aria-label="Site Settings">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.25}
                    stroke="currentColor"
                    className="w-7 h-7">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
            </button>
            {/* {showMenu && ( */}
            <div
                className="p-10 pt-3 absolute -right-10 top-[26px] hidden peer-aria-expanded:block min-w-fit"
                onPointerLeave={() => setShowMenu(false)}
                on>
                <div
                    role="menu"
                    className="bg-gray-300/90 dark:bg-gray-950/90 right-0 top-[30px] w-[240px] py-2 rounded">
                    <ThemeButton
                        className={menuItemStyle}
                        setShowMenu={setShowMenu}
                        role={'menuitem'}
                    />
                    <ParallaxButton
                        className={menuItemStyle}
                        setShowMenu={setShowMenu}
                        role={'menuitem'}
                    />
                </div>
            </div>
            {/* )} */}
        </div>
    );
}

export default function Navbar() {
    const linksClass =
        'font-normal dark:font-light opacity-80 hover:opacity-100 dark:opacity-70 hover:dark:opacity-90 transition';

    return (
        <header id="navbar" className="pointer-events-none">
            <div className="fixed top-0 z-40 overflow-visible w-full h-[52px] dark:h-[42px] navbar-gradient shadow-[0px_0px_14px_6px_theme(colors.slate.950_/_15%);] dark:bg-gradient-to-b dark:from-black dark:via-gray-950 dark:to-gray-950/[0.90] dark:shadow-[0px_0px_14px_14px_theme(colors.gray.950_/_90%);]"></div>
            <div className="fixed top-0 z-40 w-full flex p-4 px-8 gap-6">
                <nav className="contents pointer-events-none">
                    {navlinks.map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            className={linksClass + ' ' + link.class}>
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <SettingsMenu />
            </div>
        </header>
    );
}
