import { StaticImageData } from "next/image";

export interface PriceListInterface {
	title: string;
	description: string;
	type: 'basic' | 'additional';
	image: string;
	offer: OfferInterface[];
	slug: string;
}

export interface OfferInterface {
	title: string;
	description: string;
	image?: string;
}

export interface HomePageData {
	title: string;
	tags: string[];
	backgroundImage: string | StaticImageData
}