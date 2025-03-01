'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import logoImage from '@/src/LOGO.png'
import { usePathname } from 'next/navigation'

const Navbar = () => {
	const pathname = usePathname()

	const [isHidden, setIsHidden] = useState(false)

	const links = [
		{
			href: '/',
			label: 'Home'
		},
		{
			href: '/o-nas',
			label: 'O nas'
		},
		{
			href: '/cennik',
			label: 'Cennik'
		},
		{
			href: '/kontakt',
			label: 'Kontakt'
		},
	]

  return (
	<nav className={`z-20 fixed top-0 left-0 right-0 flex justify-between items-center px-10 backdrop-blur-sm
		${pathname === '/' ? 'bg-[rgba(0,0,0,0.2)]' : 'bg-[rgb(179,176,172)]'}`}>
		<Image className='w-16 h-16 drop-shadow-[0_0_4px_white]' src={logoImage} alt='logo' width={80} height={80} />
		<div className=''>
			{links.map((link) => <Link key={link.label} className='inline-block px-10 font-semibold transition-all hover:-translate-y-0.5 hover:drop-shadow-[1px_2px_2px_black]' href={link.href}>{link.label}</Link>)}
		</div>
	</nav>
  )
}

export default Navbar