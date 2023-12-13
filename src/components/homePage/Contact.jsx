'use client';
// import Image from 'next/image';
import socialData from '@/data/about.json';
import sectionContent from '@/data/contactContent.json';
import OuterContainer from '../layout/OuterContainer';
import ContactForm from '../ContactForm';
import SocialIconLink from '../SocialIconLink';

export default function Contact() {
    const ContactIntro = () => (
        <p className="mt-0">{sectionContent.introText}</p>
    );

    const ContactLinks = () => (
        <address>
            <ul className="not-prose inline-flex gap-8">
                <li className="listImageNone">
                    <SocialIconLink
                        socialData={socialData.social.email}
                        showName
                    />
                </li>
                <li className="listImageNone">
                    <SocialIconLink
                        socialData={socialData.social.linkedin}
                        showName
                        offsetH={0.14}
                    />
                </li>
                {/* <li className="listImageNone">
                <SocialIconLink
                    socialData={socialData.social.github}
                    adjust
                />
            </li> */}
            </ul>
        </address>
    );

    return (
        <>
            <section
                id="contact"
                tabIndex="-1"
                className="section-py section-mt">
                <div className="section-py min-h-[75vh]">
                    <OuterContainer prose>
                        <div className="content-max-size-x">
                            <div className="h-min content-px pb-6">
                                <h2 className="section-header">Contact</h2>
                            </div>
                            <div className="flex max-xl:flex-col">
                                <div className="py-4 xl:flex-1 content-px">
                                    <ContactIntro />
                                    <ContactLinks />
                                </div>
                                <div className="max-xl:my-8 p-8 content-px xl:flex-[2_2_0%] xl:max-w-[650px] content-bg-alt">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </OuterContainer>
                </div>
            </section>
        </>
    );
}
