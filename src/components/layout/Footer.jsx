import SocialIconLink from '../SocialIconLink';
import content from '@/data/about.json';

export default function Footer() {
    return (
        <footer className="w-screen bg-slate-900/75 dark:bg-gray-950/90">
            <div className="mx-auto max-w-xs h-full py-8 flex flex-col items-center justify-between">
                <ul className="flex gap-6">
                    <li className="listImageNone">
                        <SocialIconLink
                            socialData={content.social.email}
                            w={28}
                            color="light"
                        />
                    </li>
                    <li className="listImageNone">
                        <SocialIconLink
                            socialData={content.social.linkedin}
                            w={28}
                            offsetH={0.14}
                            color="light"
                        />
                    </li>
                    <li className="listImageNone">
                        <SocialIconLink
                            socialData={content.social.github}
                            w={28}
                            offsetH={0.1}
                            color="light"
                        />
                    </li>
                </ul>
                <div className="border-bottom-gradient-double h-[2px] w-full"></div>
                <small>
                    &copy; {content.name} {new Date().getFullYear()}
                </small>
            </div>
        </footer>
    );
}
