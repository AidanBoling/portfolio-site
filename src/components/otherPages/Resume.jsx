'use client';
import OuterContainer from '@/components/layout/OuterContainer';

export default function Resume() {
    return (
        <div className="pt-[15vh] pb-24 min-h-screen relative">
            <OuterContainer>
                <div className="w-full min-h-min content-bg">
                    <div className="prose prose-slate dark:prose-invert content-max-size-x content-px section-py">
                        <h2 mb="2rem">Resume...</h2>
                        <p>Placeholder</p>
                        <button
                            className="mt-16 link-btn-base default font-medium"
                            onClick={() => reset()}>
                            Download as PDF
                        </button>
                    </div>
                </div>
            </OuterContainer>
        </div>
    );
}
