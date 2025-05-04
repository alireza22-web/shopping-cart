import { useContext, useEffect, useState } from "react"
import { Data } from "../../data/data"
import { usePersionNumber } from "../PersionNumber/usePersionNumber"
import { Link } from "react-router-dom"
import { CartCantext } from "../../context/CartCantext"

export const ProductItemCart = ({id,qty})=>{
  const {DeleteCart} = useContext(CartCantext)
  const [data,setData] = useState([])
  useEffect(()=>{
    Data.find(i=>{
      if(i.id == id){
        setData(i)
      }
    })
  },[DeleteCart])
  return (
      <div className="card grid grid-cols-12 shadow-lg">
          <div className="col-span-2 max-sm:col-span-4">
        <Link to={`/product/${data.id}`}>
            <img src={data.image} alt="" />
        </Link>
          </div>
        <div className="col-span-10 max-sm:col-span-8 p-4">
          <div className="text-2xl max-sm:text-lg font-medium">{data.name}</div>
          <div className="text-xl max-sm:text-base font-medium">{usePersionNumber(data.price)} <span className="text-sky-900">تومان</span></div>
          <div>
            <span className="text-gray-600">تعداد : </span>
            <span>{usePersionNumber(qty)}</span>
          </div>
          <button className="bg-sky-600 px-6 py-1 mt-2 rounded-md cursor-pointer transition-colors duration-150 hover:bg-sky-900 text-white" onClick={()=>DeleteCart(data.id)}>
            <span>حذف از سبد</span>
          </button>
        </div>
      </div>
  )
}