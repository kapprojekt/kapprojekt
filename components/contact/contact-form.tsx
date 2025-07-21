"use client";

import React, { useActionState, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { FormState, sendMessage } from "@/lib/actions";
import Button from "../ui/button";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialState: FormState = { message: null, errors: {} };

  const [formState, formAction] = useActionState(sendMessage, initialState);

  useEffect(() => {
    if (formState.message) {
      setIsLoading(false);
    }
  }, [formState]);

  const onSubmitCallback = () => {
    setIsLoading(true);
  };

  return (
    <div className="mt-6 overflow-hidden bg-white rounded-xl">
      <div className="px-6 py-12 sm:p-12">
        <h3 className="text-3xl font-semibold text-center text-gray-900">
          Wyślij nam wiadomość
        </h3>

        <form action={formAction} onSubmit={onSubmitCallback} className="mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
            <Input
              fieldLabel="Imię i nazwisko"
              fieldName="fullName"
              fieldErrors={formState.errors?.fullName}
            />
            <Input
              fieldLabel="Email"
              fieldName="email"
              fieldErrors={formState.errors?.email}
            />
            <Input
              fieldLabel="Lokalizacja inwestycji"
              fieldName="localisation"
              fieldErrors={formState.errors?.localisation}
            />
            <div>
              <label
                htmlFor="investType"
                className="text-base font-medium text-gray-900"
              >
                Rodzaj inwestycji
              </label>
              <div className="mt-2.5 relative">
                <select
                  name="investType"
                  id="investType"
                  className="block w-full px-4 py-3 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-stone-400 caret-stone-400"
                >
                  <option defaultValue="Wykończenie od stanu deweloperskiego">
                    Wykończenie od stanu deweloperskiego
                  </option>
                  <option value="Wykończenie mieszkania z rynku wtórnego">
                    Wykończenie mieszkania z rynku wtórnego
                  </option>
                  <option value="Remont">Remont</option>
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
              <label
                htmlFor="message"
                className="text-base font-medium text-gray-900"
              >
                Wiadomość
              </label>
              <div className="mt-2.5 relative">
                <textarea
                  name="message"
                  id="message"
                  className="block w-full px-4 py-3 placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-stone-400 caret-stone-400"
                  rows={4}
                ></textarea>
              </div>
              {formState.errors?.message &&
                formState.errors.message.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
            <div className="sm:col-span-2 mt-2">
              <p className="text-sm my-4">
                Administratorem danych osobowych jest KAP Projekt. Dane wpisane
                w formularzu kontaktowym będą przetwarzane w celu odpowiedzi na
                przesłane zapytanie zgodnie z{" "}
                <a
                  href="rodo.pdf"
                  target="_blank"
                  className="underline text-stone-500"
                >
                  regulaminem
                </a>
                .
              </p>
              <Button type="submit" loading={isLoading}>
                Wyślij
              </Button>
              {formState.message && (
                <p className="text-center text-sm mt-2">{formState.message}</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
