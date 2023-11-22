import Image from 'next/image';
import bluePurpleSmokeColumnLeft from '@/public/blue-purple-gradient-smoke-column-left.png';
import bluePurpleSmokeColumnRight from '@/public/blue-purple-gradient-smoke-column-right.png';
import blueTealSmoke from '@/public/blue-teal-gradient-smoke.png';
import blueTealSmokeVertical from '@/public/blue-teal-gradient-smoke-vertical.png';

export default function Background({ children }) {
    // const footerHeight = '140px';

    return (
        <div className="flex flex-col w-full min-h-screen relative bg-gradient-to-t from-slate-900 to-slate-950 overflow-clip">
            <div className="w-screen h-screen z-0 bg-contain bg-geometric-pattern bg-smaller opacity-[.14]"></div>
            {/* <div className="bg-geometric-pattern bg-20% z-20"></div> */}
            {/* <div className="w-min right-0 self-end">
                <Image
                    alt="..."
                    src={bluePurpleSmokeColumnRight}
                    // placeholder="blur"
                    quality={100}
                    // sizes="30vw"
                    priority
                    style={{
                        // minWidth: '900px',
                        maxWidth: '20vw',
                        height: 'auto',
                        objectFit: 'contain',
                    }}
                />
            </div> */}
            {/* <div className="container h-max absolute top-0">
                <Image
                    alt="..."
                    src={bluePurpleSmokeColumnLeft}
                    // placeholder="blur"
                    quality={100}
                    sizes="20vw"
                    priority
                    style={{
                        // minWidth: '900px',
                        maxWidth: '20%',
                        height: 'auto',
                        objectFit: 'contain',
                    }}
                />
            </div> */}
            {/* <div className="h-min w-full absolute top-0">
                <Image
                    alt="..."
                    src={blueTealSmoke}
                    // placeholder="blur"
                    quality={100}
                    sizes="100vw"
                    priority
                    style={{
                        // minWidth: '900px',
                        minWidth: '100vw',
                        // height: 'auto',
                        objectFit: 'cover',
                        transform: 'translateY(-35%)',
                    }}
                />
            </div> */}
            <div className="w-min absolute top-0">
                <Image
                    alt="..."
                    src={blueTealSmokeVertical}
                    // placeholder="blur"
                    quality={100}
                    sizes="100vw"
                    priority
                    style={{
                        // minWidth: '900px',
                        maxWidth: '800px',
                        height: 'auto',
                        objectFit: 'contain',
                        transform:
                            'rotate(.03turn) translatex(-31.5%) translateY(-8%)',
                    }}
                />
            </div>
            <div className="w-min absolute right-0 top-0">
                <Image
                    alt="..."
                    src={blueTealSmokeVertical}
                    // placeholder="blur"
                    quality={100}
                    sizes="50vw"
                    priority
                    style={{
                        // minWidth: '900px',
                        maxWidth: '850px',
                        height: 'auto',
                        objectFit: 'contain',
                        transform:
                            'rotate(-.04turn) translatex(70%) translateY(-8%)',
                    }}
                />
            </div>

            {children}
        </div>
    );
}
