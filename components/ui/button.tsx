import React from 'react'

const Button = ({children, className, ...props}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
	<button
		className={`inline-flex cursor-pointer items-center justify-center w-full
	px-4 py-3 text-base font-semibold transition-all duration-200 bg-stone-400 border
	border-stone-400 rounded-md focus:outline-none hover:bg-white ${className}`}
		{...props}>
		{children}
	</button>
  )
}

export default Button