import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import OuterContainer from '../layout/OuterContainer';

export default function ProjectPage({ project }) {
    const components = {
        p: ({ node, children }) => {
            if (node.children[0].tagName === 'img') {
                const { alt, src, ...rest } = node.children[0].properties;
                return (
                    <div
                        className="not-prose w-full max-w-[950px] aspect-[70/45] max-h-[400px] m-0 relative"
                        {...rest}>
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            sizes="(max-width: 600px) 95vw, (max-width: 1024px) 560px, 950px"
                            style={{
                                maxWidth: '950px',
                                maxHeight: '400px',
                                objectFit: 'contain',
                                // position: 'relative !important',
                            }}
                        />
                    </div>
                );
            }
            // Return default child if it's not an image
            return <p>{children}</p>;
        },
    };

    return (
        <div className="pt-[75px] xxs:pt-[100px] xs:pt-[15vh] lg:pt-[18vh] pb-24 page-min-h relative">
            <OuterContainer>
                <div className="w-full min-h-min content-bg content-max-size-x p-[5vw] xs:p-8 sm:p-12 rounded-sm ab-prose">
                    <ReactMarkdown components={components}>
                        {project.content}
                    </ReactMarkdown>
                </div>
            </OuterContainer>
        </div>
    );
}
