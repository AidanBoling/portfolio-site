'use client';
import Image from 'next/image';
import {
    useState,
    useLayoutEffect,
    useRef,
    useEffect,
    useContext,
} from 'react';
import useResizeObserver from '@react-hook/resize-observer';
import { ParallaxContext } from '../ParallaxContextProvider';
import blueTealSmokeLeft from '@/public/blue-teal-gradient-smoke_border-left-top.png';
import blueTealSmokeRight from '@/public/blue-teal-gradient-smoke_border-right.png';

function useHeight() {
    const targetRef = useRef(null);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        const targetScrollHeight = targetRef.current?.scrollHeight;

        if (targetScrollHeight !== undefined) {
            setHeight(targetScrollHeight);
        }
    }, [targetRef]);

    useResizeObserver(targetRef, entry => {
        const contentBoxHeight = entry.contentBoxSize[0].blockSize;

        if (contentBoxHeight !== undefined) {
            setHeight(contentBoxHeight);
        }
    });

    return [targetRef, height];
}

export default function Background({ children }) {
    const { enableParallax } = useContext(ParallaxContext);
    const [parallaxFgLayer, bgHeight] = useHeight();

    const plxPerspective = 9;
    const plxZ = -3;
    const plxScale = 1 - plxZ / plxPerspective;

    useEffect(() => {
        if (enableParallax !== undefined) {
            enableParallax === true
                ? localStorage.setItem('parallax', 'true')
                : localStorage.setItem('parallax', 'false');
        }
    }, [enableParallax]);

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
            <div
                className="parallax-container h-screen w-screen relative overflow-y-scroll overflow-x-hidden"
                style={{ ...parallaxContainerStyle }}>
                <div
                    className="parallax-layer-bg w-screen h-0 relative overflow-visible"
                    style={{ ...parallaxBgLayerStyle }}>
                    <div
                        className="w-screen min-w-screen xs:max-xl:bg-min-width-md min-h-screen absolute top-0 overflow-hidden flex justify-between items-start"
                        style={{ height: bgHeight }}>
                        <div className="w-min absolute left-0 -top-10 min-w-[500px] sm:w-[100vw] sm:min-w-[600px] sm:max-w-[600px] 2xl:min-w-[820px] 2xl:max-w-[820px]">
                            <Image
                                alt=""
                                src={blueTealSmokeLeft}
                                quality={100}
                                sizes="(max-width: 768px) 100vw, 840px"
                                priority
                                style={{
                                    // minWidth: '900px',
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'contain',
                                }}
                            />
                        </div>
                        <div className="w-min absolute -right-16 xs:-right-8 top-[45%] sm:-right-5 xl:top-[45vh] min-w-[200px] lg:min-w-[250px] 2xl:min-w-[350px]">
                            <Image
                                alt=""
                                src={blueTealSmokeRight}
                                quality={100}
                                sizes="300px"
                                priority
                                style={{
                                    // minWidth: '900px',
                                    // maxWidth: '350px',
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
