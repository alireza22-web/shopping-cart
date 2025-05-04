import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartCantext } from "../../context/CartCantext"

export const Navbar = ()=>{

  const {QtyProduct} = useContext(CartCantext)
  
  return (
    <div className="w-full bg-linear-to-r from-cyan-500 to-sky-500 text-white">
      <nav className="res py-6 text-lg flex items-center gap-14 max-sm:justify-center max-sm:text-base max-sm:py-4">
        
        <div className="logo text-3xl max-sm:text-center">
          <div><span className="text-gray-200">شاپ</span> <span className="text-sky-950">لاین</span></div>
        </div>
        <ul className="flex items-center gap-6 max-sm:hidden">
          <li>
            <NavLink className={({ isActive }) => isActive ? "text-sky-950 flex items-center gap-2 hover:text-sky-950 transition-colors duration-200" : "flex items-center gap-2 hover:text-sky-950 transition-colors duration-200"}  to={`/`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 ">
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
              <span>خانه</span> 
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? "text-sky-950 flex items-center gap-2 hover:text-sky-950 transition-colors duration-200 relative" : "flex relative items-center gap-2 hover:text-sky-950 transition-colors duration-200"} to={`/cart`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 ">
                <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
              </svg>
              <span>سبدخرید</span>
              <span className="absolute px-1.5 -left-4 -top-2 flex items-center justify-center rounded-full text-sm bg-sky-800 text-white">{QtyProduct == 0 ? '' : QtyProduct}</span>
            </NavLink>
          </li>
        </ul>
        {/* responsive navbar */}
        <ul className="sm:hidden fixed flex justify-center items-center bottom-0 text bg-linear-to-r from-cyan-500 to-sky-500 text-white res  w-full">
          <li className=" w-full py-3 flex justify-center">
              <NavLink className={({ isActive }) => isActive ? "text-sky-950 flex items-center gap-2 hover:text-sky-950 transition-colors duration-200" : "flex items-center gap-2 hover:text-sky-950 transition-colors duration-200"}  to={`/`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 ">
                  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
              </NavLink>
            </li>
            <li className=" w-full py-3 flex justify-center">
              <NavLink className={({ isActive }) => isActive ? "text-sky-950 flex items-center gap-2 relative hover:text-sky-950 transition-colors duration-200" : "flex relative items-center gap-2 hover:text-sky-950 transition-colors duration-200"} to={`/cart`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 ">
                  <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                </svg>
                <span className="absolute px-1 -left-2 -top-1 flex items-center justify-center rounded-full text-xs bg-sky-800 text-white">{QtyProduct == 0 ? '' : QtyProduct}</span>
              </NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}