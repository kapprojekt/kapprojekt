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