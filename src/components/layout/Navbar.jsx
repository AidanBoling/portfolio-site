'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
    useState,
    useEffect,
    useRef,
    // useContext
} from 'react';
// import { LightThemeContext } from '../ThemeProvider';
import { ThemeButton, ParallaxButton } from '@/components/siteSettingButtons';
import { BarsMenuIcon, GearIcon, CloseIcon } from '../icons';
import content from '@/data/siteContent.json';

function SettingsMenu() {
    const [showMenu, setShowMenu] = useState(false);

    function toggleShow() {
        setShowMenu(!showMenu);
    }

    const menuItemStyle =
        'py-3 px-4 hover:bg-blue-50 hover:dark:bg-gray-900/100 hover:cursor-pointer transition w-full text-start';

    return (
        <div className="z-30 relative min-w-[30px] self-start">
            <button
                className="peer absolute right-0 top-[1px] opacity-80 dark:opacity-70 aria-expanded:opacity-100 hover:opacity-100 hover:dark:opacity-90 transition-opacity"
                // onBlur={() => setShowMenu(false)}
                onClick={toggleShow}
                aria-haspopup="true"
                aria-expanded={showMenu}
                aria-controls="site-settings-menu">
                <span aria-hidden="true">
                    <GearIcon className="w-7 h-7" />
                </span>
                <span className="visually-hidden">Site Settings</span>
            </button>
            <div
                id="site-settings-menu"
                className="p-10 pt-3 absolute -right-10 top-[29px] hidden peer-aria-expanded:block min-w-fit"
                onPointerLeave={() => setShowMenu(false)}>
                <div
                    role="menu"
                    className="bg-gradient-to-b from-blue-50/[.98] to-blue-100/[.98] dark:bg-gradient-to-b dark:from-transparent dark:bg-gray-950/[0.95] shadow-[0px_0px_10px_3px_theme(colors.slate.950_/_10%);] right-0 top-[30px] w-[240px] py-2 rounded-sm">
                    <ThemeButton
                        className={menuItemStyle}
                        setShowMenu={setShowMenu}
                        // role={'menuitem'}
                    />
                    <ParallaxButton
                        className={menuItemStyle}
                        setShowMenu={setShowMenu}
                        // role={'menuitem'}
                    />
                </div>
            </div>
        </div>
    );
}

