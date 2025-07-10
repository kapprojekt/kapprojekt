import React from "react";
import Button from "../ui/button";
import Link from "next/link";
import { PriceListInterface } from "@/lib/types";
import CustomImage from "../custom-image";

const PriceListTile = ({ priceList }: { priceList: PriceListInterface }) => {
  return (
    <div className="overflow-hidden bg-white rounded shadow">
      <div className="p-4 h-full flex flex-col justify-between items-center">
        <div className="relative">
          <CustomImage
            className="object-cover aspect-[4/3] w-full"
            src={priceList.image.toString()}
            alt={priceList.title}
            width={400}
            height={400}
          />
        </div>
        <p className="mt-5 text-2xl text-center font-semibold">
          {priceList.title}
        </p>
        <p className="my-4 text-base text-gray-600">{priceList.description}</p>
        <Link href={`/cennik/${priceList.slug}`}>
          <Button>Szczegóły</Button>
        </Link>
      </div>
    </div>
  );
};

export default PriceListTile;
