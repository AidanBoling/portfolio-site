import About from '@/components/homePage/About';
import Contact from '@/components/homePage/Contact';
import Cover from '@/components/homePage/Cover';
import Projects from '@/components/homePage/Projects';
import { getFileData } from '@/utils/mdUtils';
import pageInfo from '@/data/siteContent.json';

const og = pageInfo.metadata.og.home;

export const metadata = {
    openGraph: {
        title: og.title,
        description: pageInfo.metadata.description,
        url: '/',
        locale: 'en_US',
        type: 'website',
    },
};

export const revalidate = 1800;

export default function Page() {
    const dirPath = 'data/homePage';
    const about = getFileData('about', dirPath);

    return (
        <main>
            <Cover />
            <About content={about.content} />
            <Projects />
            <Contact />
        </main>
    );
}
