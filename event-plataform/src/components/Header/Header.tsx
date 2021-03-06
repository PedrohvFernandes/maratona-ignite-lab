import { Logo } from './Logo'
import { List, X } from 'phosphor-react'
import { useState } from 'react'
import { Sidebar } from '../Sidebar'

export function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header className="w-full py-5 px-11 gap-[1rem] flex items-center justify-between xl:justify-center bg-gray-700 border-b border-gray-600 fixed z-[1000]">
      <Logo />
      <div className="xl:hidden">
        {toggleMenu ? (
          <X
            size={30}
            color="#00B37E"
            className="cursor-pointer hover:bg-gray-500 rounded transition-all"
            onClick={() => setToggleMenu(false)}
          ></X>
        ) : (
          <List
            size={30}
            color="#00B37E"
            className="cursor-pointer hover:bg-gray-500 rounded transition-all"
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>
      {toggleMenu ? (
        <div className="z-[100] xl:hidden fixed top-[4.6875rem] right-0 w-full h-full bg-gray-700
        translate-x-0 transition-all duration-500 ease-in-out">
          <nav className="flex flex-col w-full">
            <Sidebar />
          </nav>
        </div>
      ) : (
        <div className="z-[100] xl:hidden fixed top-[4.6875rem] right-0 w-full h-full bg-gray-700 translate-x-full transition-all duration-500 ease-in-out">
          <nav className="flex flex-col w-full">
            <Sidebar />
          </nav>
        </div>
      )}
    </header>
  )
}
