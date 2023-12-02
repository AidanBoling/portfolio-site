'use client';
import Image from 'next/image';
import { useState, useLayoutEffect, useRef, useEffect } from 'react';
import useResizeObserver from '@react-hook/resize-observer';

import bluePurpleSmokeColumnLeft from '@/public/blue-purple-gradient-smoke-column-left.png';
import bluePurpleSmokeColumnRight from '@/public/blue-purple-gradient-smoke-column-right.png';
import blueTealSmoke from '@/public/blue-teal-gradient-smoke.png';
import blueTealSmokeVertical from '@/public/blue-teal-gradient-smoke-vertical.png';
import blueTealSmokeLeft from '@/public/blue-teal-gradient-smoke_border-left-top.png';
import blueTealSmokeRight from '@/public/blue-teal-gradient-smoke_border-right.png';

function useHeight() {
    const targetRef = useRef(null);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        const targetScrollHeight = targetRef.current?.scrollHeight;
        // console.log('ScrollHeight: ', targetScrollHeight);
        if (targetScrollHeight !== undefined) {
            setHeight(targetScrollHeight);
        }
    }, [targetRef]);

    useResizeObserver(targetRef, entry => {
        const contentBoxHeight = entry.contentBoxSize[0].blockSize;
        // console.log('contentBoxHeight ', contentBoxHeight);

        if (contentBoxHeight !== undefined) {
            setHeight(contentBoxHeight);
        }
    });

    console.log('New height: ', height);
    return [targetRef, height];
}

function ParallaxButton({ enableParallax, setEnableParallax }) {
    const text = {
        isOn: 'Disable parallax scroll effect',
        isOff: 'Enable parallax scroll effect',
    };
    const [isPressed, setIsPressed] = useState(enableParallax);
    const [buttonText, setButtonText] = useState();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        isPressed ? setButtonText(text.isOn) : setButtonText(text.isOff);
        setMounted(true);
    }, [isPressed]);

    function toggleParallax() {
        setIsPressed(!isPressed);
        setEnableParallax(!isPressed);
    }

    if (!mounted) return null;

    return (
        <div className="group">
            <button
                id="btn"
                aria-pressed={isPressed}
                onClick={toggleParallax}
                className={`switch group ml-auto mb-1 z-30 relative mx-auto`}
                aria-label={buttonText}
                aria-labelledby="btnLabel">
                <span
                    aria-hidden="true"
                    className="slider outline outline-1 outline-indigo-500/50 border-blue-300/60 before:bg-gray-400/80 group-aria-pressed:before:bg-gray-200/80 bg-clip-content backdrop-brightness-125 bg-gradient-to-r from-teal-500/40 to-indigo-800/50 group-aria-pressed:bg-gradient-to-r group-aria-pressed:from-teal-500/70 group-aria-pressed:to-indigo-600/90"></span>
            </button>
            <div
                id="btnLabel"
                className="text-xs text-center text-gray-400 group-hover:text-white transition">
                Parallax
            </div>
        </div>
    );
}

function ThemeButton({ useLightTheme, setUseLightTheme }) {
    const text = {
        isLight: 'Toggle dark mode',
        isDark: 'Toggle light mode',
    };
    const [isPressed, setIsPressed] = useState(useLightTheme);
    const [btnText, setBtnText] = useState();
    const [mounted, setMounted] = useState(false);

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
    }

    if (!mounted) return null;

    return (
        <div className="group">
            <button
                id="btn"
                aria-pressed={isPressed}
                onClick={toggleTheme}
                className={`switch group ml-auto mb-1 z-30 relative mx-auto`}
                aria-label={btnText}
                aria-labelledby="btnLabel">
                <span
                    aria-hidden="true"
                    className="slider outline outline-1 outline-indigo-500/50 border-blue-300/60 before:bg-gray-400/80 group-aria-pressed:before:bg-gray-200/80 bg-clip-content backdrop-brightness-125 bg-gradient-to-r from-teal-500/40 to-indigo-800/50 group-aria-pressed:bg-gradient-to-r group-aria-pressed:from-teal-500/70 group-aria-pressed:to-indigo-600/90"></span>
            </button>
            <div
                id="btnLabel"
                className="text-xs text-center text-gray-400 group-hover:text-white transition">
                Theme
            </div>
        </div>
    );
}

