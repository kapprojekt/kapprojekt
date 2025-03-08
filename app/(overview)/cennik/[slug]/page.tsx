import { PriceListInterface } from '@/lib/types';
import { getMarkup } from '@/lib/utils';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'

interface PriceListPageProps {
	params: Promise<{
		slug: string;
	}>
}

const PriceListPage = async ({params}: PriceListPageProps) => {
	const {slug} = await (params)

	const priceList = getMarkup('content/price-list', `${slug}.md`);

	if(!priceList) {
		notFound()
	}

	const data = priceList.data as PriceListInterface;

  return (
	<section className="py-24 bg-white">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{data.title}</h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">{data.description}</p>
        </div>

        <div className="relative mt-12 lg:mt-20">

            <div className="relative grid grid-cols-1 text-center gap-y-12 gap-x-12">
				{data.offer.map((offer, index) => (

					<div key={offer.title}>
						<div className={`flex flex-col justify-center items-center ${index%2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
							<div className='p-10 max-w-[700px] mx-auto'>
								<div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
									<span className="text-xl font-semibold text-gray-700">{index+1}</span>
								</div>
								<h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">{offer.title}</h3>
								<p className="mt-4 text-base text-gray-600">{offer.description}</p>
							</div>
							{offer.image && <Image className='w-auto mx-auto max-w-[500px] max-h-[400px]' src={offer.image} alt={offer.title} width={400} height={400} />}
						</div>
					</div>
				))}
            </div>
        </div>
    </div>
</section>

  )
}

export default PriceListPage