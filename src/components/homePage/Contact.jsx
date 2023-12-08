'use client';
import Image from 'next/image';
import sectionContent from '@/data/about.json';
import OuterContainer from '../layout/OuterContainer';

export default function Contact() {
    // const Contact = () => (
    //     <div
    //         className=""
    //         dangerouslySetInnerHTML={{
    //             __html: sectionContent.contact,
    //         }}
    //     />
    // );

    const ContactLinks = () => (
        <ul className="not-prose inline-flex gap-4">
            {sectionContent.contact.map((method, i) => (
                <li key={i} className="listImageNone">
                    <a
                        href={method.link}
                        target="_blank"
                        className="flex flex-col justify-between items-center">
                        <Image
                            src={method.icon}
                            alt=""
                            aria-hidden={true}
                            width={50}
                            height={44}
                            sizes="56px"
                            style={{
                                height: '44px',
                                objectFit: 'contain',
                            }}
                        />
                        <span className="text-xs mt-2">{method.name}</span>
                    </a>
                </li>
            ))}
        </ul>
    );

    return (
        <>
            <section
                id="contact"
                tabIndex="-1"
                className="section-py section-mt min-h-[75vh]">
                <OuterContainer prose>
                    <div className="h-min content-max-size-x content-px pb-6">
                        <h2 className="section-header">Contact</h2>
                    </div>
                    <div className="py-6 content-max-size-x content-px">
                        <p>Contact me...</p>
                        <ContactLinks />
                    </div>
                </OuterContainer>
            </section>
        </>
    );
}
