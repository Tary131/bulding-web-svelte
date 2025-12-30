import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import type { Actions } from './$types';

const contactSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters'),
	email: z.string().email('Invalid email address'),
	phone: z.string().optional(),
	message: z.string().min(10, 'Message must be at least 10 characters')
});

export const actions: Actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const data = {
				name: formData.get('name'),
				email: formData.get('email'),
				phone: formData.get('phone'),
				message: formData.get('message')
			};

			const result = contactSchema.safeParse(data);

			if (!result.success) {
				return fail(400, {
					error: 'Validation failed',
					issues: result.error.issues,
					values: data
				});
			}

			// Here you would typically send an email or save to database
			// For now, we'll just log it
			console.log('Contact form submission:', result.data);

			// Redirect to thank you page or show success message
			throw redirect(303, '/thank-you');
		} catch (error) {
			console.error('Error processing contact form:', error);
			if (error instanceof Error && error.message.includes('redirect')) {
				throw error; // Re-throw redirect errors
			}
			return fail(500, {
				error: 'An error occurred while processing your request'
			});
		}
	}
};

