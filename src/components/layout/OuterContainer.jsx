'use client';

export default function OuterContainer({ prose, children }) {
    return (
        <div
            className={`lg:container xs:px-6 sm:px-12 md:px-16 lg:px-16 relative${
                prose ? ' ab-prose' : ''
            }`}>
            {children}
        </div>
    );
}
