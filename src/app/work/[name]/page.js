import ProjectPage from '@/components/otherPages/ProjectPage';
import { getFileData, getFileList } from '@/utils/mdUtils';

export const dynamicParams = false;

const projectsDirPath = 'src/data/projects';

export async function generateStaticParams() {
    const mdFileNames = getFileList(projectsDirPath);

    if (mdFileNames.length > 1) {
        const slugs = mdFileNames.map(fileName =>
            fileName.replace(/\.md$/, '')
        );
        const paramsList = slugs.map(slug => ({ name: slug }));
        return paramsList;
    } else {
        const paramsList = [{ name: mdFileNames[0].replace(/\.md$/, '') }];
        return paramsList;
    }
}

export default async function Page({ params }) {
    const project = getFileData(params.name, projectsDirPath);

    return (
        <article>
            <ProjectPage project={project} />
        </article>
    );
}
