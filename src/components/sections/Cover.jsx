import Image from 'next/image';
import sectionContent from '@/data/coverContent.json';
import headshot from '@/public/ABheadshot.png';

export default function Cover() {
    return (
        <div className="container mt-16 sm:mt-32 px-4 md:px-8 lg:px-16 relative">
            <div className="h-min max-w-[950px] p-12 bg-gray-950/70 rounded-lg mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
                    <div className="flex justify-center shrink">
                        <div className="min-w-[200] sm:w-full max-w-[300px] md:max-w-[340px] aspect-square p-4">
                            <Image
                                src={headshot}
                                alt="Profile picture for Aidan Boling"
                                priority
                                sizes="420px"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    objectFit: 'contain',
                                    borderRadius: '50%',
                                    opacity: 1,
                                }}
                            />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl p-4">
                        {sectionContent.name}
                    </h1>
                </div>
                <div className="flex flex-col h-min w-full p-4 mt-8">
                    <p>{sectionContent.introShort}</p>
                    <details className="mt-4">
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
                    </details>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
