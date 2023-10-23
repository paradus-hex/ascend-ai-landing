"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import {AiOutlineHome} from 'react-icons/ai'
import {BsStars} from 'react-icons/bs'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineQuestionCircle} from 'react-icons/ai'


export default function Navbar() {
  const [state, setState] = React.useState(false)

  const menus = [
    { icon: <AiOutlineHome/>, title: "Home", path: "/your-path" },
    { icon: <AiOutlineQuestionCircle/>, title: "About", path: "/your-path" },
    { icon: <BsStars/>, title: "Features", path: "/your-path" },
    { icon: <BsTelephone/>, title: "Contact", path: "" },
  ]


  return (
    <nav className="w-full border-b md:border-0 backdrop-blur-md backdrop-filter bg-opacity-50 fixed pt-2 top-0 z-10">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <h1 className="text-3xl font-bold text-white font-nunito">Ascend.AI</h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 text-2xl -ml-[8rem] pb-3 mt-4 md:block md:pb-0 md:mt-0 ${
            state ? "absolute text-center bg-black w-[11rem] md:border-none md:bg-transparent lg:bg-transparent lg:border-none border-solid border-[1px] border-purple-400 flex-auto leading-6 overflow right-0 mr-[1rem]" : "hidden"
          }`}
        >
          <ul className={`justify-center items-right space-y-8 md:flex md:space-x-6 md:space-y-0 px-[2rem] ${state ? "p-[3rem] lg:p-0 md:p-0" : "hidden"}`}>
            {menus.map((item, idx) => (
              <li key={idx} className={`font-nunito hover:text-white ${state ? "text-white md:text-[#8F9BB7] lg:text-[#8F9BB7]" : "text-[#8F9BB7]"}`}>
                <div className={`${state ? "lg:hidden md:hidden absolute mt-[4px] ml-[4px]" : "hidden"}`}>{item.icon}</div>
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}



// Todo

// Remove login
// Make dropdown like reinforz
// Add icons if possible




//Backup


{/* <ul className={`justify-center items-right space-y-8 md:flex md:space-x-6 md:space-y-0 px-[2rem] ${state ? "p-[3rem] lg:p-0 md:p-0" : "hidden"}`}>
{menus.map((item, idx) => (
  <li key={idx} className={`font-nunito hover:text-white ${state ? "text-white" : "text-[#8F9BB7]"}`}>
    <div className={`${state ? "lg:hidden md:hidden absolute mt-[4px] ml-[4px]" : "hidden"}`}>{item.icon}</div>
    <Link href={item.path}>{item.title}</Link>
  </li>
))}
</ul> */}