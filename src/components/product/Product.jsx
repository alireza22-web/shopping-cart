import { Link } from "react-router-dom"
import { Data } from "../../data/data"
import { usePersionNumber } from "../PersionNumber/usePersionNumber"

export const Product = ()=>{
  return (
    <>
      <div className="grid grid-cols-5 gap-12 res mt-8 max-md:grid-cols-3 max-sm:grid-cols-1 mb-14"> 
        {
          Data.map(item=>{
            return (
              
              <Link key={item.id} to={`/product/${item.id}`}>
                <div className="shadow-xl hover:shadow-2xl max-sm:shadow-md sm:flex flex-col max-sm:grid max-sm:grid-cols-3">
                  <img src={item.image} className="max-sm:col-span-1" alt="" />
                  <div className="px-4 max-sm:px-8 py-3 max-sm:col-span-2 max-sm:flex max-sm:text-sm max-sm:justify-center gap-2 flex-col">
                    <div className="text-center text-lg max-[400px]:text-sm max-sm:text-right font-medium">{item.name}</div>
                    <div className="flex justify-between max-lg:flex-col max-sm:items-end max-sm:justify-center items-center">
                      <div>{usePersionNumber(item.price)} <span className="text-sky-900">تومان</span></div>  
                      <div className="flex items-center">
                        <span>{usePersionNumber(item.rate)}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-yellow-400">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div> 
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </>
  )
}