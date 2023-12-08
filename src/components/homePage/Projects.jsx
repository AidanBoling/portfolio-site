'use client';
import sectionContent from '@/data/projectContent.json';
import Image from 'next/image';
import Link from 'next/link';
import OuterContainer from '@/components/layout/OuterContainer';
import useMediaQuery from '@/utils/useMediaQuery';

export default function Projects() {
    const belowXxs = useMediaQuery('(max-width: 385px)');

    const btnBaseOverrides = 'py-1 px-2';
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
                    Details
                </Link>
                <a href={links.app} target="_blank" className={button2Class}>
                    Go to Site
                </a>
                <a href={links.github} target="_blank" className={button3Class}>
                    See Code
                </a>
            </div>
        </>
    );

    return (
        <>
            <section
                id="projects"
                tabIndex="-1"
                className="content-bg section-mt section-py min-h-[75vh]">
                <OuterContainer>
                    <div className="content-max-size-x">
                        <div className="h-min content-px pb-6">
                            <h2 className="ab-prose section-header">
                                Selected Work
                            </h2>
                        </div>
                        {/* <hr className="opacity-20 mt-4 mb-8" /> */}

                        <div className="py-6 content-px">
                            {/* <div className="rounded-sm bg-blue-500/[0.05] dark:bg-slate-900/[0.70] backdrop-brightness-125 dark:backdrop-brightness-[1] h-min flex"> */}
                            <div className="rounded-sm h-min flex max-lg:flex-col gap-12">
                                <div className="w-full grow min-h-[300px] min-w-[350px] lg:max-w-[50%] overflow-clip relative">
                                    <Image
                                        src={
                                            sectionContent.projects[0].imageURL
                                        }
                                        alt="project thumbnail"
                                        sizes="400px"
                                        fill
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: '50% 40%',
                                        }}
                                    />
                                </div>

                                <div className="ab-prose w-full flex flex-col">
                                    <h3 className="text-3xl font-normal mt-0">
                                        {sectionContent.projects[0].title}
                                    </h3>
                                    <p className="text-xl mb-0 text-gray-400 font-light">
                                        {sectionContent.projects[0].subtitle}
                                    </p>
                                    <hr className="opacity-20 mt-2 mb-8" />

                                    <ul className="not-prose flex flex-wrap justify-center gap-2">
                                        {sectionContent.projects[0].tools.map(
                                            (tool, i) => (
                                                <li
                                                    key={i}
                                                    className="bg-slate-700 px-2 rounded border border-gray-300/60 font-light">
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
                            </div>
                        </div>
                    </div>
                </OuterContainer>
            </section>
        </>
    );
}

//
//
// TEMP Archive ------------------------

//
// {
//     /* <div className="container mt-16 sm:mt-32 px-4 md:px-8 lg:px-16 relative">
//                 <section
//                     id="projects"
//                     tabIndex="-1"
//                     className="h-min max-w-[950px] p-12 bg-gray-950/70 rounded-lg mx-auto"> */
// }
// {
//     /* <h2 className="text-4xl md:text-5xl p-4 text-center">
//                     Selected Work
//                 </h2> */
// }

// {
//     /* <div>
//                     {sectionContent.projects.map((project, i) => (
//                         <div key={i} className="w-[500px] h-[300px]">
//                             <p>Title: {project.title}</p>
//                             <p>Description: {project.descriptionShort}</p>
//                         </div>
//                     ))}
//                 </div> */
// }

// {
//     /* <div className="tb cards-container min-w-[90%] h-[90%] mx-auto">
//                         {sectionContent &&
//                             sectionContent.projects.map((project, i) => (
//                                 <div key={i} className="mycard">
//                                     <a href={project.links.app}>
//                                         <div className="img-container rounded w-full min-h-[200px] max-h-[150px] overflow-clip relative">
//                                             <Image
//                                                 src={project.imageURL}
//                                                 alt="project thumbnail"
//                                                 sizes="700px"
//                                                 fill
//                                                 style={{
//                                                     objectFit: 'cover',
//                                                     objectPosition: '50% 40%',
//                                                 }}
//                                             />
//                                         </div>
//                                         <article className="description-container">
//                                             <h3>{project.title}</h3>
//                                             <ul>
//                                                 {project.tools.map(
//                                                     (tool, i) => (
//                                                         <li key={i}>{tool}</li>
//                                                     )
//                                                 )}
//                                             </ul>
//                                         </article>
//                                     </a>
//                                 </div>
//                             ))} */
// }

// {
//     /* <div className="mycard">
//                         <div className="img-container">
//                             <img
//                                 src="https://picsum.photos/500/400?random=2"
//                                 alt="project thumbnail"
//                                 style={{
//                                     alignSelf: 'flex-start',
//                                     transform: 'translateY(-12%)',
//                                 }}
//                             />
//                         </div>
//                         <div className="description-container">
//                             <h3>This Site</h3>
//                             <ul>
//                                 <li>CSS/HTML</li>
//                                 <ul>
//                                     <li>Grid</li>
//                                     <li>Flexbox</li>
//                                     <li>No external frameworks</li>
//                                 </ul>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="mycard">
//                         <a href="https://exiledfox.github.io/design-agency-frontpage/">
//                             <div className="img-container">
//                                 <img
//                                     src="https://picsum.photos/500/400?random=3"
//                                     alt="project thumbnail"
//                                     style={{
//                                         alignSelf: 'flex-start',
//                                         transform: 'translateY(-12%)',
//                                     }}
//                                 />
//                             </div>
//                         </a>
//                         <article className="description-container">
//                             <h3>Landing Page for Mock Design Agency</h3>
//                             <ul>
//                                 <li>CSS/HTML</li>
//                                 <ul>
//                                     <li>Basics (no Flexbox or Grid)</li>
//                                 </ul>
//                             </ul>
//                         </article>
//                     </div> */
// }
// {
//     /* </div>
//                 </section>
//             </div> */
// }
