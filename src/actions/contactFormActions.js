'use server';
import { Resend } from 'resend';
import { ContactFormSchema } from '@/lib/contactSchema';

const resend = new Resend(process.env.RESEND_API_KEY);

const testData = { name: '', email: 'a@b', message: 'Hello, there!' };

export default async function parseForm(data) {
    return await ContactFormSchema.validate(data)
        .then(parsedData => {
            console.log('validation result: ', parsedData);
            return sendEmail(parsedData);
        })
        .catch(error => {
            console.log('Error: ', error.errors);
            return { success: false, error: error.errors };
        });
}

async function sendEmail(data) {
    const { name, email, message } = data;

    try {
        const emailSendResponse = await resend.emails
            .send({
                from: process.env.SEND_FROM_EMAIL,
                to: [process.env.CONTACT_EMAIL],
                reply_to: email,
                subject: `Contact form response from: ${name}`,
                text: `Message from ${name} (${email}):\n\n\n${message}`,
            })
            .then(response => {
                console.log(response);
                return { success: true };
            });
        return emailSendResponse;
    } catch (error) {
        return { success: false, error: error };
    }
}
