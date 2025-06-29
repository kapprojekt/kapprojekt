import { StaticImageData } from "next/image";

export interface PriceListInterface {
  title: string;
  description: string;
  type: "basic" | "additional";
  image: string;
  offer: OfferInterface[];
  slug: string;
}

export interface OfferInterface {
  title: string;
  description: string;
  urls?: string[];
  image?: string;
}

export interface HomePageData {
  title: string;
  tags: string[];
  backgroundImage: string | StaticImageData;
  socialMedia?: {
    url: string;
    type: "fb" | "ig";
  }[];
}

export interface FaqItemData {
  title: string;
  sections: {
    text: string;
    buttons?: {
      label: string;
      url: string;
    }[];
  }[];
}
