'use client';
import OuterContainer from '@/components/layout/OuterContainer';

export default function Error({ error, reset }) {
    console.log('Error message: ', error.message);

    return (
        <div className="pt-[15vh] pb-24 min-h-screen relative">
            <OuterContainer>
                <div className="w-full min-h-min content-bg">
                    <div className="prose prose-slate dark:prose-invert content-max-size-x content-px">
                        <h2 mb="2rem">Something went wrong!</h2>
                        <p>
                            Try loading this page again using the button below,
                            or click the back button in your browser to leave
                            this page.
                        </p>
                        <button
                            className="link-btn-base default font-medium uppercase"
                            onClick={() => reset()}>
                            Try again
                        </button>
                    </div>
                </div>
            </OuterContainer>
        </div>
    );
}