export default function Background({ children }) {
    const [useLightTheme, setUseLightTheme] = useState();
    const [enableParallax, setEnableParallax] = useState();
    const [parallaxFgLayer, bgHeight] = useHeight();

    const plxPerspective = 9;
    const plxZ = -3;
    const plxScale = 1 - plxZ / plxPerspective;

    // Dark/light mode

    useEffect(() => {
        const prefersDarkTheme =
            window.matchMedia('(prefers-color-scheme: dark)').matches === true;

        if ('theme' in localStorage) {
            localStorage.theme === 'dark'
                ? setUseLightTheme(false)
                : setUseLightTheme(true);
        } else {
            setUseLightTheme(!prefersDarkTheme);
        }
    }, []);

    useEffect(() => {
        if (useLightTheme !== undefined) {
            if (useLightTheme === true) {
                console.log('Prefers theme: light');
                document.documentElement.classList.remove('dark');
            } else {
                console.log('Prefers theme: dark');
                document.documentElement.classList.add('dark');
            }
        }
    }, [useLightTheme]);

    // Parallax

    useEffect(() => {
        const prefersReduced =
            window.matchMedia(`(prefers-reduced-motion: reduce)`).matches ===
            true;
        const userOverride = localStorage.getItem('parallax');
        console.log('User local storage parallax: ', userOverride);

        if (userOverride) {
            userOverride === 'true'
                ? setEnableParallax(true)
                : setEnableParallax(false);
        } else {
            setEnableParallax(!prefersReduced);
        }
    }, []);

    useEffect(() => {
        if (enableParallax !== undefined) {
            enableParallax === true
                ? localStorage.setItem('parallax', 'true')
                : localStorage.setItem('parallax', 'false');
        }
    }, [enableParallax]);

    // function toggleParallax() {
    //     setEnableParallax(!enableParallax);
    // }

    let parallaxContainerStyle;
    let parallaxBgLayerStyle;

    if (enableParallax) {
        parallaxContainerStyle = {
            transformStyle: 'preserve-3d',
            perspective: `${plxPerspective}px`,
            perspectiveOrigin: 'top',
        };

        parallaxBgLayerStyle = {
            transform: `translateZ(${plxZ}px) scale(${plxScale})`,
        };
    }

    return (
        <>
            <div className="w-screen h-full absolute bg-geometric-pattern bg-smaller bg-fixed opacity-[.10]"></div>
            <div className="group z-30 fixed top-0 right-0 m-6 max-w-max opacity-50 focus-within:opacity-100 hover:opacity-100 transition-opacity">
                {useLightTheme !== undefined && (
                    <ThemeButton
                        useLightTheme={useLightTheme}
                        setUseLightTheme={setUseLightTheme}
                    />
                )}
                {enableParallax !== undefined && (
                    <ParallaxButton
                        enableParallax={enableParallax}
                        setEnableParallax={setEnableParallax}
                    />
                )}
            </div>
            <div
                className="parallax-container h-screen w-screen relative overflow-y-scroll overflow-x-hidden"
                style={{ ...parallaxContainerStyle }}>
                <div
                    className="parallax-layer-bg w-screen h-0 relative overflow-visible"
                    style={{ ...parallaxBgLayerStyle }}>
                    <div
                        className="w-screen min-w-[1024px] min-h-screen absolute top-0 overflow-hidden flex justify-between items-start"
                        // ref={parallaxBackgroundRef}
                        style={{ height: bgHeight }}>
                        <div className="w-min absolute left-0 min-w-[450px] sm:w-[100vw] max-w-[650px]">
                            <Image
                                alt="..."
                                src={blueTealSmokeLeft}
                                quality={100}
                                sizes="(max-width: 768px) 100vw, 750px"
                                priority
                                style={{
                                    // minWidth: '900px',
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'contain',
                                }}
                            />
                        </div>
                        <div className="w-min absolute right-0 top-[200px]">
                            <Image
                                alt="..."
                                src={blueTealSmokeRight}
                                quality={100}
                                sizes="850px"
                                priority
                                style={{
                                    // minWidth: '900px',
                                    maxWidth: '350px',
                                    height: 'auto',
                                    objectFit: 'contain',
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div
                    className="parallax-layer-fg w-screen h-min min-h-screen absolute top-0"
                    ref={parallaxFgLayer}>
                    {children}
                </div>
            </div>
        </>
    );
}

//
//
// TEMP Archive ---------------------------
//

// {/* <div className="w-min right-0 self-end z-10">
//                 <Image
//                     alt="..."
//                     src={bluePurpleSmokeColumnRight}
//                     // placeholder="blur"
//                     quality={100}
//                     // sizes="30vw"
//                     priority
//                     style={{
//                         // minWidth: '900px',
//                         maxWidth: '20vw',
//                         height: 'auto',
//                         objectFit: 'contain',
//                     }}
//                 />
//             </div> */}
//                 {/* <div className="container h-max absolute top-0 z-10">
//                 <Image
//                     alt="..."
//                     src={bluePurpleSmokeColumnLeft}
//                     // placeholder="blur"
//                     quality={100}
//                     sizes="20vw"
//                     priority
//                     style={{
//                         // minWidth: '900px',
//                         maxWidth: '20%',
//                         height: 'auto',
//                         objectFit: 'contain',
//                     }}
//                 />
//             </div> */}
//                 {/* <div className="h-min w-full absolute top-0 z-10">
//                 <Image
//                     alt="..."
//                     src={blueTealSmoke}
//                     // placeholder="blur"
//                     quality={100}
//                     sizes="100vw"
//                     priority
//                     style={{
//                         // minWidth: '900px',
//                         minWidth: '100vw',
//                         // height: 'auto',
//                         objectFit: 'cover',
//                         transform: 'translateY(-35%)',
//                     }}
//                 />
//             </div> */}

// //
// {/* <div className="w-screen min-w-[1024px] h-min absolute top-0 flex justify-between items-start parallax-layer-bg">
//                         <div className="w-min absolute left-0 -z-10 min-w-[600px] sm:w-[110vw] max-w-[800px] rotate-[.03turn] translate-x-[-31.5%] translate-y-[-42%] motion-reduce:translate-y-[-12%]">
//                             <Image
//                                 alt="..."
//                                 src={blueTealSmokeVertical}
//                                 quality={100}
//                                 sizes="(max-width: 768px) 100vw, 800px"
//                                 priority
//                                 style={{
//                                     // minWidth: '900px',
//                                     width: '100%',
//                                     height: 'auto',
//                                     objectFit: 'contain',
//                                 }}
//                             />
//                         </div>
//                         <div className="w-min absolute right-0 -z-10 rotate-[-.04turn] translate-x-[70%] translate-y-[-42%] motion-reduce:translate-y-[-12%]">
//                             <Image
//                                 alt="..."
//                                 src={blueTealSmokeVertical}
//                                 quality={100}
//                                 sizes="850px"
//                                 priority
//                                 style={{
//                                     // minWidth: '900px',
//                                     maxWidth: '850px',
//                                     height: 'auto',
//                                     objectFit: 'contain',
//                                 }}
//                             />
//                         </div>
//                     </div> */}

//
//
//   {/* <div className="flex flex-col h-full relative"> */}
//                     {/* <div className="w-screen h-full bg-gradient-to-t from-slate-900 to-slate-925 fixed bg-fixed"></div> */}
//                     {/* <div className="w-screen h-full min-h-screen fixed bg-geometric-pattern bg-smaller opacity-[.14]"></div> */}

//
//
// //
// {/* <div className="parallax-wrapper relative"> */}
//             {/* <div className="w-screen h-screen parallax-container z-10"> */}
//             {/* <div className="w-screen min-w-[1024px] h-screen absolute top-0 flex justify-between items-start parallax-layer-bg">
//                     <div className="w-min absolute left-0 min-w-[450px] sm:w-[100vw] max-w-[650px]">
//                         <Image
//                             alt="..."
//                             src={blueTealSmokeLeft}
//                             quality={100}
//                             sizes="(max-width: 768px) 100vw, 750px"
//                             priority
//                             style={{
//                                 // minWidth: '900px',
//                                 width: '100%',
//                                 height: 'auto',
//                                 objectFit: 'contain',
//                             }}
//                         />
//                     </div>
//                     <div className="w-min absolute right-0 top-[200px]">
//                         <Image
//                             alt="..."
//                             src={blueTealSmokeRight}
//                             quality={100}
//                             sizes="850px"
//                             priority
//                             style={{
//                                 // minWidth: '900px',
//                                 maxWidth: '350px',
//                                 height: 'auto',
//                                 objectFit: 'contain',
//                             }}
//                         />
//                     </div>
//                 </div> */}
//             {/* </div> */}
//             {/* <div className="w-screen relative overflow-y-scroll">
//                     <div className="flex flex-col min-h-screen">
//                         <div className="grow h-full children px-64 mb-auto"> */}
//             {/* <div className="bg-slate-700 my-12 p-12">
//                                 <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Praesent a elit quis risus
//                                     imperdiet scelerisque quis vitae nisl. Sed
//                                     dignissim sed odio id vehicula. Fusce
//                                     pellentesque dui leo. Suspendisse potenti.
//                                     Vivamus imperdiet justo eget nisl semper
//                                     congue. Pellentesque volutpat elit quam, at
//                                     ornare nisi semper sed. Sed vel urna vitae
//                                     risus volutpat faucibus. Praesent hendrerit
//                                     dui at neque consectetur, non efficitur mi
//                                     pharetra. Pellentesque porttitor sapien
//                                     sollicitudin turpis viverra luctus ac non
//                                     dui. Nunc maximus sem sit amet iaculis
//                                     venenatis. Sed vitae imperdiet tellus. Etiam
//                                     venenatis vehicula lobortis. Praesent in
//                                     aliquam orci, sit amet commodo nibh. In nisi
//                                     tortor, finibus eget pellentesque quis,
//                                     viverra id lorem. Pellentesque habitant
//                                     morbi tristique senectus et netus et
//                                     malesuada fames ac turpis egestas. Praesent
//                                     tempor feugiat dui at eleifend.
//                                 </p>
//                                 <p>
//                                     Maecenas id molestie diam. Aliquam rhoncus
//                                     justo id nisi eleifend scelerisque. In lacus
//                                     dui, porta nec cursus non, bibendum a quam.
//                                     Nunc sodales volutpat purus eget viverra.
//                                     Donec pharetra pharetra ex, nec rhoncus urna
//                                     viverra nec. Maecenas ultricies ultricies
//                                     quam, non mattis massa fringilla sit amet.
//                                     Curabitur laoreet, est non semper mattis,
//                                     ipsum lorem dignissim neque, non viverra mi
//                                     mi eu ex. Nullam vulputate aliquet quam nec
//                                     lobortis. Pellentesque feugiat cursus
//                                     pellentesque. Vestibulum ante ipsum primis
//                                     in faucibus orci luctus et ultrices posuere
//                                     cubilia curae; Mauris lacinia eget sem in
//                                     tempus. Aenean aliquam risus risus. Cras
//                                     interdum posuere quam, ut iaculis libero
//                                     rutrum id. Mauris facilisis nunc vehicula
//                                     justo aliquet scelerisque eget sed nunc.
//                                     Integer porttitor urna nec nunc faucibus
//                                     pulvinar. Nam eget dui sollicitudin,
//                                     suscipit lorem non, congue velit.
//                                 </p> */}
//             {/* <p>
//                             Quisque lobortis porttitor nisi in volutpat. Aliquam
//                             gravida nibh ac congue congue. Suspendisse blandit,
//                             est vel pretium rutrum, tellus lacus iaculis nisl,
//                             eget vulputate sapien tellus et diam. Morbi in dui
//                             vitae mi fermentum tristique. Fusce consectetur
//                             libero ornare, pharetra enim eu, tincidunt elit.
//                             Nulla ornare sodales risus, sit amet ullamcorper
//                             velit pharetra ut. Duis imperdiet ultrices erat, eu
//                             semper ipsum egestas quis. Maecenas pharetra ipsum
//                             sollicitudin ante dictum, vel mollis tellus feugiat.
//                             Sed volutpat, lacus auctor luctus iaculis, nulla
//                             enim euismod erat, et rhoncus mi nisi sit amet dui.
//                             Vivamus ac fermentum nisi. Duis in porta dui.
//                             Praesent eget arcu consequat, tempor erat sed,
//                             ornare augue.
//                         </p> */}
//             {/* <p>
//                             Cras ut turpis rhoncus, aliquet lorem sed, molestie
//                             lorem. Maecenas et felis nibh. Quisque et malesuada
//                             est, id venenatis purus. Praesent dictum elementum
//                             libero sed tempus. Mauris pharetra suscipit
//                             bibendum. Quisque semper bibendum tincidunt. Aenean
//                             vitae tempus ligula. Aenean venenatis imperdiet urna
//                             eu lobortis. Mauris bibendum cursus consequat.
//                             Maecenas eleifend fermentum nunc eu varius.
//                             Phasellus dictum, justo dapibus volutpat vulputate,
//                             purus est accumsan sapien, id mattis lectus est a
//                             elit. Mauris arcu est, mollis a libero sed,
//                             scelerisque gravida nunc. Mauris eu dui dictum,
//                             fringilla sem ut, molestie enim. Quisque
//                             pellentesque nisi non sollicitudin congue. Quisque a
//                             malesuada turpis, at sagittis tortor. Praesent
//                             facilisis, tortor a iaculis ornare, urna sapien
//                             iaculis erat, vel dapibus purus nulla eu urna.
//                         </p> */}
//             {/* <p>
//                             Cras consequat lectus ligula, at dignissim ex
//                             accumsan a. Suspendisse mauris lacus, volutpat at
//                             scelerisque quis, cursus id sapien. Vivamus vel
//                             lacinia sapien. Curabitur arcu arcu, luctus vel ex
//                             in, accumsan semper velit. Donec in rutrum nibh.
//                             Praesent enim est, eleifend eget augue non, luctus
//                             commodo metus. Nunc vulputate felis non lectus
//                             consequat, id aliquam odio consequat. Maecenas
//                             porttitor ultrices eleifend. Donec vitae turpis
//                             libero. Morbi vehicula ipsum vel nunc ultrices
//                             dictum. In consectetur non ligula et porta. Etiam
//                             nunc turpis, tincidunt a pharetra non, laoreet sed
//                             est. Phasellus fermentum turpis odio, nec hendrerit
//                             purus pulvinar mattis. Nam vestibulum ac purus non
//                             elementum. Nam at porttitor leo.
//                         </p> */}
//             {/* </div>
//                         </div>
//                         <div>{children}</div>
//                     </div>
//                 </div>
//             </div> */}

//             {/* <div className="parallax-container h-[90vh] w-screen relative overflow-y-scroll overflow-x-hidden">
//                 <div
//                     className="parallax-layer-bg w-screen bg-rose-700 mx-auto relative overflow-visible"
//                     ref={parallaxBackgroundRef}
//                     style={{
//                         height: 0,
//                         transform: `translateZ(-1px) scale(1.11)`,
//                     }}>
//                     <div
//                         className="flex flex-col w-screen justify-center absolute top-0 overflow-hidden bg-rose-900"
//                         style={{ height: bgHeight }}>
//                         <p className="text-4xl">1</p>
//                         <p className="text-4xl">2</p>
//                         <p className="text-4xl">3</p>
//                         <p className="text-4xl">4</p>
//                         <p className="text-4xl">5</p>
//                         <p className="text-4xl">Hello world</p>
//                         <p className="text-4xl">Hello world</p>
//                         <p className="text-4xl">Hello world</p>
//                         <p className="text-4xl">Hello world</p>
//                         <p className="text-4xl">Hello world</p>
//                         <p className="text-4xl">Hello world</p>
//                         <p className="text-4xl">Hello world</p>
//                         <p className="text-4xl">Hello world</p>
//                         <p className="text-4xl">Hello world</p>
//                         <p className="text-4xl">Hello world</p>
//                     </div>
//                 </div>
//                 <div
//                     className="parallax-layer-fg w-full h-min absolute top-0"
//                     ref={parallaxFgLayer}> */}
//             {/* <div className=""> */}
//             {/* <div
//                         className={`content w-[200px] bg-gray-600 mx-auto mt-[100px]`}
//                         ref={parallaxForegroundRef}
//                         style={{ height: fgHeight }}> */}
//             {/* <details className="p-6" open>
//                             <summary className="text-sm leading-6 text-white font-semibold select-none">
//                                 Why do they call it Ovaltine?
//                             </summary>
//                             <div className="mt-16 text-sm leading-6 text-slate-600 dark:text-slate-400">
//                                 <p>
//                                     The mug is round. The jar is round. They
//                                     should call it Roundtine.
//                                 </p>
//                             </div>
//                         </details> */}
//             {/* <button
//                             onClick={() =>
//                                 handleClick(parallaxForegroundRef.current)
//                             }>
//                             Expand Element Toggle
//                         </button>
//                     </div> */}
//             {/* </div> */}
//             {/* </div>
//             </div> */}

//
//
//
// //{/* <div
// className="child-container flex flex-col w-[600px] h-min bg-gray-600/50 mx-auto"
// // ref={parallaxForegroundRef}
// // style={{ height: fgHeight }}
// > */}
// {/* <div className="child w-[400px] bg-gray-900 mx-auto mt-[100px]">
// <details
//     className="p-6"
//     open>
//     <summary className="text-sm leading-6 text-white select-none">
//         <p>
//             Lorem ipsum dolor sit amet, consectetur
//             adipiscing elit. Praesent a elit quis risus
//             imperdiet scelerisque quis vitae nisl. Sed
//             dignissim sed odio id vehicula. Fusce
//             pellentesque dui leo. Suspendisse potenti.
//             Vivamus imperdiet justo eget nisl semper
//             congue. Pellentesque volutpat elit quam, at
//             ornare nisi semper sed. Sed vel urna vitae
//             risus volutpat faucibus. Praesent hendrerit
//             dui at neque consectetur, non efficitur mi
//             pharetra. Pellentesque porttitor sapien
//             sollicitudin turpis viverra luctus ac non
//             dui. Nunc maximus sem sit amet iaculis
//             venenatis. Sed vitae imperdiet tellus. Etiam
//             venenatis vehicula lobortis. Praesent in
//             aliquam orci, sit amet commodo nibh. In nisi
//             tortor, finibus eget pellentesque quis,
//             viverra id lorem. Pellentesque habitant
//             morbi tristique senectus et netus et
//             malesuada fames ac turpis egestas. Praesent
//             tempor feugiat dui at eleifend.
//         </p>
//     </summary>
//     <div className="mt-16 text-sm leading-6 text-white">
//         <p>
//             Maecenas id molestie diam. Aliquam rhoncus
//             justo id nisi eleifend scelerisque. In lacus
//             dui, porta nec cursus non, bibendum a quam.
//             Nunc sodales volutpat purus eget viverra.
//             Donec pharetra pharetra ex, nec rhoncus urna
//             viverra nec. Maecenas ultricies ultricies
//             quam, non mattis massa fringilla sit amet.
//             Curabitur laoreet, est non semper mattis,
//             ipsum lorem dignissim neque, non viverra mi
//             mi eu ex. Nullam vulputate aliquet quam nec
//             lobortis. Pellentesque feugiat cursus
//             pellentesque. Vestibulum ante ipsum primis
//             in faucibus orci luctus et ultrices posuere
//             cubilia curae; Mauris lacinia eget sem in
//             tempus. Aenean aliquam risus risus. Cras
//             interdum posuere quam, ut iaculis libero
//             rutrum id. Mauris facilisis nunc vehicula
//             justo aliquet scelerisque eget sed nunc.
//             Integer porttitor urna nec nunc faucibus
//             pulvinar. Nam eget dui sollicitudin,
//             suscipit lorem non, congue velit.
//         </p>
//         <p>
//             Quisque lobortis porttitor nisi in volutpat.
//             Aliquam gravida nibh ac congue congue.
//             Suspendisse blandit, est vel pretium rutrum,
//             tellus lacus iaculis nisl, eget vulputate
//             sapien tellus et diam. Morbi in dui vitae mi
//             fermentum tristique. Fusce consectetur
//             libero ornare, pharetra enim eu, tincidunt
//             elit. Nulla ornare sodales risus, sit amet
//             ullamcorper velit pharetra ut. Duis
//             imperdiet ultrices erat, eu semper ipsum
//             egestas quis. Maecenas pharetra ipsum
//             sollicitudin ante dictum, vel mollis tellus
//             feugiat. Sed volutpat, lacus auctor luctus
//             iaculis, nulla enim euismod erat, et rhoncus
//             mi nisi sit amet dui. Vivamus ac fermentum
//             nisi. Duis in porta dui. Praesent eget arcu
//             consequat, tempor erat sed, ornare augue.
//         </p>
//         <p>
//             Cras ut turpis rhoncus, aliquet lorem sed,
//             molestie lorem. Maecenas et felis nibh.
//             Quisque et malesuada est, id venenatis
//             purus. Praesent dictum elementum libero sed
//             tempus. Mauris pharetra suscipit bibendum.
//             Quisque semper bibendum tincidunt. Aenean
//             vitae tempus ligula. Aenean venenatis
//             imperdiet urna eu lobortis. Mauris bibendum
//             cursus consequat. Maecenas eleifend
//             fermentum nunc eu varius. Phasellus dictum,
//             justo dapibus volutpat vulputate, purus est
//             accumsan sapien, id mattis lectus est a
//             elit. Mauris arcu est, mollis a libero sed,
//             scelerisque gravida nunc. Mauris eu dui
//             dictum, fringilla sem ut, molestie enim.
//             Quisque pellentesque nisi non sollicitudin
//             congue. Quisque a malesuada turpis, at
//             sagittis tortor. Praesent facilisis, tortor
//             a iaculis ornare, urna sapien iaculis erat,
//             vel dapibus purus nulla eu urna.
//         </p>
//         <p>
//             Cras consequat lectus ligula, at dignissim
//             ex accumsan a. Suspendisse mauris lacus,
//             volutpat at scelerisque quis, cursus id
//             sapien. Vivamus vel lacinia sapien.
//             Curabitur arcu arcu, luctus vel ex in,
//             accumsan semper velit. Donec in rutrum nibh.
//             Praesent enim est, eleifend eget augue non,
//             luctus commodo metus. Nunc vulputate felis
//             non lectus consequat, id aliquam odio
//             consequat. Maecenas porttitor ultrices
//             eleifend. Donec vitae turpis libero. Morbi
//             vehicula ipsum vel nunc ultrices dictum. In
//             consectetur non ligula et porta. Etiam nunc
//             turpis, tincidunt a pharetra non, laoreet
//             sed est. Phasellus fermentum turpis odio,
//             nec hendrerit purus pulvinar mattis. Nam
//             vestibulum ac purus non elementum. Nam at
//             porttitor leo.
//         </p>
//     </div>
// </details>
// </div> */}

// {/* <button
//     onClick={() =>
//         handleClick(parallaxForegroundRef.current)
//     }>
//     Expand Element Toggle
// </button> */}

// {/* <div className="children grow h-full px-64 mb-auto"> */}

// {/* <div className="bg-slate-700 my-12 p-12">
//             <p>
//                 Lorem ipsum dolor sit amet, consectetur
//                 adipiscing elit. Praesent a elit quis risus
//                 imperdiet scelerisque quis vitae nisl. Sed
//                 dignissim sed odio id vehicula. Fusce
//                 pellentesque dui leo. Suspendisse potenti.
//                 Vivamus imperdiet justo eget nisl semper
//                 congue. Pellentesque volutpat elit quam, at
//                 ornare nisi semper sed. Sed vel urna vitae
//                 risus volutpat faucibus. Praesent hendrerit
//                 dui at neque consectetur, non efficitur mi
//                 pharetra. Pellentesque porttitor sapien
//                 sollicitudin turpis viverra luctus ac non
//                 dui. Nunc maximus sem sit amet iaculis
//                 venenatis. Sed vitae imperdiet tellus. Etiam
//                 venenatis vehicula lobortis. Praesent in
//                 aliquam orci, sit amet commodo nibh. In nisi
//                 tortor, finibus eget pellentesque quis,
//                 viverra id lorem. Pellentesque habitant
//                 morbi tristique senectus et netus et
//                 malesuada fames ac turpis egestas. Praesent
//                 tempor feugiat dui at eleifend.
//             </p>
//             <p>
//                 Maecenas id molestie diam. Aliquam rhoncus
//                 justo id nisi eleifend scelerisque. In lacus
//                 dui, porta nec cursus non, bibendum a quam.
//                 Nunc sodales volutpat purus eget viverra.
//                 Donec pharetra pharetra ex, nec rhoncus urna
//                 viverra nec. Maecenas ultricies ultricies
//                 quam, non mattis massa fringilla sit amet.
//                 Curabitur laoreet, est non semper mattis,
//                 ipsum lorem dignissim neque, non viverra mi
//                 mi eu ex. Nullam vulputate aliquet quam nec
//                 lobortis. Pellentesque feugiat cursus
//                 pellentesque. Vestibulum ante ipsum primis
//                 in faucibus orci luctus et ultrices posuere
//                 cubilia curae; Mauris lacinia eget sem in
//                 tempus. Aenean aliquam risus risus. Cras
//                 interdum posuere quam, ut iaculis libero
//                 rutrum id. Mauris facilisis nunc vehicula
//                 justo aliquet scelerisque eget sed nunc.
//                 Integer porttitor urna nec nunc faucibus
//                 pulvinar. Nam eget dui sollicitudin,
//                 suscipit lorem non, congue velit.
//             </p> */}
// {/* <p>
//             Quisque lobortis porttitor nisi in volutpat. Aliquam
//             gravida nibh ac congue congue. Suspendisse blandit,
//             est vel pretium rutrum, tellus lacus iaculis nisl,
//             eget vulputate sapien tellus et diam. Morbi in dui
//             vitae mi fermentum tristique. Fusce consectetur
//             libero ornare, pharetra enim eu, tincidunt elit.
//             Nulla ornare sodales risus, sit amet ullamcorper
//             velit pharetra ut. Duis imperdiet ultrices erat, eu
//             semper ipsum egestas quis. Maecenas pharetra ipsum
//             sollicitudin ante dictum, vel mollis tellus feugiat.
//             Sed volutpat, lacus auctor luctus iaculis, nulla
//             enim euismod erat, et rhoncus mi nisi sit amet dui.
//             Vivamus ac fermentum nisi. Duis in porta dui.
//             Praesent eget arcu consequat, tempor erat sed,
//             ornare augue.
//         </p> */}
// {/* <p>
//             Cras ut turpis rhoncus, aliquet lorem sed, molestie
//             lorem. Maecenas et felis nibh. Quisque et malesuada
//             est, id venenatis purus. Praesent dictum elementum
//             libero sed tempus. Mauris pharetra suscipit
//             bibendum. Quisque semper bibendum tincidunt. Aenean
//             vitae tempus ligula. Aenean venenatis imperdiet urna
//             eu lobortis. Mauris bibendum cursus consequat.
//             Maecenas eleifend fermentum nunc eu varius.
//             Phasellus dictum, justo dapibus volutpat vulputate,
//             purus est accumsan sapien, id mattis lectus est a
//             elit. Mauris arcu est, mollis a libero sed,
//             scelerisque gravida nunc. Mauris eu dui dictum,
//             fringilla sem ut, molestie enim. Quisque
//             pellentesque nisi non sollicitudin congue. Quisque a
//             malesuada turpis, at sagittis tortor. Praesent
//             facilisis, tortor a iaculis ornare, urna sapien
//             iaculis erat, vel dapibus purus nulla eu urna.
//         </p> */}
// {/* <p>
//             Cras consequat lectus ligula, at dignissim ex
//             accumsan a. Suspendisse mauris lacus, volutpat at
//             scelerisque quis, cursus id sapien. Vivamus vel
//             lacinia sapien. Curabitur arcu arcu, luctus vel ex
//             in, accumsan semper velit. Donec in rutrum nibh.
//             Praesent enim est, eleifend eget augue non, luctus
//             commodo metus. Nunc vulputate felis non lectus
//             consequat, id aliquam odio consequat. Maecenas
//             porttitor ultrices eleifend. Donec vitae turpis
//             libero. Morbi vehicula ipsum vel nunc ultrices
//             dictum. In consectetur non ligula et porta. Etiam
//             nunc turpis, tincidunt a pharetra non, laoreet sed
//             est. Phasellus fermentum turpis odio, nec hendrerit
//             purus pulvinar mattis. Nam vestibulum ac purus non
//             elementum. Nam at porttitor leo.
//         </p> */}
// {/* </div> */}

// {/* </div> */}
// {/* </div> */}

//

//
// //
// {/* <div className="w-screen h-screen absolute bg-geometric-pattern bg-smaller opacity-[.14]"></div>
//             <div className="parallax-wrapper h-full relative">
//                 <div className="flex flex-col w-screen h-full absolute parallax-container -z-10">
//                     <div className="w-screen min-w-[1024px] h-full absolute top-0 flex justify-between items-start parallax-layer-bg">
//                         <div className="w-min absolute left-0 -z-10 min-w-[450px] sm:w-[100vw] max-w-[650px]">
//                             <Image
//                                 alt="..."
//                                 src={blueTealSmokeLeft}
//                                 quality={100}
//                                 sizes="(max-width: 768px) 100vw, 750px"
//                                 priority
//                                 style={{
//                                     // minWidth: '900px',
//                                     width: '100%',
//                                     height: 'auto',
//                                     objectFit: 'contain',
//                                 }}
//                             />
//                         </div>
//                         <div className="w-min absolute right-0 -z-10 top-[200px]">
//                             <Image
//                                 alt="..."
//                                 src={blueTealSmokeRight}
//                                 quality={100}
//                                 sizes="850px"
//                                 priority
//                                 style={{
//                                     // minWidth: '900px',
//                                     maxWidth: '350px',
//                                     height: 'auto',
//                                     objectFit: 'contain',
//                                 }}
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-screen h-full absolute z-0">{children}</div>
//             </div> */}

//
//
//
// // const footerHeight = '140px';
// const screenHeight = 100vh - footerHeight

// const [isOpen, setIsOpen] = useState(false);
// const [bgHeight, setBgHeight] = useState(0);
// // const [fgHeight, setFgHeight] = useState(0);

// // const [bgTranslateY, setBgTranslateY] = useState(0);
// const parallaxBackgroundRef = useRef(null);
// // const parallaxForegroundRef = useRef(null);
// const parallaxFgLayer = useRef(null);

// // useLayoutEffect(() => {
// //     const fgScrollHeight = parallaxFgLayer.current?.scrollHeight;
// //     // const bgScrollHeight = parallaxBackgroundRef.current.scrollHeight;
// //     if (bgHeight !== fgScrollHeight) {
// //         setBgHeight(fgScrollHeight);
// //     }
// // }, [parallaxFgLayer]);

// useEffect(() => {
//     const fgScrollHeight = parallaxFgLayer.current.scrollHeight;
//     // const bgScrollHeight = parallaxBackgroundRef.current.scrollHeight;
//     if (bgHeight !== fgScrollHeight) {
//         setBgHeight(fgScrollHeight);
//     }
// }, [parallaxFgLayer.current?.scrollHeight]);

// useEffect(() => {
//     const fgScrollHeight = parallaxFgLayer.current.scrollHeight;

//     console.log('FG scroll height (FgLayer): ', fgScrollHeight);
//     console.log('bgHeight: ', bgHeight);
//     // console.log('BG height: ', parallaxBackgroundRef.current.offsetHeight);
//     // console.log('BG scroll height: ', bgScrollHeight);
// }, [bgHeight]);

// function handleToggle() {
//     setIsOpen(!isOpen);
// }
