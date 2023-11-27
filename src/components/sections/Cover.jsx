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
                        <summary className="text-white select-none">
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
                            {/* <p className="mb-4">
                                Maecenas id molestie diam. Aliquam rhoncus justo
                                id nisi eleifend scelerisque. In lacus dui,
                                porta nec cursus non, bibendum a quam. Nunc
                                sodales volutpat purus eget viverra. Donec
                                pharetra pharetra ex, nec rhoncus urna viverra
                                nec. Maecenas ultricies ultricies quam, non
                                mattis massa fringilla sit amet. Curabitur
                                laoreet, est non semper mattis, ipsum lorem
                                dignissim neque, non viverra mi mi eu ex. Nullam
                                vulputate aliquet quam nec lobortis.
                                Pellentesque feugiat cursus pellentesque.
                                Vestibulum ante ipsum primis in faucibus orci
                                luctus et ultrices posuere cubilia curae; Mauris
                                lacinia eget sem in tempus. Aenean aliquam risus
                                risus. Cras interdum posuere quam, ut iaculis
                                libero rutrum id. Mauris facilisis nunc vehicula
                                justo aliquet scelerisque eget sed nunc. Integer
                                porttitor urna nec nunc faucibus pulvinar. Nam
                                eget dui sollicitudin, suscipit lorem non,
                                congue velit.
                            </p>
                            <p>
                                Quisque lobortis porttitor nisi in volutpat.
                                Aliquam gravida nibh ac congue congue.
                                Suspendisse blandit, est vel pretium rutrum,
                                tellus lacus iaculis nisl, eget vulputate sapien
                                tellus et diam. Morbi in dui vitae mi fermentum
                                tristique. Fusce consectetur libero ornare,
                                pharetra enim eu, tincidunt elit. Nulla ornare
                                sodales risus, sit amet ullamcorper velit
                                pharetra ut. Duis imperdiet ultrices erat, eu
                                semper ipsum egestas quis. Maecenas pharetra
                                ipsum sollicitudin ante dictum, vel mollis
                                tellus feugiat. Sed volutpat, lacus auctor
                                luctus iaculis, nulla enim euismod erat, et
                                rhoncus mi nisi sit amet dui. Vivamus ac
                                fermentum nisi. Duis in porta dui. Praesent eget
                                arcu consequat, tempor erat sed, ornare augue.
                            </p>
                            <p>
                                Cras ut turpis rhoncus, aliquet lorem sed,
                                molestie lorem. Maecenas et felis nibh. Quisque
                                et malesuada est, id venenatis purus. Praesent
                                dictum elementum libero sed tempus. Mauris
                                pharetra suscipit bibendum. Quisque semper
                                bibendum tincidunt. Aenean vitae tempus ligula.
                                Aenean venenatis imperdiet urna eu lobortis.
                                Mauris bibendum cursus consequat. Maecenas
                                eleifend fermentum nunc eu varius. Phasellus
                                dictum, justo dapibus volutpat vulputate, purus
                                est accumsan sapien, id mattis lectus est a
                                elit. Mauris arcu est, mollis a libero sed,
                                scelerisque gravida nunc. Mauris eu dui dictum,
                                fringilla sem ut, molestie enim. Quisque
                                pellentesque nisi non sollicitudin congue.
                                Quisque a malesuada turpis, at sagittis tortor.
                                Praesent facilisis, tortor a iaculis ornare,
                                urna sapien iaculis erat, vel dapibus purus
                                nulla eu urna.
                            </p> */}
                        </div>
                    </details>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
