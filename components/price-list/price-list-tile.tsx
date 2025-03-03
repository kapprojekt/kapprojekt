import React from 'react'
import Button from '../ui/button';
import Link from 'next/link';

interface PriceListTileProps {
	isNew?: boolean;
	imgUrl?: string;
	title: string;
	text: string;
}

const PriceListTile = (props: PriceListTileProps) => {
  return (
	  <div className="overflow-hidden bg-white rounded shadow">
        <div className="p-4 h-full flex flex-col justify-between items-center">
            <div className="relative">
                <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="" />
				{props.isNew &&
					<div className="absolute top-4 left-4">
						<span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">Nowość</span>
					</div>
				}
            </div>
            <p className="mt-5 text-2xl text-center font-semibold">{props.title}</p>
            <p className="my-4 text-base text-gray-600">{props.text}</p>
            <Link href={`/cennik/${props.title}`}>
              <Button>Szczegóły</Button>
            </Link>
        </div>
    </div>
  )
}

export default PriceListTile