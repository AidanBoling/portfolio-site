import content from '@/data/about.json';

export default function Footer() {
    return (
        <footer className="w-screen h-[140px] bg-gray-950/90 mt-16">
            <div className="mx-auto max-w-xs h-full py-8 flex justify-center">
                <small className="self-end">
                    &copy; {content.name} {new Date().getFullYear()}
                </small>
            </div>
        </footer>
    );
}
