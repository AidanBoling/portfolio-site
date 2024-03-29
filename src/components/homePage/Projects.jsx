'use client';
import Image from 'next/image';
import Link from 'next/link';
import OuterContainer from '@/components/layout/OuterContainer';
import useMediaQuery from '@/utils/useMediaQuery';
import { BoxArrowOutIcon, GithubIcon } from '../icons';
import sectionContent from '@/data/projectContent.json';
import data from '@/data/about.json';
// import SocialIconLink from '../SocialIconLink';

export default function Projects() {
    const belowXs = useMediaQuery('(max-width: 560px)');

    const btnBaseOverrides = ' py-2 px-3';
    const button1Class = belowXs
        ? 'link-btn-base-three-color' + btnBaseOverrides
        : 'link-btn-base teal-ltblue';
    const button2Class = belowXs
        ? 'link-btn-base-three-color'
        : 'link-btn-base ltblue-blue';
    const button3Class = belowXs
        ? 'link-btn-base-three-color'
        : 'link-btn-base blue-purple';

    const Actions = ({ links }) => (
        <div className="list-grid-one-col xs:list-grid-auto btn-group gap-4 xs:gap-4 lg:gap-5">
            <div className="link-btn-wrapper">
                <Link
                    href={links.details}
                    className={`${button1Class} inline-flex items-center justify-center`}>
                    See Details
                </Link>
            </div>
            <div className="link-btn-wrapper">
                <a
                    href={links.app}
                    target="_blank"
                    className={`${button2Class} inline-flex items-center justify-center`}>
                    Live Site
                    <span aria-hidden="true" className="pl-2 pb-[.1rem]">
                        <BoxArrowOutIcon
                            className={
                                'w-4 h-4 stroke-blue-500/90 dark:stroke-blue-400/90'
                            }
                        />
                    </span>
                </a>
            </div>
            <div className="link-btn-wrapper">
                <a
                    href={links.github}
                    target="_blank"
                    className={`${button3Class} inline-flex items-center justify-center group`}>
                    View Code
                    <span
                        aria-hidden="true"
                        className="pl-2  max-xs:group-hover:pl-[0.48rem] pb-[.1rem]">
                        <GithubIcon
                            className={
                                'w-4 h-4 max-xs:stroke-blue-600/80 max-xs:fill-blue-600/80 max-xs:dark:stroke-blue-400/90 max-xs:dark:fill-blue-400/90 stroke-indigo-600/80 dark:stroke-indigo-400/80 fill-indigo-600/80 dark:fill-indigo-400/80'
                            }
                        />
                    </span>
                </a>
            </div>
        </div>
    );

    return (
        <section id="work" tabIndex="-1" className="section-py section-mt">
            <div className="content-bg section-py min-h-[75vh]">
                <OuterContainer>
                    <div className="content-max-size-x">
                        <div className="ab-prose h-min content-px pb-6">
                            <h2 className="section-header">Featured Work</h2>
                        </div>

                        <div className="pt-6 content-px">
                            <article className="py-6 rounded-sm h-min flex max-xl:flex-col gap-8">
                                <div className="w-full grow min-h-[370px] sm:min-h-[500px] min-w-[250px] xl:max-w-[50%] overflow-clip relative">
                                    <Image
                                        src={
                                            sectionContent.projects[0].imageURL
                                        }
                                        alt={
                                            sectionContent.projects[0].imageAlt
                                        }
                                        sizes="650px"
                                        fill
                                        quality="100"
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: '44% 40%',
                                        }}
                                    />
                                </div>

                                <div className="ab-prose w-full flex flex-col xl:max-w-[50%] gap-6">
                                    <h3 className="my-0 text-center">
                                        {sectionContent.projects[0].title}
                                    </h3>
                                    {/* <p className="text-xl mb-0 text-gray-700 dark:text-gray-400 font-light">
                                        {sectionContent.projects[0].subtitle}
                                    </p> */}
                                    <hr
                                        className="opacity-90 dark:opacity-30 mt-2 mb-0"
                                        aria-hidden
                                    />
                                    <h4 className="visually-hidden">Tech</h4>
                                    <ul className="not-prose flex flex-wrap justify-center gap-2">
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
                                    <h4 className="visually-hidden">
                                        Description
                                    </h4>
                                    <div
                                        className="mt-5"
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
                            <div className="opacity-20 my-10 mt-14">
                                <hr className="mb-[1.5px]" />
                                <hr />
                            </div>
                            <div className="flex max-xs:flex-col gap-6 no-wrap items-center px-6 py-8 rounded-sm border border-slate-300 dark:border-gray-700/80 bg-slate-200/80 dark:bg-gray-800/70">
                                <p className="text-lg font-light dark:text-blue-200">
                                    <a
                                        href={data.social.github.link}
                                        className="link">
                                        Check out my Github profile
                                    </a>{' '}
                                    to see other projects I&apos;ve worked on.
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
