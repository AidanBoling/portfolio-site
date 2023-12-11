'use client';
// import Image from 'next/image';
import socialData from '@/data/about.json';
import sectionContent from '@/data/contactContent.json';
import OuterContainer from '../layout/OuterContainer';
import ContactForm from '../ContactForm';
import SocialIconLink from '../SocialIconLink';

export default function Contact() {
    const ContactIntro = () => <p className="">{sectionContent.introText}</p>;

    const ContactLinks = () => (
        <ul className="not-prose inline-flex gap-8">
            <li className="listImageNone">
                <SocialIconLink socialData={socialData.social.email} showName />
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
                        <ContactIntro />
                        <ContactLinks />
                    </div>
                    <ContactForm />
                </OuterContainer>
            </section>
        </>
    );
}
