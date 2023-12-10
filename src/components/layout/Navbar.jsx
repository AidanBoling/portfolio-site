'use client';
import Link from 'next/link';
import { useEffect } from 'react';

const navlinks = [
    { name: 'AB', href: '/', class: 'mr-auto' },
    { name: 'About', href: '#about', class: '' },
    { name: 'Work', href: '#projects', class: '' },
    { name: 'Contact', href: '#contact', class: '' },
];

export default function Navbar({ children }) {
    const linksClass =
        'font-normal dark:font-light opacity-80 hover:opacity-100 dark:opacity-70 hover:dark:opacity-90 transition';

    return (
        <header id="navbar" className="pointer-events-none">
            <div className="fixed top-0 z-40 overflow-visible w-full h-[52px] dark:h-[42px] navbar-gradient shadow-[0px_0px_14px_6px_theme(colors.slate.950_/_15%);] dark:bg-gradient-to-b dark:from-black dark:via-gray-950 dark:to-gray-950/[0.90] dark:shadow-[0px_0px_14px_14px_theme(colors.gray.950_/_90%);]">
                {/* <header className="w-screen max-h-min p-4 z-50 fixed top-0 bg-gradient-to-b from-slate-900 dark:from-bg-black dark:via-bg-gray-900 to-transparent dark:to-bg-gray-900 overflow-clip"> */}
            </div>
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
                {children}
            </div>
        </header>
    );
}
