import content from '@/data/about.json';

export default function Footer() {
    return (
        <footer className="w-screen bg-slate-900/75 dark:bg-gray-950/90">
            <div className="mx-auto max-w-xs h-full py-8 flex justify-center">
                <small className="self-end">
                    &copy; {content.name} {new Date().getFullYear()}
                </small>
            </div>
        </footer>
    );
}
