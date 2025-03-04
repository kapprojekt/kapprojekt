import React from 'react'

interface OfferPageProps {
	params: Promise<{
		slug: string;
	}>
}

const OfferPage = async ({params}: OfferPageProps) => {
	const {slug} = await (params)
  return (
	<div className='whitespace-nowrap py-20 overflow-hidden'>
		<p className='text-wrap'>
			{slug}
		</p>
	</div>
  )
}

export default OfferPage