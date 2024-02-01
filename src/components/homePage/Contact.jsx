'use client';
import socialData from '@/data/about.json';
// import sectionContent from '@/data/contactContent.json';
import OuterContainer from '../layout/OuterContainer';
import ContactForm from '../ContactForm';
import SocialIconLink from '../SocialIconLink';

export default function Contact() {
    // const ContactIntro = () => (
    //     <p className="mt-0">{sectionContent.introText}</p>
    // );

    const liClass = 'listImageNone flex flex-col items-center gap-2';
    const aClass = 'link text-[0.8rem]';

    const ContactLinks = () => (
        <address className="py-2 pt-6 xl:py-6">
            <ul className="not-prose flex max-xl:justify-around max-xs:flex-wrap max-xs:gap-8 xl:gap-16 xl:flex-col">
                <li className={liClass}>
                    <SocialIconLink
                        socialData={socialData.social.email}
                        showName
                        w={36}
                        textLeft
                        textSize="text-lg"
                    />
                    <a
                        href={socialData.social.email.link}
                        aria-hidden="true"
                        className={aClass}>
                        {socialData.social.email.nameLink}
                    </a>
                </li>
                <li className={liClass}>
                    <SocialIconLink
                        socialData={socialData.social.linkedin}
                        showName
                        offsetH={0.14}
                        w={36}
                        textLeft
                        textSize="text-lg"
                    />
                    <a
                        href={socialData.social.linkedin.link}
                        aria-hidden="true"
                        className={aClass}>
                        {socialData.social.linkedin.nameLink}
                    </a>
                </li>

                <li className={liClass}>
                    <SocialIconLink
                        socialData={socialData.social.github}
                        showName
                        offsetH={0.11}
                        w={36}
                        textLeft
                        textSize="text-lg"
                    />
                    <a
                        href={socialData.social.github.link}
                        aria-hidden="true"
                        className={aClass}>
                        {socialData.social.github.nameLink}
                    </a>
                </li>
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
                            <div className="flex max-xl:flex-col xl:gap-12 xl:pt-6">
                                <div className="py-4 xl:flex-1 content-px">
                                    {/* <ContactIntro /> */}
                                    <ContactLinks />
                                </div>
                                <div className="max-xl:my-8 p-8 content-px xl:flex-[2_2_0%] xl:max-w-[50%] content-bg-alt">
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
