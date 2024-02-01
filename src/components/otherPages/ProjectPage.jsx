import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import OuterContainer from '../layout/OuterContainer';

export default function ProjectPage({ project }) {
    const components = {
        p: ({ node, children }) => {
            if (node.children[0].tagName === 'img') {
                const { alt, src, ...rest } = node.children[0].properties;
                return (
                    <div
                        className="not-prose w-full max-w-[950px] aspect-[70/48] mt-8 relative mb-8"
                        {...rest}>
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            quality="100"
                            sizes="(max-width: 600px) 95vw, (max-width: 1024px) 560px, 950px"
                            style={{
                                maxWidth: '950px',
                                // maxHeight: '520px',
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
        h6: ({ children }) => {
            return <p className="paragraph-header">{children}</p>;
        },
        h2: ({ children }) => {
            return <h2 className="section-header">{children}</h2>;
        },
        a: ({ node, children }) => {
            const { href, ...rest } = node.properties;

            return (
                <a href={href} target="_blank">
                    {children}
                </a>
            );
        },
    };

    return (
        <div className="project-page pt-[75px] xxs:pt-[100px] xs:pt-[15vh] lg:pt-[18vh] pb-24 page-min-h relative">
            <OuterContainer noPxBelowLg>
                <div className="w-full min-h-min content-bg content-max-size-x p-[5vw] xs:p-8 sm:p-12 md:p-16 lg:px-24 rounded-sm ab-prose">
                    <ReactMarkdown
                        components={components}
                        rehypePlugins={[rehypeRaw]}>
                        {project.content}
                    </ReactMarkdown>
                </div>
            </OuterContainer>
        </div>
    );
}