function MobileMenu({ links, activeId }) {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    const menuItemStyle =
        'block px-5 xxs:px-7 py-4 align-text-middle align-middle text-middle hover:bg-slate-50 hover:dark:bg-gray-900/100 hover:cursor-pointer transition w-full text-start';

    function openMenu() {
        setShowMenu(true);
    }

    function closeMenu() {
        setShowMenu(false);
        document.getElementById('open-main-menu').focus();
    }

    function handleKeyPress(event) {
        const navKeys = [
            'Tab',
            'ArrowRight',
            'ArrowDown',
            'ArrowLeft',
            'ArrowUp',
        ];

        if (event.key === 'Escape') {
            closeMenu();
            return;
        } else if (navKeys.includes(event.key)) {
            const mobileMenu = menuRef.current;
            const allFocusableItems = mobileMenu.querySelectorAll(
                'button, a, [tabindex]:not([tabindex="-1"])'
            );

            const firstItem = allFocusableItems[0];
            const lastItem = allFocusableItems[allFocusableItems.length - 1];

            const currentItem = document.activeElement;
            const currentItemIndex =
                Array.from(allFocusableItems).indexOf(currentItem);

            // Trap focus
            const nextItem =
                currentItem === lastItem
                    ? firstItem
                    : allFocusableItems[currentItemIndex + 1];
            const previousItem =
                currentItem === firstItem
                    ? lastItem
                    : allFocusableItems[currentItemIndex - 1];

            // Cycle through next/previous menu items

            event.preventDefault();

            if (
                (event.key === 'Tab' && event.shiftKey) ||
                event.key === 'ArrowLeft' ||
                event.key === 'ArrowUp'
            ) {
                previousItem.focus();
            } else {
                nextItem.focus();
            }
        }
    }

    useEffect(() => {
        if (showMenu) {
            const mobileMenu = menuRef.current;
            document.getElementById('close-main-menu').focus();

            mobileMenu.addEventListener('keydown', handleKeyPress);

            return () => {
                mobileMenu.removeEventListener('keydown', handleKeyPress);
            };
        }
    }, [showMenu]);

    const MobileNavLink = ({ link, activeId }) => {
        const isCurrent =
            activeId &&
            (activeId === 'cover'
                ? link.href === '/'
                : link.href === '/#' + activeId);

        return (
            <li>
                <Link
                    href={link.href}
                    className={menuItemStyle + ' ' + link.class}
                    onClick={closeMenu}
                    aria-current={isCurrent ? 'page' : 'false'}>
                    <span className="uppercase dark:text-sky-200">
                        {link.name}
                    </span>
                </Link>
            </li>
        );
    };

    return (
        <nav className="contents" aria-labelledby="main-menu-button">
            <button
                id="open-main-menu"
                className="peer self-end opacity-80 dark:opacity-70 aria-expanded:opacity-100 hover:opacity-100 hover:dark:opacity-90 transition-opacity"
                onClick={openMenu}
                aria-haspopup="true"
                aria-expanded={showMenu}
                aria-controls="mobile-nav-menu">
                <span aria-hidden="true">
                    <BarsMenuIcon />
                </span>
                <span className="visually-hidden">Menu</span>
            </button>
            <div
                id="mobile-nav-menu"
                className="menu absolute right-0 top-0 pl-8 w-[257px] xxs:w-[312px] h-screen hidden max-xs:peer-aria-expanded:block z-50"
                ref={menuRef}
                onPointerLeave={() => setShowMenu(false)}>
                <div className="bg-gradient-to-b from-blue-50/[.90] to-blue-100/[.80] dark:bg-gradient-to-b dark:from-transparent bg-gray-300/90 dark:bg-gray-950/[0.98] shadow-[0px_0px_18px_6px_theme(colors.slate.950_/_10%);] w-[225px] xxs:w-[280px] h-full rounded-sm z-40">
                    <div className="flex justify-end w-full">
                        <button
                            id="close-main-menu"
                            className="peer ml-auto p-4 opacity-80 dark:opacity-70 hover:opacity-100 hover:dark:opacity-90 transition-opacity"
                            onClick={closeMenu}
                            aria-haspopup="true"
                            aria-expanded={showMenu}
                            aria-controls="mobile-nav-menu">
                            <span aria-hidden="true">
                                <CloseIcon className="w-6 h-6" />
                            </span>
                            <span className="visually-hidden">Close Menu</span>
                        </button>
                    </div>

                    <ul className="divide-y-[1px] divide-gray-500/70">
                        <div>
                            {links.map(link => (
                                <MobileNavLink
                                    key={link.name}
                                    link={link}
                                    activeId={activeId}
                                />
                            ))}
                        </div>
                        <li>
                            <span className="visually-hidden">Settings</span>
                            <ul>
                                <li>
                                    <ThemeButton
                                        className={`${menuItemStyle} dark:text-gray-300/90`}
                                    />
                                </li>
                                <li>
                                    <ParallaxButton
                                        className={`${menuItemStyle} dark:text-gray-300/90`}
                                    />
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default function Navbar() {
    const [activeId, setActiveId] = useState('cover');
    const sectionIds = ['cover', 'about', 'work', 'contact'];
    let prevRatio = {};

    const pathname = usePathname();

    const navlinks = [
        { name: 'About', href: '/#about', class: '' },
        { name: 'Work', href: '/#work', class: '' },
        { name: 'Contact', href: '/#contact', class: '' },
    ];
    const mobileNavlinks = [
        { name: 'Home', href: '/', class: '' },
        ...navlinks,
    ];

    const topLinksStyle =
        'font-normal dark:font-light opacity-80 hover:opacity-100 dark:opacity-70 hover:dark:opacity-90 transition';

    const LogoLink = ({ activeId, inNav }) => {
        // const { useLightTheme } = useContext(LightThemeContext);

        const isCurrent = inNav && activeId && activeId === 'cover';
        // const logo = useLightTheme ? content.logo.light : content.logo.dark;
        const logo = content.logo;

        return (
            <Link
                href="/"
                className={`mr-auto -ml-1 -mt-2 -mb-3 self-center opacity-[0.92] hover:opacity-100 dark:opacity-[0.87] hover:dark:opacity-100 transition`}
                aria-current={isCurrent ? 'page' : 'false'}>
                <Image
                    alt=""
                    src={logo}
                    quality={100}
                    width="35"
                    height="36"
                    priority
                    style={{
                        objectFit: 'contain',
                    }}
                />
                <span className="visually-hidden">Home</span>
            </Link>
        );
    };

    const TopNavLink = ({ link, activeId }) => {
        const isCurrent = activeId && link.href === '/#' + activeId;

        return (
            <li className="contents">
                <Link
                    href={link.href}
                    className={
                        topLinksStyle +
                        ' p-[.2rem] pb-[.15rem] px-[.4rem] aria-[current=page]:link-bd-bottom-gradient-double ' +
                        link.class
                    }
                    aria-current={isCurrent ? 'page' : 'false'}>
                    {link.name}
                </Link>
            </li>
        );
    };

    useEffect(() => {
        const mainLinkPath = /^\/#/;
        if (mainLinkPath.test(pathname) || pathname === '/') {
            const options = {
                root: null,
                rootMargin: '0% 0px 0% 0px',
                threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
            };

            const observer = new IntersectionObserver(entries => {
                // console.log('Observer entries:', entries);

                entries.forEach(entry => {
                    const id = entry.target.getAttribute('id');
                    const ratio =
                        entry.intersectionRect.height /
                        (entry.rootBounds ? entry.rootBounds.height : 1);

                    if (ratio > prevRatio[id]) {
                        // console.log('Ratio increasing. Ratio: ', ratio);
                        if (ratio > 0.5) {
                            setActiveId(id);
                        }
                        // } else {
                        //     console.log('Ratio decreasing. Ratio: ', ratio);
                    }

                    prevRatio[id] = ratio;
                });
            }, options);

            sectionIds.forEach(id => {
                const currentSection = document.getElementById(id);

                if (currentSection) {
                    observer.observe(currentSection);
                }
            });

            return () => {
                sectionIds.forEach(id => {
                    const currentSection = document.getElementById(id);

                    if (currentSection) {
                        observer.unobserve(currentSection);
                    }
                });
            };
        } else {
            setActiveId(null);
            return;
        }
    }, [pathname]);

    return (
        <header id="navbar" className="pointer-events-none">
            <div className="fixed top-0 z-40 w-full overflow-visible h-[52px] dark:h-[42px] navbar-gradient shadow-[0px_0px_14px_6px_theme(colors.slate.950_/_15%);] dark:bg-gradient-to-b dark:from-black dark:via-gray-950 dark:to-gray-950/[0.90] dark:shadow-[0px_0px_14px_14px_theme(colors.gray.950_/_90%);]"></div>
            <div className="max-xs:hidden fixed top-0 z-40 w-full flex pt-[.7rem] pb-2 px-8 gap-5 items-start h-max-[42px]">
                <nav className="contents pointer-events-none">
                    {/* // aria-label={content.navLabel}
                    aria-labelledby="main-menu-label">
                    <h2 id="main-menu-label" className="visually-hidden">
                        Main Menu
                    </h2> */}
                    <ul className="contents">
                        <li className="contents">
                            <LogoLink inNav />
                        </li>
                        {navlinks.map(link => (
                            <TopNavLink
                                key={link.name}
                                link={link}
                                activeId={activeId}
                            />
                        ))}
                    </ul>
                </nav>
                <SettingsMenu />
            </div>

            <div className="xs:hidden fixed top-0 z-40 w-full flex p-4 gap-6">
                <div className="contents pointer-events-none relative">
                    <LogoLink />
                    <MobileMenu links={mobileNavlinks} activeId={activeId} />
                </div>
            </div>
        </header>
    );
}
