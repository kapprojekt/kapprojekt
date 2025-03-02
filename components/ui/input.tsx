import React from 'react'


export const Input = ({...props}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
	<input className='outline-none block border px-3 py-2 my-2 w-full' {...props} />
  )
}

export const TextArea = ({...props}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
	return (
		<textarea className='outline-none block border resize-none px-3 py-2 my-2 w-full' {...props}></textarea>
	)
}