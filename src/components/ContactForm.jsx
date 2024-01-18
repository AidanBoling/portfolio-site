'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactFormSchema } from '@/lib/contactSchema';
import parseForm from '@/actions/contactFormActions';

export default function ContactForm() {
    const [toast, setToast] = useState();
    const [formStatus, setFormStatus] = useState();
    const formFieldBaseClass =
        'px-3 py-2 my-1 mb-2 text-normal w-full bg-gray-300/60 dark:bg-slate-600/60 border border-blue-900/40 dark:border-0 dark:border-blue-600/40 rounded-sm focus:outline-none focus:ring focus:ring-blue-400/90 aria-invalid:border aria-invalid:border-red-500';
    const formLabelBaseClass =
        'font-light text-lg text-blue-950/90 dark:text-blue-200/90';
    const formErrorBaseClass = 'm-0 mb-1 p-0 text-red-500 text-sm';

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(ContactFormSchema),
    });

    async function processForm(data) {
        const result = await parseForm(data);

        if (result?.success) {
            setFormStatus('success');
            setToast('Message sent!');
            reset();
        } else {
            console.log('Something went wrong: ', result?.error);
            setToast('Something went wrong!');
            setFormStatus('error');
        }
    }

    function handleToastDismiss() {
        setToast('');
        setFormStatus('');
    }

    return (
        <form
            onSubmit={handleSubmit(processForm)}
            className="flex flex-col gap-4 w-full">
            <div>
                <label className={formLabelBaseClass} htmlFor="name">
                    Name
                </label>
                <input
                    className={formFieldBaseClass}
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    aria-invalid={errors.name?.message ? true : false}
                    aria-describedby="error-name"
                    {...register('name')}
                />
                {errors.name?.message && (
                    <p className={formErrorBaseClass} id="error-name">
                        {errors.name.message}
                    </p>
                )}
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
                    autoComplete="email"
                    aria-invalid={errors.email?.message ? true : false}
                    aria-describedby="error-email"
                    {...register('email')}
                />
                {errors.email?.message && (
                    <p className={formErrorBaseClass} id="error-email">
                        {errors.email.message}
                    </p>
                )}
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
                    aria-invalid={errors.message?.message ? true : false}
                    aria-describedby="error-message"
                    {...register('message')}
                />
                {errors.message?.message && (
                    <p
                        className={formErrorBaseClass + ' -mt-2'}
                        id="error-message">
                        {errors.message.message}
                    </p>
                )}
            </div>
            <div className="mt-4 max-h-min xxs:w-[200px] dark:bg-gray-900/90">
                <button
                    className="link-btn-base default max-xxs:py-2 font-[400] dark:border-2 text-lg disabled:border-gray-500 disabled:text-gray-500"
                    type="submit"
                    disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </div>

            {toast && (
                <div
                    id="toast"
                    className={`my-4 p-4 rounded text-center ${
                        formStatus === 'success'
                            ? ' bg-green-200 text-green-800'
                            : ' bg-red-200 text-red-800'
                    }`}>
                    <span id="toast-message" role="status">
                        {toast}
                    </span>
                    <button
                        onClick={handleToastDismiss}
                        className="ml-6 font-medium underline text-right"
                        type="button">
                        Dismiss
                    </button>
                </div>
            )}
        </form>
    );
}
