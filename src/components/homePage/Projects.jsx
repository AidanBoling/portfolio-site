import sectionContent from '@/data/projectContent.json';
import Image from 'next/image';
import OuterContainer from '../layout/OuterContainer';

export default function Projects() {
    return (
        <>
            <section
                id="projects"
                tabIndex="-1"
                className="content-bg section-mt section-py min-h-[75vh]">
                <OuterContainer>
                    <div className="h-min content-size-x pb-6">
                        <h2 className="ab-prose section-header">
                            Selected Work
                        </h2>
                    </div>
                    {/* <hr className="opacity-20 mt-4 mb-8" /> */}

                    <div className="py-6 content-size-x">
                        {/* <div className="rounded-sm bg-blue-500/[0.05] dark:bg-slate-900/[0.70] backdrop-brightness-125 dark:backdrop-brightness-[1] h-min flex"> */}
                        <div className="rounded-sm h-min flex gap-12">
                            <div className="w-full grow min-h-[200px] min-w-[350px] overflow-clip relative">
                                <Image
                                    src={sectionContent.projects[0].imageURL}
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
                                <h3 className="text-3xl font-normal">
                                    Title and Stuff
                                </h3>
                                <p>Subtitle</p>
                                <p>Info</p>
                                <p className="mb-auto">Details</p>
                                <div>buttons</div>
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
{
    /* <div className="container mt-16 sm:mt-32 px-4 md:px-8 lg:px-16 relative">
                <section
                    id="projects"
                    tabIndex="-1"
                    className="h-min max-w-[950px] p-12 bg-gray-950/70 rounded-lg mx-auto"> */
}
{
    /* <h2 className="text-4xl md:text-5xl p-4 text-center">
                    Selected Work
                </h2> */
}

{
    /* <div>
                    {sectionContent.projects.map((project, i) => (
                        <div key={i} className="w-[500px] h-[300px]">
                            <p>Title: {project.title}</p>
                            <p>Description: {project.descriptionShort}</p>
                        </div>
                    ))}
                </div> */
}

{
    /* <div className="tb cards-container min-w-[90%] h-[90%] mx-auto">
                        {sectionContent &&
                            sectionContent.projects.map((project, i) => (
                                <div key={i} className="mycard">
                                    <a href={project.links.app}>
                                        <div className="img-container rounded w-full min-h-[200px] max-h-[150px] overflow-clip relative">
                                            <Image
                                                src={project.imageURL}
                                                alt="project thumbnail"
                                                sizes="700px"
                                                fill
                                                style={{
                                                    objectFit: 'cover',
                                                    objectPosition: '50% 40%',
                                                }}
                                            />
                                        </div>
                                        <article className="description-container">
                                            <h3>{project.title}</h3>
                                            <ul>
                                                {project.tools.map(
                                                    (tool, i) => (
                                                        <li key={i}>{tool}</li>
                                                    )
                                                )}
                                            </ul>
                                        </article>
                                    </a>
                                </div>
                            ))} */
}

{
    /* <div className="mycard">
                        <div className="img-container">
                            <img
                                src="https://picsum.photos/500/400?random=2"
                                alt="project thumbnail"
                                style={{
                                    alignSelf: 'flex-start',
                                    transform: 'translateY(-12%)',
                                }}
                            />
                        </div>
                        <div className="description-container">
                            <h3>This Site</h3>
                            <ul>
                                <li>CSS/HTML</li>
                                <ul>
                                    <li>Grid</li>
                                    <li>Flexbox</li>
                                    <li>No external frameworks</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div className="mycard">
                        <a href="https://exiledfox.github.io/design-agency-frontpage/">
                            <div className="img-container">
                                <img
                                    src="https://picsum.photos/500/400?random=3"
                                    alt="project thumbnail"
                                    style={{
                                        alignSelf: 'flex-start',
                                        transform: 'translateY(-12%)',
                                    }}
                                />
                            </div>
                        </a>
                        <article className="description-container">
                            <h3>Landing Page for Mock Design Agency</h3>
                            <ul>
                                <li>CSS/HTML</li>
                                <ul>
                                    <li>Basics (no Flexbox or Grid)</li>
                                </ul>
                            </ul>
                        </article>
                    </div> */
}
{
    /* </div>
                </section>
            </div> */
}
