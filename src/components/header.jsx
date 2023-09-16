import { useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

export default function Header() {
  const [toggle,setToggle]=useState(false);
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] py-[12px] items-center flex justify-between mx-auto">
        <div className="text-3xl font-bold">
          Rnov
        </div>
        {
          toggle ?
          <AiOutlineClose  onClick={()=>setToggle(!toggle)} className="text-white text-2xl md:hidden block" />
          :
          <AiOutlineMenu onClick={() => setToggle(!toggle)} className="text-white text-2xl md:hidden block" />
        }
        <ul className="hidden md:flex text-black gap-10">
          <li>
            Home
          </li>
          <li>
            About us
          </li>
          <li>
            contact
          </li>
          <li>
            company
          </li>
        </ul>
        {/* Response menu */}
        <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] ${toggle ? 'left-[0]' : 'left-[-100%]'} `}>
          <li className="p-5">
            Home
          </li>
          <li className="p-5">
            About us
          </li>
          <li className="p-5">
            contact
          </li>
          <li className="p-5">
            company
          </li>
        </ul>
      </div>
    </div>
  )
}
