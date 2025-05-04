import { createContext, useEffect, useState } from "react";
import { Data } from "../data/data";

export const CartCantext = createContext()

export const CartContextfunc = ({children})=>{

  const [cart,setCart] = useState(()=>{
    let product = localStorage.getItem('cartItems')
    if(product){
      return JSON.parse(product)
    }
  })

  function AddToCart(id){
    setCart((item)=>{
      let currentNot = item.find((i)=>i.id == id) == null
      if(currentNot){
        return [...item,{id:id,qty:1}]
      }else{
        return item.map(i=>{
          if(i.id == id){
            return {...i , qty:i.qty + 1}
          }else{
            return i
          }
        })
      }
      
    })
  }

  function RemoveToCart(id){
    setCart(current=>{
      let productItems = current.find((item)=>item.id == id)
      if(productItems?.qty == 1){
        return current.filter(item=>item.id != id)
      }else{
        return current.map((item)=>{
          if(item.id == id){
            return {...item,qty:item.qty - 1}
          }else{
            return item
          }
        })
      }
    })
  }

  function DeleteCart(id){
    setCart(item=>{
      return item.filter(i=>i.id != id)
    })
  }

  let QtyProduct = cart.reduce((total,item)=>{
    return total + item.qty
  },0)

  useEffect(()=>{
    let product = localStorage.getItem('cartItems')
    if(product){
      setCart(JSON.parse(product))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(cart))
  },[cart])

  const PriceTotal = cart.reduce((acc, item) => {
    const product = Data.find(i => i.id == item.id);
    if (!product){
      console.log('noch');
      return acc
    } ;
    return acc + product.price * item.qty;
  }, 0);
  

  return (
    <CartCantext.Provider value={{AddToCart,cart,RemoveToCart,QtyProduct,DeleteCart,PriceTotal}}>
      {children}
    </CartCantext.Provider>
  )
} 