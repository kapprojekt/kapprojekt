import Navbar from '@/components/navbar'
import React from 'react'

const PagesLayout = ({children}: {children: React.ReactNode}) => {
  return (
	<>
		<Navbar />
		{children}
	</>
  )
}

export default PagesLayout