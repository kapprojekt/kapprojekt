'use server'

import {z} from 'zod'

export type FormState = {
  errors?: {
    fullName?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
	fullName: z.string({required_error: 'To pole jest wymagane.'}),
	email: z.string({required_error: 'To pole jest wymagane.'})
			.min(5, 'Za mało znaków.')
			.email('Nieprawidłowy email.'),
	message: z.string({required_error: 'To pole jest wymagane.'})
			.min(10, 'Pole musi mieć od 10 do 500 znaków.')
			.max(500, 'Pole musi mieć od 10 do 500 znaków.')
})

export async function sendMessage(prevState: FormState, formData: FormData) {
	const validatedFields = FormSchema.safeParse(
		Object.fromEntries(formData.entries())
	)

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: "Missing Fields. Failed to create Invoice.",
    	};
  	}

	const { fullName, email, message } = validatedFields.data;

	let infoMessage = ''

	try {
		await fetch("https://formsubmit.co/ajax/kapprojekt.service@gmail.com", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify({
				"Imię i nazwisko": fullName,
				"Email": email,
				"Wiadomość": message
			})
		}).then(response => response.json())
		.then(() => {
			console.log('Sukces!');
			infoMessage = 'Wiadomość wysłana!'
		})
		.catch((error) => {
			console.log(error);
			infoMessage = 'Błąd! Wiadomość nie została wysłana.'
		})

	} catch(error) {
		console.log(error);
		infoMessage = 'Wystąpił problem z serwerem.'
	}

	return {
		message: infoMessage
	}
}