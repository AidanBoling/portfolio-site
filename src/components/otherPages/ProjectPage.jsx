import ReactMarkdown from 'react-markdown';
import OuterContainer from '../layout/OuterContainer';

export default function ProjectPage({ project }) {
    const imgComponent = {
        img({ node, alt, src, ...rest }) {
            return (
                <div className="mdImageContainer" {...rest}>
                    <Image
                        src={src}
                        alt={alt}
                        width="600"
                        height="300"
                        style={{ objectFit: 'contain' }}
                    />
                </div>
            );
        },
    };

    return (
        <div className="pt-[75px] xxs:pt-[100px] xs:pt-[15vh] lg:pt-[18vh] pb-24 page-min-h relative">
            <OuterContainer>
                <div className="w-full min-h-min content-bg content-max-size-x p-[5vw] xs:p-8 sm:p-12 rounded-sm ab-prose">
                    <ReactMarkdown components={{ imgComponent }}>
                        {project.content}
                    </ReactMarkdown>
                </div>
            </OuterContainer>
        </div>
    );
}
