import React from 'react'

interface OfferPageProps {
	params: {
		slug: string;
	}
}

const OfferPage = ({params}: OfferPageProps) => {
	console.log(params);
  return (
	<div>OfferPage</div>
  )
}

export default OfferPage