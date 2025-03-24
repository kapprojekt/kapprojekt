import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldName: string;
  fieldLabel: string;
  fieldErrors?: string[];
}

export const Input = ({
  fieldName,
  fieldLabel,
  fieldErrors,
  className,
  ...props
}: InputProps) => {
  return (
    <div className={className}>
      <label
        htmlFor={fieldName}
        className="text-base font-medium text-gray-900"
      >
        {fieldLabel}
      </label>
      <div className="mt-2.5 relative">
        <input
          type="text"
          name={fieldName}
          id={fieldName}
          className="block w-full px-4 py-3 placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-stone-400 caret-stone-400"
          {...props}
        />
      </div>
      {fieldErrors &&
        fieldErrors.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
    </div>
  );
};

export const TextArea = ({
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      className="outline-none block border resize-none px-3 py-2 my-2 w-full"
      {...props}
    ></textarea>
  );
};
