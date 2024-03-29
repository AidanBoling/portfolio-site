'use client';
import Image from 'next/image';
import OuterContainer from '../layout/OuterContainer';
import useMediaQuery from '@/utils/useMediaQuery';
import sectionContent from '@/data/about.json';
// import headshot from '@/public/ABheadshot.png';

export default function Cover() {
    const xxsPaddingX = 'px-[5vw]';
    const belowXxs = useMediaQuery('(max-width: 385px)');

    const buttonBaseClass =
        ' inline-flex items-center justify-center xl:text-xl';
    const button1Class = belowXxs
        ? 'link-btn-base-three-color'
        : 'link-btn-base teal-ltblue';
    const button2Class = belowXxs
        ? 'link-btn-base-three-color'
        : 'link-btn-base ltblue-blue';
    const button3Class = belowXxs
        ? 'link-btn-base-three-color'
        : 'link-btn-base blue-purple';

    const ProfileImage = () => (
        <>
            <div
                className={`xs:pl-4 xs:pr-0 xl:px-2 min-w-[200px] max-w-[200px] h-full xl:h-min xxs:min-w-[220] xxs:max-w-[240] xs:max-w-[70%] sm:min-w-[240px] sm:max-w-[250px] md:min-w-[240px] lg:min-w-[270px] xl:min-w-[300px] 2xl:min-w-[340px]`}>
                <Image
                    src={sectionContent.pic}
                    alt="Profile picture for Aidan Boling"
                    priority
                    width={443}
                    height={443}
                    sizes="360px"
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '50%',
                        opacity: 1,
                    }}
                />
            </div>
        </>
    );

    const Title = () => (
        <div>
            <p className="text-[24px] xs:text-[26px] md:text-[30px] xl:text-[34px] font-light m-0 text-blue-950/[0.85] dark:font-extralight dark:text-blue-100/[0.85]">
                Hi, I&apos;m{' '}
            </p>
            <h1 className="font-h1 text-[50px] xxs:text-6xl xs:text-[64px] sm:text-6xl md:text-[70px] xl:text-[85px] w-full py-3 xs:py-4 m-0 max-xs:leading-[60px]">
                <span className="bg-clip-text pr-2 xs:pr-4 text-transparent bg-gradient-to-t from-sky-900 to-indigo-500 dark:from-white/75 dark:from-10% dark:via-blue-300/90 dark:via-70% dark:to-teal-300/80">
                    {sectionContent.fName + ' '}
                </span>
                <span className="bg-clip-text pr-4 xs:pr-6 text-transparent bg-gradient-to-t from-sky-900 to-indigo-500 dark:from-white/75 dark:from-10% dark:via-blue-300/90 dark:via-70% dark:to-teal-300/80">
                    {sectionContent.lName}
                </span>
            </h1>
            <p className="text-[24px] xs:text-[26px] md:text-[30px] xl:text-[34px] font-light text-blue-950/[0.9] dark:font-extralight dark:text-blue-100/[0.85] m-0">
                {sectionContent.title}
            </p>
        </div>
    );

    // const AboutMe = () => (
    //     <div
    //         className="prose prose-slate dark:prose-invert"
    //         dangerouslySetInnerHTML={{
    //             __html: sectionContent.introShort,
    //         }}
    //     />
    // );

    const Actions = () => (
        <>
            <div className="list-grid-one-col xxs:list-grid-auto btn-group gap-4 xxs:gap-2 sm:gap-4">
                <div className="link-btn-wrapper">
                    <a href="#about" className={button1Class + buttonBaseClass}>
                        About
                    </a>
                </div>
                <div className="link-btn-wrapper">
                    <a href="#work" className={button2Class + buttonBaseClass}>
                        My Work
                    </a>
                </div>
                <div className="link-btn-wrapper">
                    <a
                        href="#contact"
                        className={button3Class + buttonBaseClass}>
                        Contact
                    </a>
                </div>
            </div>
        </>
    );

    return (
        <div
            id="cover"
            className="pt-[75px] xxs:pt-[100px] xs:pt-[15vh] lg:pt-[18vh] pb-24 min-h-screen relative">
            <OuterContainer>
                <div
                    className={`${xxsPaddingX} pb-8 xxs:pb-10 flex xs:hidden justify-center`}>
                    <ProfileImage />
                </div>
            </OuterContainer>
            <div className="w-full min-h-min content-bg">
                <OuterContainer>
                    <section
                        // className={`h-min lg:max-w-[950px] xl:max-w-[1150px] ${xxsPaddingX} xs:p-8 sm:p-12 rounded-sm mx-auto`}>
                        className={`h-min content-max-size-x content-px pb-12 pt-2 xs:py-12 sm:py-[10vh]`}>
                        <div className="grid grid-cols-3 grid-rows-[min-content_minmax(0,_1fr)] auto-rows-min gap-8">
                            <div className="mb-10 sm:mb-16 col-start-1 col-span-full xs:col-end-3 row-start-2 xs:row-start-1 row-end-2 self-start">
                                <Title />
                            </div>
                            <div className="col-start-1 col-span-full xl:col-span-2 row-start-3 xs:row-start-2 row-span-1">
                                <Actions />
                            </div>
                            <div className="hidden xs:flex col-start-2 col-span-full xs:col-end-4 xl:col-start-3 xl:col-span-1 xs:row-start-1 row-span-1 xl:row-span-2 xl:pt-10 2xl:pt-0 items-end xl:items-start 2xl:items-center justify-end xl:justify-center shrink not-prose">
                                <ProfileImage />
                            </div>
                            {/* <div className="col-start-1 col-span-full md:col-span-2 row-start-4 xs:row-start-3">
                                <AboutMe />
                            </div> */}
                        </div>
                    </section>
                </OuterContainer>
            </div>
        </div>
    );
}

//
//
// TEMP Archive ----------------------

// {/* <p>{sectionContent.introShort}</p> */}
//                     {/* <details className="mt-4">
//                     <summary className="select-none">
//                         <span className="ml-4">
//                             <i>More</i>
//                         </span>
//                     </summary>
//                     <div className="mt-4 text-white">
//                         {sectionContent.about.map((paragraph, i) => (
//                             <p key={i} className="mb-4">
//                                 {paragraph}
//                             </p>
//                         ))}
//                     </div>
//                 </details> */}

//                     {/* </div> */}
