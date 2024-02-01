'use client';

export default function OuterContainer({ prose, noPxBelowLg, children }) {
    return (
        <div
            className={`lg:container${
                noPxBelowLg ? '' : ' xs:px-6 sm:px-12 md:px-16'
            } lg:px-16 relative${prose ? ' ab-prose' : ''}`}>
            {children}
        </div>
    );
}
