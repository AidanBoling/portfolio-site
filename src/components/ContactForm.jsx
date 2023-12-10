'use client';

export default function ContactForm() {
    function handleSubmit(event) {
        e.preventDefault();
    }

    const formFieldBaseClass =
        'px-2 py-1 text-lg w-full bg-gray-300/60 border border-blue-900/50 rounded';
    const formLabelBaseClass = 'text-blue-950/90';
    const formErrorBaseClass = 'text-red-500';

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full max-w-[600px]">
            <div>
                <label className={formLabelBaseClass} htmlFor="name">
                    Name
                </label>
                <input
                    className={formFieldBaseClass}
                    type="text"
                    id="name"
                    name="name"
                    autocomplete="name"
                    // aria-invalid="false"
                    aria-describedby="error_name"
                />
                {/* <p className={formErrorBaseClass} id="error-name">
                Name is required.
            </p> */}
            </div>
            <div>
                <label className={formLabelBaseClass} htmlFor="email">
                    Email
                </label>
                <input
                    className={formFieldBaseClass}
                    type="email"
                    id="email"
                    name="email"
                    autocomplete="email"
                    aria-describedby="error-email"
                />
                {/* <p className={formErrorBaseClass} id="error_email">
                Email is required.
            </p> */}
            </div>
            <div>
                <label className={formLabelBaseClass} htmlFor="message">
                    Message
                </label>
                <textarea
                    className={formFieldBaseClass}
                    rows={4}
                    type="text"
                    id="message"
                    name="message"
                    aria-describedby="error-message"
                />
                {/* <p className={formErrorBaseClass} id="error-message">
                Message cannot be empty.
            </p> */}
            </div>

            <button className="link-btn-base w-[150px]" type="submit">
                SUBMIT
            </button>
        </form>
    );
}
