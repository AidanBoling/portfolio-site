import About from '@/components/homePage/About';
import Contact from '@/components/homePage/Contact';
import Cover from '@/components/homePage/Cover';
import Projects from '@/components/homePage/Projects';
import { getFileData } from '@/utils/mdUtils';

export default function Page() {
    const dirPath = 'src/data/homePage';
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
