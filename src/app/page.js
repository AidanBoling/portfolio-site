import About from '@/components/homePage/About';
import Contact from '@/components/homePage/Contact';
import Cover from '@/components/homePage/Cover';
import Projects from '@/components/homePage/Projects';

export default function Page() {
    return (
        <main>
            <Cover />
            <About />
            <Projects />
            <Contact />
        </main>
    );
}
