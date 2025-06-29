"use client";

import React, { useActionState, useEffect, useState } from "react";
import { FormState, sendMessage } from "@/lib/actions";
import Button from "@/components/ui/button";
import { FaEnvelope, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa6";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const Contact = () => {
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
    <section className="py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Kontakt
          </h2>
          {/* <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p> */}
        </div>

        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="flex flex-col md:flex-row gap-6 px-8 text-center md:px-0">
            <div className="overflow-hidden bg-white rounded-xl flex-1">
              <div className="p-6">
                <FaPhone className="flex-shrink-0 w-8 h-8 mx-auto text-stone-500" />
                <p className="mt-6 text-lg font-medium text-gray-900">
                  +48 695 040 898 (Wrocław)
                </p>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  +48 534 788 448 (Warszawa)
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-xl flex-1">
              <div className="p-6 h-full">
                <FaEnvelope className="flex-shrink-0 w-8 h-8 mx-auto text-stone-500" />
                <p className="mt-6 md:mt-10 text-lg font-medium text-gray-900">
                  kontakt@kapprojekt.pl
                </p>
              </div>
            </div>

            <div className="overflow-hidden flex justify-center md:flex-col gap-4 text-stone-500 font-thin">
              <Link
                href="https://www.instagram.com/kap.projekt/"
                target="_blank"
                className="p-6 aspect-square bg-white rounded-xl duration-300 hover:bg-stone-500 hover:text-white hover:scale-95"
              >
                <FaInstagram className="w-8 h-8" />
              </Link>
              <Link
                href="https://www.facebook.com/KAPProjekt/"
                target="_blank"
                className="p-6 aspect-square bg-white rounded-xl duration-300 hover:bg-stone-500 hover:text-white hover:scale-95"
              >
                <FaFacebookF className="w-8 h-8" />
              </Link>
            </div>
          </div>

          <div className="mt-6 overflow-hidden bg-white rounded-xl">
            <div className="px-6 py-12 sm:p-12">
              <h3 className="text-3xl font-semibold text-center text-gray-900">
                Wyślij nam wiadomość
              </h3>

              <form
                action={formAction}
                onSubmit={onSubmitCallback}
                className="mt-14"
              >
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
                    <Button type="submit" loading={isLoading}>
                      Wyślij
                    </Button>
                    {formState.message && (
                      <p className="text-center text-sm mt-2">
                        {formState.message}
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
