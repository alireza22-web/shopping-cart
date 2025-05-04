import { useContext, useEffect, useState } from "react";
import { Header } from "../components/header/Header";
import { Product } from "../components/product/Product";
import { CartCantext } from "../context/CartCantext";
import { ProductItemCart } from "../components/product/ProductItemCart";
import image_empty from "../assets/empty.svg"
import { usePersionNumber } from "../components/PersionNumber/usePersionNumber";

export const Cart = () => {
  const {cart,PriceTotal} = useContext(CartCantext)
  
  return (
    <>
      <Header />
      <div className="sm:grid flex-col grid-cols-12 res mt-4 gap-x-2 gap-y-4 max-sm:flex">
        <div className="col-span-9 flex flex-col gap-y-2">
          {
            cart.length > 0 ?
            cart.map(i=>{
              return (
                <ProductItemCart key={i.id} id={i.id} qty={i.qty} />
              )
            })
            :
            <div className="flex flex-col items-center justify-center">
              <img className="w-96" src={image_empty} alt="" />
              <div>سبد خرید شما خالی است</div>
            </div>
          }
        </div>
        <div className="col-span-3 h-fit rounded-md sm:sticky sm:top-4 p-4 bg-sky-100 max-sm:w-full ">
          <div className="flex gap-1 max-lg:text-sm max-lg:flex-col max-sm:flex-row">
            <div className="text-gray-500">قیمت کل : </div>
            <div>{usePersionNumber(PriceTotal)} <span className="text-sky-900">تومان</span></div>
          </div>
          <div className="mt-4 text-center">
            <button className="cursor-pointer transition-colors duration-150 hover:bg-sky-800 w-full py-2 bg-sky-500 text-white font-medium rounded-md">
              <span>ارسال محصول</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
