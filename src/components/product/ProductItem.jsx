import { useParams } from "react-router-dom"
import { Navbar } from "../navbar/navbar";
import { useEffect, useState } from "react";
import { Data } from "../../data/data";
import { usePersionNumber } from "../PersionNumber/usePersionNumber";
import { ButtonAddCart } from "./ButtonAddCart";

export const ProductItems = ()=>{
  const {id} = useParams()
  const [data,setData] = useState([])
  useEffect(()=>{
     Data.find(item=>{
      if(item.id == id){
        setData(item)
      }
     }) 
  },[])
  
  return (
    <>
      <Navbar/>
      <div className="res"> 
        <div className="grid grid-cols-12 max-sm:grid-cols-1 flex-col mt-4">
          <div className="col-span-4 shadow-md">
            <img src={data.image} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="flex flex-col justify-between pl-5 pr-12 py-16 col-span-8">
            <div className="flex flex-col gap-4">
              <div className="text-3xl font-bold">{data.name}</div>
              <p className="text-gray-600 text-justify max-sm:text-sm max-sm:mb-4">{data.name} {data.desc}</p>
            </div>
            <div className="px-4 py-2 flex max-md:flex-col-reverse max-md:gap-6 justify-between items-center bg-sky-100">
              <div>
                <ButtonAddCart id={id}/>
              </div>
              <div className="flex flex-col gap-1.5 max-md:flex-row max-md:justify-between max-md:w-full">
                <div className="text-2xl text-sky-900 font-bold max-sm:font-medium max-sm:text-lg">{usePersionNumber(data.price)} تومان</div>
                <div className="flex gap-1 items-center text-xl max-sm:text-base">
                  <span>{usePersionNumber(data.rate)}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-400 max-sm:size-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
