import * as yup from 'yup';

export const ContactFormSchema = yup.object().shape({
    name: yup
        .string()
        .max(100, 'Name is too long')
        .required('Name is required'),
    email: yup
        .string()
        .email('Not a valid email')
        .max(100, 'Email is too long')
        .required('Email is required'),
    message: yup
        .string()
        .min(5, 'Message must be at least 5 characters')
        .max(1000, 'Message can be maximum of 1000 characters')
        .required('Message is required'),
});
