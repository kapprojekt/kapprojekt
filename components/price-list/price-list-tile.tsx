import React from 'react'
import Button from '../ui/button';
import Link from 'next/link';
import { PriceListInterface } from '@/lib/types';
import Image from 'next/image';

const PriceListTile = ({priceList}: {priceList: PriceListInterface}) => {
  return (
	  <div className="overflow-hidden bg-white rounded shadow">
        <div className="p-4 h-full flex flex-col justify-between items-center">
            <div className="relative">
                <Image className="object-cover aspect-[4/3] w-full" src={priceList.image} alt={priceList.title} width={400} height={400} />
				{/* {props.isNew &&
					<div className="absolute top-4 left-4">
						<span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">Nowość</span>
					</div>
				} */}
            </div>
            <p className="mt-5 text-2xl text-center font-semibold">{priceList.title}</p>
            <p className="my-4 text-base text-gray-600">{priceList.description}</p>
            <Link href={`/cennik/${priceList.slug}`}>
              <Button>Szczegóły</Button>
            </Link>
        </div>
    </div>
  )
}

export default PriceListTile