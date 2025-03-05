'use client'

// import { Input, TextArea } from '@/components/ui/input';
import React, { useActionState, useEffect, useState} from 'react'
import { FormState, sendMessage } from '@/lib/actions';
import Button from '@/components/ui/button';

const ContactPage = () => {
	const [isLoading, setIsLoading] = useState(false);

	const initialState: FormState = { message: null, errors: {}}

	const [formState, formAction] = useActionState(sendMessage, initialState);

	useEffect(() => {
		if(formState.message) {
			setIsLoading(false);
		}
	}, [formState])

	const onSubmitCallback = (event: React.FormEvent<HTMLFormElement>) => {
		setIsLoading(true);
	}

  return (
	<section className="py-24">
		<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
			<div className="max-w-2xl mx-auto text-center">
				<h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Kontakt</h2>
				{/* <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p> */}
			</div>

			<div className="max-w-5xl mx-auto mt-12 sm:mt-16">
				<div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-2">
					<div className="overflow-hidden bg-white rounded-xl">
						<div className="p-6">
							<svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1}
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
							<p className="mt-6 text-lg font-medium text-gray-900">+48 695 040 898 (Wrocław)</p>
							<p className="mt-1 text-lg font-medium text-gray-900">+48 534 788 448 (Warszawa)</p>
						</div>
					</div>

					<div className="overflow-hidden bg-white rounded-xl">
						<div className="p-6">
							<svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							<p className="mt-6 text-lg font-medium text-gray-900">kapprojektpolska@gmail.com</p>
						</div>
					</div>

					{/* <div className="overflow-hidden bg-white rounded-xl">
						<div className="p-6">
							<svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
							<p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">8502 Preston Rd. Ingle, Maine 98380, USA</p>
						</div>
					</div> */}
				</div>

				<div className="mt-6 overflow-hidden bg-white rounded-xl">
					<div className="px-6 py-12 sm:p-12">
						<h3 className="text-3xl font-semibold text-center text-gray-900">Wyślij nam wiadomość</h3>

						<form action={formAction} onSubmit={onSubmitCallback} className="mt-14">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
								<div>
									<label htmlFor="fullName" className="text-base font-medium text-gray-900">Imię i nazwisko</label>
									<div className="mt-2.5 relative">
										<input type="text" name="fullName" id="fullName" className="block w-full px-4 py-3 placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-stone-400 caret-stone-400" />
									</div>
									{formState.errors?.fullName &&
										formState.errors.fullName.map((error: string) => (
											<p className="mt-2 text-sm text-red-500" key={error}>
											{error}
											</p>
										))}
								</div>
								<div>
									<label htmlFor="email" className="text-base font-medium text-gray-900">Email</label>
									<div className="mt-2.5 relative">
										<input type="email" name="email" id="email" className="block w-full px-4 py-3 placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-stone-400 caret-stone-400" />
									</div>
									{formState.errors?.email &&
										formState.errors.email.map((error: string) => (
											<p className="mt-2 text-sm text-red-500" key={error}>
											{error}
											</p>
										))}
								</div>
								<div>
									<label htmlFor="localisation" className="text-base font-medium text-gray-900">Lokalizacja inwestycji</label>
									<div className="mt-2.5 relative">
										<input type="text" name="localisation" id="localisation" className="block w-full px-4 py-3 placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-stone-400 caret-stone-400" />
									</div>
									{formState.errors?.localisation &&
										formState.errors.localisation.map((error: string) => (
											<p className="mt-2 text-sm text-red-500" key={error}>
											{error}
											</p>
										))}
								</div>
								<div>
									<label htmlFor="investType" className="text-base font-medium text-gray-900">Rodzaj inwestycji</label>
									<div className="mt-2.5 relative">
										<select name="investType" id="investType" className="block w-full px-4 py-3 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-stone-400 caret-stone-400">
											<option defaultValue='Wykończenie od stanu deweloperskiego'>Wykończenie od stanu deweloperskiego</option>
											<option value='Wykończenie mieszkania z rynku wtórnego'>Wykończenie mieszkania z rynku wtórnego</option>
											<option value='Remont'>Remont</option>
										</select>
									</div>
									{formState.errors?.investType &&
										formState.errors.investType.map((error: string) => (
											<p className="mt-2 text-sm text-red-500" key={error}>
											{error}
											</p>
										))}
								</div>
								<div className="sm:col-span-2">
									<label htmlFor="message" className="text-base font-medium text-gray-900">Wiadomość</label>
									<div className="mt-2.5 relative">
										<textarea name="message" id="message" className="block w-full px-4 py-3 placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-stone-400 caret-stone-400" rows={4}></textarea>
									</div>
									{formState.errors?.message &&
										formState.errors.message.map((error: string) => (
											<p className="mt-2 text-sm text-red-500" key={error}>
											{error}
											</p>
										))}
								</div>

								<div className="sm:col-span-2 mt-2">
									<Button type='submit' loading={isLoading}>Wyślij</Button>
									{formState.message && <p className='text-center text-sm mt-2'>{formState.message}</p>}
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default ContactPage