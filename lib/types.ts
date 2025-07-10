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
  subtitle: string;
  longtext: string;
  backgroundImage: string | StaticImageData;
  socialMedia?: {
    url: string;
    type: "fb" | "ig";
  }[];
  faq?: FaqData;
  testimonials?: TestimonialsSection;
}

export interface FaqData {
  title: string;
  subtitle: string;
  faqList: FaqItemData[];
}
export interface FaqItemData {
  question: string;
  sections: {
    text: string;
    buttons?: {
      label: string;
      url: string;
    }[];
  }[];
}

export interface ProjectData {
  slug: string;
  order: number;
  isOnHomepage: boolean;
  title: string;
  description: string;
  location?: string;
  date?: string;
  projectType?: string;
  instaLink?: string;
  images: ProjectImageData[];
}

export interface ProjectImageData {
  image: string;
  alt: string;
  width: number;
  height: number;
}

export interface TestimonialsSection {
  title: string;
  testimonialList: TestimonialData[];
}

export interface TestimonialData {
  fullName: string;
  testimonialText: string;
}
