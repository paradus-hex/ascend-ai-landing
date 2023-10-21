"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Search } from "lucide-react"
import Button from "./button"

export default function Nav() {
  const [state, setState] = React.useState(false)

  const menus = [
    { title: "Home", path: "/your-path" },
    { title: "About", path: "/your-path" },
    { title: "Features", path: "/your-path" },
    { title: "Contact", path: "/your-path" },
  ]

  return (
    <nav className="w-full border-b md:border-0 font-nunito fixed backdrop-blur-md backdrop-filter bg-opacity-50">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <h1 className="text-3xl font-bold">Ascend.AI</h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 ease-in-out duration-500"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block ease-in-out duration-500" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-[#8F9BB7] hover:text-white cursor-pointer">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
            <div className="flex md:pl-32 md:space-x-2">
             <Button text={'Login'}/>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}