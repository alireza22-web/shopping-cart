import { useContext } from "react"
import { CartCantext } from "../../context/CartCantext"
import { usePersionNumber } from "../PersionNumber/usePersionNumber"

export const ButtonAddCart = ({id})=>{
  const {AddToCart,cart,RemoveToCart} = useContext(CartCantext)
  let numberCart = cart.find(item=>item.id == id)?.qty || 0 

  return (
      <div className="flex items-center gap-4 text-xl">
        {
          numberCart == 0 ?
            <button onClick={()=>AddToCart(id)} className="px-6 max-sm:px-8 max-md:text-base max-sm:text-sm py-2 bg-sky-500 rounded-md cursor-pointer transition-colors duration-200 hover:bg-sky-800 text-white">
              اضافه به سبد خرید
            </button>
          :
          <div className="flex items-center gap-4 text-xl">
            <button onClick={()=>AddToCart(id)}  className=" cursor-pointer hover:bg-sky-900 transition-colors duration-100 bg-sky-600 px-3 py-0.5 text-white">+</button>
            <span>
              {
                usePersionNumber(numberCart)
              }
            </span>
            <button onClick={()=>RemoveToCart(id)} className=" cursor-pointer hover:bg-sky-900 transition-colors duration-100 bg-sky-600 px-3 py-0.5 text-white">-</button>
          </div>
        }
      </div>
  )
}