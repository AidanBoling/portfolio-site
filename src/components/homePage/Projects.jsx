'use client';
import Image from 'next/image';
import Link from 'next/link';
import OuterContainer from '@/components/layout/OuterContainer';
import useMediaQuery from '@/utils/useMediaQuery';
import { BoxArrowOutIcon, GithubIcon } from '../icons';
import sectionContent from '@/data/projectContent.json';
import data from '@/data/about.json';
import SocialIconLink from '../SocialIconLink';

export default function Projects() {
    const belowXxs = useMediaQuery('(max-width: 385px)');

    const btnBaseOverrides = ' py-2 px-3';
    // const buttonBaseClass = belowXxs ?  : `link-btn-base`
    const button1Class = belowXxs
        ? 'link-btn-base-three-color' + btnBaseOverrides
        : 'link-btn-base teal-ltblue';
    const button2Class = belowXxs
        ? 'link-btn-base-three-color'
        : 'link-btn-base ltblue-blue';
    const button3Class = belowXxs
        ? 'link-btn-base-three-color'
        : 'link-btn-base blue-purple';

    const Actions = ({ links }) => (
        <>
            <div className="list-grid-one-col xxs:list-grid-auto btn-group gap-3 xxs:gap-2 sm:gap-4 lg:gap-6">
                <Link href={links.details} className={button1Class}>
                    See Details
                </Link>
                <a
                    href={links.app}
                    target="_blank"
                    className={`${button2Class} inline-flex items-center justify-center`}>
                    Live Site
                    <span aria-hidden="true" className="pl-2 pb-[.1rem]">
                        <BoxArrowOutIcon
                            className={'w-4 h-4 stroke-blue-400/90'}
                        />
                    </span>
                </a>
                <a
                    href={links.github}
                    target="_blank"
                    className={`${button3Class} inline-flex items-center justify-center`}>
                    Source Code
                    <span aria-hidden="true" className="pl-2 pb-[.1rem]">
                        <GithubIcon
                            className={
                                'w-4 h-4 stroke-indigo-400/80 fill-indigo-400/80'
                            }
                        />
                    </span>
                </a>
            </div>
        </>
    );

    return (
        <section id="projects" tabIndex="-1" className="section-py section-mt">
            <div className="content-bg section-py min-h-[75vh]">
                <OuterContainer>
                    <div className="content-max-size-x">
                        <div className="ab-prose h-min content-px pb-6">
                            <h2 className="section-header">Featured Work</h2>
                        </div>

                        <div className="pt-6 content-px">
                            {/* <div className="rounded-sm bg-blue-500/[0.05] dark:bg-slate-900/[0.70] backdrop-brightness-125 dark:backdrop-brightness-[1] h-min flex"> */}
                            <article className="py-6 rounded-sm h-min flex max-xl:flex-col gap-12">
                                <div className="w-full grow min-h-[370px] sm:min-h-[500px] min-w-[250px] xl:max-w-[50%] overflow-clip relative">
                                    <Image
                                        src={
                                            sectionContent.projects[0].imageURL
                                        }
                                        alt="project thumbnail"
                                        sizes="650px"
                                        fill
                                        quality="100"
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: '50% 40%',
                                        }}
                                    />
                                </div>

                                <div className="ab-prose w-full flex flex-col xl:min-w-[50%]">
                                    <h3 className="mt-0 text-center">
                                        {sectionContent.projects[0].title}
                                    </h3>
                                    {/* <p className="text-xl mb-0 text-gray-700 dark:text-gray-400 font-light">
                                        {sectionContent.projects[0].subtitle}
                                    </p> */}
                                    <hr className="opacity-90 dark:opacity-30 mt-2 mb-6" />

                                    <ul className="not-prose flex flex-wrap justify-center gap-2 ">
                                        {sectionContent.projects[0].tools.map(
                                            (tool, i) => (
                                                <li
                                                    key={i}
                                                    className="px-2 bg-gray-300/50 dark:bg-slate-700 rounded border-[1px] dark:border border-slate-900/20 dark:border-gray-300/60 font-light text-sm">
                                                    {tool}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    <div
                                        className="my-6"
                                        dangerouslySetInnerHTML={{
                                            __html: sectionContent.projects[0]
                                                .descriptionShort,
                                        }}
                                    />
                                    <div>
                                        <Actions
                                            links={
                                                sectionContent.projects[0].links
                                            }
                                        />
                                    </div>
                                </div>
                            </article>
                            <div className="opacity-20 my-10 mt-10 ">
                                <hr className="mb-[1.5px]" />
                                <hr />
                            </div>
                            <div className="flex max-xxs:flex-col gap-6 no-wrap items-center px-6 py-8 rounded-sm border border-gray-700/80 bg-gray-800/70">
                                <p className="text-lg font-light dark:text-blue-200">
                                    <a
                                        href={data.social.github.link}
                                        class="link">
                                        Check out my Github profile
                                    </a>{' '}
                                    to see other projects I've worked on.
                                </p>
                                {/* <SocialIconLink
                                    socialData={data.social.github}
                                    w={36}
                                    showName
                                    textRight
                                    textSize="text-lg"
                                /> */}
                            </div>
                        </div>
                    </div>
                </OuterContainer>
            </div>
        </section>
    );
}
