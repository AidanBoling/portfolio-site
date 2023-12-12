'use client';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import OuterContainer from '../layout/OuterContainer';
import sectionContent from '@/data/about.json';

export default function About({ content }) {
    const AboutMe = () => (
        <div className="ab-prose mt-0 w-full md:min-w-[400px]">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );

    const Actions = () => (
        <div className="flex items-start justify-stretch flex-wrap xxs:justify-between lg:justify-start gap-2 sm:gap-4 md:max-w-[570px]">
            <Link
                href="/resume"
                target="_blank"
                className="link-btn-base default">
                <span>RESUME</span>
            </Link>
        </div>
    );

    const CoreTech = () => (
        <>
            {sectionContent.tech.core.map((item, i) => (
                <li
                    key={i}
                    className="listImageNone flex flex-col justify-between items-center">
                    <Image
                        src={item.logo}
                        alt=""
                        aria-hidden={true}
                        width={50}
                        height={44}
                        sizes="56px"
                        style={{
                            height: '32px',
                            objectFit: 'contain',
                        }}
                    />
                    <span className="text-xs mt-2">{item.name}</span>
                </li>
            ))}
        </>
    );

    const OtherTech = () => (
        <>
            {sectionContent.tech.other.map((item, i) => (
                <li
                    key={i}
                    className="listImageNone flex flex-col justify-between items-center">
                    <Image
                        src={item.logo}
                        alt=""
                        aria-hidden={true}
                        width={50}
                        height={44}
                        sizes="56px"
                        style={{
                            height: '32px',
                            objectFit: 'contain',
                        }}
                    />
                    <span className="text-xs mt-2">{item.name}</span>
                </li>
            ))}
        </>
    );

    return (
        <>
            <section id="about" tabIndex="-1" className="section-py">
                <div className="section-py min-h-[75vh]">
                    <OuterContainer prose>
                        <div className="content-max-size-x">
                            <div className="h-min content-px relative pb-6">
                                <h2 className="section-header">About</h2>
                            </div>
                            {/* <hr className="opacity-20 mt-4 mb-8" /> */}

                            <div className="flex flex-col gap-y-8 gap-x-10 lg:flex-row">
                                <div className="pt-6 content-px">
                                    <AboutMe />
                                </div>
                                <div className="content-bg lg:content-py content-px w-full md:min-w-[40%] lg:min-w-[45%] pb-6 pt-6 lg:pb-8 lg:pt-5 lg:px-8">
                                    <div>
                                        <p className="-mb-4 font-light text-lg text-blue-800 dark:text-blue-100 uppercase text-center">
                                            Core Tools
                                        </p>
                                        <ul className="not-prose gap-y-6 px-4 py-9 list-grid-auto tech rounded tech-border dark:tech-border-dark">
                                            <CoreTech />
                                        </ul>
                                    </div>
                                    <div className="mt-8">
                                        <p className="-mb-4 font-light text-lg text-blue-800 dark:text-blue-100 uppercase text-center">
                                            Other Tools & Libraries
                                        </p>

                                        <ul className="not-prose gap-y-6 px-4 py-9 list-grid-auto tech border-2 border-slate-700 rounded tech-border dark:tech-border-dark">
                                            <OtherTech />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OuterContainer>
                </div>
            </section>
        </>
    );
}

//
//
// TEMP Archive ---------

// //
// <div className="content-bg lg:content-py content-px w-full md:min-w-[40%] lg:min-w-[45%] py-6 lg:p-6">
//                                 {/* <p className="mb-2 mt-3 text-2xl font-light text-blue-300">
//                                     Tools
//                                 </p>
//                                 <hr className="opacity-20 mt-0 mb-8" /> */}
//                                 <ul className="not-prose">
//                                     <li>
//                                         <p className="-mb-4 font-light text-blue-800 dark:text-blue-100 uppercase text-center">
//                                             {/* <span className="px-16 pb-1 border-b border-slate-600/25"> */}
//                                             Core Tools
//                                             {/* </span> */}
//                                         </p>
//                                         {/* <ul className="flex flex-wrap items-stretch justify-between gap-y-6 gap-x-[4.5%] lg:gap-x-[3vw] xl:max-w-[80%] xl:max-w-full py-4 px-8">
//                                         <CoreTech />
//                                     </ul> */}
//                                         <ul className="gap-y-6 px-4 py-9 list-grid-auto tech rounded tech-border dark:tech-border-dark">
//                                             <CoreTech />
//                                         </ul>
//                                     </li>
//                                     <li className="mt-8">
//                                         <p className="-mb-4 font-light text-blue-800 dark:text-blue-100 uppercase text-center">
//                                             Other Tools & Libraries
//                                         </p>

//                                         <ul className="gap-y-6 px-4 py-9 list-grid-auto tech border-2 border-slate-700 rounded tech-border dark:tech-border-dark">
//                                             <OtherTech />
//                                         </ul>
//                                     </li>
//                                 </ul>
//                             </div>
