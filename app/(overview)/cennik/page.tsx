import PriceListTile from "@/components/price-list/price-list-tile";
import { PriceListInterface } from "@/lib/types";
import { getFolderMarkups } from "@/lib/utils";
import React from "react";

const PricesListPage = () => {
  const priceLists = getFolderMarkups("content/price-list");

  if (!priceLists) {
    return (
      <p className="py-32 text-4xl text-center">
        Wystąpił błąd w czasie pobierania danych!
      </p>
    );
  }

  const priceListData = priceLists.map(
    (priceList) => priceList.data
  ) as PriceListInterface[];

  return (
    <section className="py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
          <div className="flex-1 text-center">
            <h2 className="font-bold leading-tight text-black text-4xl lg:text-5xl">
              Cennik
            </h2>
          </div>
        </div>

        <h2 className="font-semibold text-center leading-tight mb-4 mt-8 lg:mt-16 text-slate-700 text-3xl lg:text-4xl">
          Pakiety podstawowe
        </h2>
        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto lg:grid-cols-3 lg:max-w-7xl">
          {priceListData
            .filter((priceList) => priceList.type === "basic")
            .map((priceList) => (
              <PriceListTile key={priceList.title} priceList={priceList} />
            ))}
        </div>

        <h2 className="font-semibold text-center leading-tight mb-4 mt-8 lg:mt-16 text-slate-700 text-3xl lg:text-4xl">
          Usługi dodatkowe
        </h2>
        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto lg:grid-cols-3 lg:max-w-7xl">
          {priceListData
            .filter((priceList) => priceList.type === "additional")
            .map((priceList) => (
              <PriceListTile key={priceList.title} priceList={priceList} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default PricesListPage;
