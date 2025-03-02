import PriceListTile from '@/components/price-list/price-list-tile'
import React from 'react'

const PriceListPage = () => {
  return (
	<section className="py-24">
		<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
			<div className="flex items-end justify-between">
				<div className="flex-1 text-center">
					<h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Cennik</h2>
					<p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
				</div>
			</div>

			<div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
				<PriceListTile title='Projekt Kompleksowy lub Wykonawczy bez realistycznych wizualizacji ' text='od 100 zł/m2' isNew/>
				<PriceListTile title='Konsultacja Wnętrzarska' text='100 zł lub GRATIS*' />
				<PriceListTile title='Projekt Funkcjonalny' text='50 zł/m2' />
				<PriceListTile title='Projekt Kompleksowy' text='150 zł/m2' />
				<PriceListTile title='Projekt Wykonawczy' text='180 zł/m2' />
			</div>
		</div>
  	</section>

  )
}

export default PriceListPage