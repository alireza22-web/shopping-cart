export const usePersionNumber = (number)=>{
  const Number = new Intl.NumberFormat('fa-IR', {style : "decimal" }).format(number).replace(/٬/g , "")
  return Number
}