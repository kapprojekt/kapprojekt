import {z} from 'zod'

export type FormState = {
  errors?: {
    fullName?: string[];
    email?: string[];
	localisation?: string[];
	investType?: string[];
    message?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
	fullName: z.string({required_error: 'To pole jest wymagane.'}),
	email: z.string({required_error: 'To pole jest wymagane.'})
			.min(5, 'Za mało znaków.')
			.email('Nieprawidłowy email.'),
	localisation: z.string({required_error: 'To pole jest wymagane.'})
			.min(3, 'Za mało znaków.'),
	investType: z.string({invalid_type_error: 'Podano nieprawidłową wartość.'}),
	message: z.string({required_error: 'To pole jest wymagane.'})
			.min(5, 'Pole musi mieć od 5 do 500 znaków.')
			.max(500, 'Pole musi mieć od 5 do 500 znaków.')
})

export async function sendMessage(prevState: FormState, formData: FormData) {
	const validatedFields = FormSchema.safeParse(
		Object.fromEntries(formData.entries())
	)

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: "Uzupełnij wymagane pola!",
    	};
  	}

	const { fullName, email, localisation, investType, message } = validatedFields.data;

	let infoMessage = ''

		const res = await fetch("https://formsubmit.co/ajax/kapprojekt.service@gmail.com", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify({
				"Imię i nazwisko": fullName.toString(),
				"Email": email.toString(),
				"Wiadomość": message.toString(),
				"Lokalizacja inwestycji": localisation.toString(),
				"Rodzaj inwestycji": investType.toString()
			})
		})

		const response = await res.json();
		if(response.success)
			infoMessage = "Wysłano wiadomość."
		else
			infoMessage = "Wystąpił błąd podczas wysyłania."

	return {
		message: infoMessage
	}
}