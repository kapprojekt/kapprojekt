import Button from '@/components/ui/button';
import { PriceListInterface } from '@/lib/types';
import { getMarkup } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
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
	<section className="py-24 bg-[rgb(243,239,233)]">
		<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
			<div className="max-w-2xl mx-auto text-center">
				<h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{data.title}</h2>
				<p className="max-w-lg text-xl mx-auto mt-4 leading-relaxed text-gray-600 sm:text-2xl lg:text-3xl">{data.description}</p>
			</div>

			<div className="relative mt-12 lg:mt-20">

				<div className="relative grid grid-cols-1 text-center gap-y-12 gap-x-12">
					{data.offer.map((offer, index) => (

						<div key={offer.title}>
							<div className={`max-w-full flex flex-col justify-center items-center ${index%2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
								<div className='p-10 max-w-[620px] mx-auto'>
									<div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
										<span className="text-xl font-semibold text-gray-700">{index+1}</span>
									</div>
									<h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">{offer.title}</h3>
									<p className="my-4 text-base text-gray-600 whitespace-break-spaces text-justify">{offer.description}</p>
									{offer.urls && (
										<div className='flex flex-wrap gap-2 mt-8 justify-center'>
											{offer.urls.map(url => {
												const [href, label] = url.split('__')
												return (
												<Link key={href} href={href}>
													<Button>{label}</Button>
												</Link>
												)
											})}
										</div>
									)}
								</div>
								{offer.image && <Image className='w-full h-auto object-contain mx-auto max-w-[500px]' src={offer.image} alt={offer.title} width={400} height={400} />}
							</div>
						</div>
					))}
				</div>
			</div>
		<div className="mt-20 px-4 py-8 sm:px-6 lg:px-16 bg-white rounded-lg text-center shadow-lg">
				<h2 className="mt-12 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">Jak zacząć?</h2>
				<div className="mt-16">
						<p className="leading-relaxed text-black">
							Pracujemy zdalnie lub stacjonarnie na terenie Wrocławia, Warszawy i okolic.
							<br />
							Do rozpoczęcia pracy nad koncepcją potrzebujemy rzutu domu/mieszkania
							oraz wysokości pomieszczeń lub przekroju.
						</p>
						<p className="mt-16 text-xs text-gray-600">Powyższa oferta ma charakter informacyjny i nie stanowi
							 oferty handlowej w rozumieniu art. 66 §1 Kodeksu Cywilnego.
						</p>
				</div>

				<div className="flex justify-center items-center mt-16">
					<Link href="/cennik" className='w-32'>
						<Button>Cennik</Button>
					</Link>
				</div>
		</div>
		</div>
	</section>
  )
}

export default PriceListPage