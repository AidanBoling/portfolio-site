'use client';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import OuterContainer from '../layout/OuterContainer';
import { BoxArrowOutIcon } from '../icons';
import sectionContent from '@/data/about.json';

export default function About({ content }) {
    const AboutMe = () => (
        <div className="ab-prose mt-0 w-full md:min-w-[400px]">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );

    const Actions = () => (
        <div className="flex justify-stretch xxs:justify-center md:justify-start">
            <div className="mt-8 xl:mt-10 mb-10 max-h-min w-full xxs:w-[220px]">
                <a
                    href={sectionContent.resumeLink}
                    target="_blank"
                    className="link-btn-base teal-ltblue max-xxs:py-2 inline-flex items-center justify-center xl:text-xl">
                    View Resume
                    <span aria-hidden="true" className="pl-2 pb-[.1rem]">
                        <BoxArrowOutIcon
                            className={
                                'w-4 h-4 stroke-sky-500/90 dark:stroke-sky-400/90'
                            }
                        />
                    </span>
                </a>
            </div>
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
                            <div className="flex flex-col gap-y-8 gap-x-12 pt-6 xl:flex-row xl:pt-12">
                                <div className="content-px">
                                    <AboutMe />
                                    <div className="contents xl:hidden">
                                        <Actions />
                                    </div>
                                </div>
                                <div className="not-prose content-bg-alt w-full md:min-w-[40%] xl:min-w-[40%] xl:content-py content-px pb-8 pt-6 xs:p-6 xl:p-8 xl:px-12 xl:pt-5 xl:flex xl:flex-col xl:justify-evenly">
                                    <h3 className="visually-hidden">
                                        Skills and Tech
                                    </h3>
                                    <ul className="contents">
                                        <li>
                                            <span className="m-0 -mb-4 block font-light text-lg text-blue-800 dark:text-blue-100 uppercase text-center">
                                                Core Tools
                                            </span>
                                            <ul className="gap-y-6 px-4 py-10 xs:py-9 xl:px-6 list-grid-auto tech rounded tech-border dark:tech-border-dark">
                                                <CoreTech />
                                            </ul>
                                        </li>
                                        <li className="mt-12 xs:mt-10 xl:mt-8">
                                            <span className="-mb-8 xxs:-mb-4 block font-light text-lg text-blue-800 dark:text-blue-100 uppercase text-center max-xxs:w-[140px] max-xxs:mx-auto">
                                                Other Tools & Libraries
                                            </span>
                                            <ul className="not-prose gap-y-6 px-4 py-10 max-xxs:pt-16 xs:py-9 xl:px-6 list-grid-auto tech rounded tech-border dark:tech-border-dark">
                                                <OtherTech />
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="contents max-xl:hidden">
                                <Actions />
                            </div>
                        </div>
                    </OuterContainer>
                </div>
            </section>
        </>
    );
}
