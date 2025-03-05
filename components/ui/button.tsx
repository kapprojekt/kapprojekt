import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	loading?: boolean;
}

const Button = ({children, className, disabled, loading, ...props}: ButtonProps) => {
  return (
	<button
		className={`inline-flex items-center justify-center w-full
	px-4 py-3 text-base font-semibold transition-all duration-200  border
	border-stone-400 rounded-md focus:outline-none
	 ${disabled || loading ? 'bg-stone-300 text-stone-500' : 'bg-stone-400 cursor-pointer hover:bg-white'} ${className}`}
		disabled={disabled || loading} {...props}>
			{loading ? (
				<svg className='h-6 w-6 mx-auto text-stone-600 animate-spin' viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path d="M20.0001 12C20.0001 13.3811 19.6425 14.7386 18.9623 15.9405C18.282 17.1424 17.3022 18.1477 16.1182 18.8587C14.9341 19.5696 13.5862 19.9619 12.2056 19.9974C10.825 20.0328 9.45873 19.7103 8.23975 19.0612" strokeWidth="3.55556" strokeLinecap="round"/>
				</svg>
			) : children }
	</button>
  )
}

export default Button