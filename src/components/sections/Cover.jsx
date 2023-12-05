import Image from 'next/image';
import sectionContent from '@/data/about.json';
import headshot from '@/public/ABheadshot.png';

export default function Cover() {
    const xxsPaddingX = 'px-[5vw]';

    const ProfileImage = () => (
        <>
            <div
                className={`xs:pl-4 xs:pr-0 lg:px-2 min-w-[220px] max-w-[250px] h-full xs:max-w-[60%] sm:min-w-[240px] sm:max-w-[250px] md:min-w-[240px]  lg:min-w-[280px] lg:min-w-[300px] 2xl:min-w-[340px]`}>
                <Image
                    src={headshot}
                    alt="Profile picture for Aidan Boling"
                    priority
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

    const AboutMe = () => (
        <div
            dangerouslySetInnerHTML={{
                __html: sectionContent.introShort,
            }}
        />
    );

    const Title = () => (
        <div>
            <p className="text-[26px] md:text-[28px] lg:text-[30px] xl:text-[34px] font-light m-0 text-blue-950/[0.85]">
                Hi, I'm{' '}
            </p>
            <h1 className="font-h1 text-6xl xs:text-[56px] sm:text-6xl lg:text-[70px] xl:text-[85px] w-full py-4 m-0">
                <span className="bg-clip-text pr-4 text-transparent dark:backdrop-brightness-200 bg-gradient-to-t from-sky-900 to-indigo-500 dark:from-white/75 dark:from-10% dark:via-blue-300/90 dark:via-70% dark:to-teal-300/80">
                    {sectionContent.fName + ' '}
                </span>
                <span className="bg-clip-text pr-6 overflow-visible w-full text-transparent bg-gradient-to-t from-sky-900 to-indigo-500 dark:from-white/75 dark:from-10% dark:via-blue-300/90 dark:via-70% dark:to-teal-300/80">
                    {sectionContent.lName}
                </span>
            </h1>
            <p className="text-[26px] md:text-[28px] lg:text-[30px] xl:text-[34px] font-light text-blue-950/[0.9] m-0 md:mb-2">
                {sectionContent.title}
            </p>
        </div>
    );

    return (
        <div className="lg:container min-h-screen xs:px-6 sm:px-8 md:px-12 lg:px-16 pt-20 relative">
            <div
                className={`${xxsPaddingX} pb-8 flex xs:hidden justify-center`}>
                <ProfileImage />
            </div>
            <div className="w-full min-h-min bg-blue-500/[0.05] backdrop-brightness-125">
                {/* <section className="h-min max-w-[950px] p-12 bg-gray-950/70 rounded-sm mx-auto"> */}
                <section
                    className={`h-min lg:max-w-[900px] xl:max-w-[1150px] ${xxsPaddingX} xs:p-8 sm:p-12 rounded-sm mx-auto`}>
                    <div className="grid grid-cols-3 grid-rows-[min-content_minmax(0,_1fr)] lg:grid-rows-[min-content_minmax(0,_1fr)] auto-rows-min gap-4">
                        <div className="col-start-1 col-span-full xs:col-end-3 row-start-2 xs:row-start-1 row-span-1 self-end">
                            <Title />
                        </div>

                        <div className="prose prose-slate dark:prose-invert md:max-w-none self-start col-start-1 col-span-full lg:col-span-2 row-start-3 xs:row-start-2 row-span-1">
                            <AboutMe />
                        </div>
                        <div className="hidden xs:flex col-start-2 col-span-full xs:col-end-4 lg:col-start-3 lg:col-span-1 xs:row-start-1 row-span-1 lg:row-span-2 items-end md:items-center justify-end lg:justify-center shrink not-prose">
                            <ProfileImage />
                        </div>
                        <div className="flex col-start-1 col-span-full md:col-span-2 xs:row-start-3 items-start row-start-4">
                            <a
                                href="#projects"
                                className="py-2 px-6 text-lg font-normal text-transparent no-underline rounded-xs link-btn-gradient dark:link-btn-gradient-dark hover:bg-slate-100">
                                <span>SEE MY WORK</span>
                            </a>
                        </div>
                    </div>

                    <div className="col-start-1 row-start-4 flex flex-col h-min w-full p-4">
                        {/* <p>{sectionContent.introShort}</p> */}
                        {/* <details className="mt-4">
                        <summary className="select-none">
                            <span className="ml-4">
                                <i>More</i>
                            </span>
                        </summary>
                        <div className="mt-4 text-white">
                            {sectionContent.about.map((paragraph, i) => (
                                <p key={i} className="mb-4">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </details> */}
                    </div>
                </section>
            </div>
        </div>
    );
}
