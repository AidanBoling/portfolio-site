'use client';
import sectionContent from '@/data/about.json';
import Image from 'next/image';
import Link from 'next/link';
import OuterContainer from '../layout/OuterContainer';

export default function About() {
    const AboutMe = () => (
        <div
            className="ab-prose w-full md:min-w-[400px]"
            dangerouslySetInnerHTML={{
                __html: sectionContent.about,
            }}
        />
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
            <section
                id="about"
                tabIndex="-1"
                className="section-py min-h-[75vh]">
                <OuterContainer prose>
                    {/* <div className="ab-prose"> */}
                    <div className="h-min content-size-x relative pb-6">
                        <h2 className="section-header">About</h2>
                    </div>
                    {/* <hr className="opacity-20 mt-4 mb-8" /> */}

                    <div className="flex flex-col gap-y-8 lg:flex-row">
                        <div className="pt-6 content-size-x lg:content-px">
                            <AboutMe />
                        </div>
                        <div className="content-bg content-size-x lg:content-px w-full md:min-w-[375px] lg:max-w-[500px] py-6">
                            <p className="mb-2 text-2xl font-light text-blue-300">
                                Tools
                            </p>
                            <hr className="opacity-20 mt-0 mb-8" />
                            <ul className="not-prose">
                                <li>
                                    <p className="pb-3 text-blue-100">
                                        <i>Core:</i>
                                    </p>
                                    {/* <ul className="flex flex-wrap items-stretch justify-between gap-y-6 gap-x-[4.5%] lg:gap-x-[3vw] xl:max-w-[80%] xl:max-w-full py-4 px-8">
                                        <CoreTech />
                                    </ul> */}
                                    <ul className="gap-y-6 py-4 px-8 list-grid-auto tech">
                                        <CoreTech />
                                    </ul>
                                </li>
                                <li>
                                    <p className="py-3 pt-6 text-blue-100">
                                        <i>Additional Tools & Libraries:</i>
                                    </p>
                                    <ul className="gap-y-6 py-4 px-8 list-grid-auto tech">
                                        <OtherTech />
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* </div> */}
                </OuterContainer>
            </section>
        </>
    );
}
