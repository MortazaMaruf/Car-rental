
import React, { useEffect, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Search from './Search'
import { IoCartOutline, IoMenu } from "react-icons/io5"
import { FaRegUserCircle } from "react-icons/fa"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useCart } from '../../assets/cartContext'

gsap.registerPlugin(ScrollTrigger)

const HomeNav = () => {
  const navRef = useRef(null)
  const { totalQty } = useCart()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const nav = navRef.current

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top -10",
      onEnter: () => {
        nav.classList.remove("absolute")
        nav.classList.add("fixed", "top-0", "left-0", "bg-[#141A1C]", "shadow-lg")
      },
      onLeaveBack: () => {
        nav.classList.remove("fixed", "bg-[#141A1C]", "shadow-lg")
        nav.classList.add("absolute")
      },
    })

    return () => trigger.kill()
  }, [])

  const isActive = ({ isActive }) =>
    isActive ? "text-[#BFA37C] font-semibold" : ""

  return (
    <div
      ref={navRef}
      className="w-full absolute top-0 left-0 z-50 transition-all duration-300 border-b border-white"
    >
      <div className="w-11/12 mx-auto p-5">

        {/* TOP BAR */}
        <div className="flex items-center justify-between text-white">

          {/* Hamburger Menu for Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex items-center gap-2 text-2xl"
          >
            <IoMenu />
          </button>

          {/* Logo */}
          <h1 className="text-xl uppercase tracking-widest cursor-pointer">
            luxeDrive
          </h1>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex gap-10 uppercase ">
            <NavLink to="/" className={isActive}>Home</NavLink>
            <NavLink to="/vehicle" className={isActive}>Vehicle</NavLink>
            <NavLink to="/shop" className={isActive}>Shop</NavLink>
            <NavLink to="/blog" className={isActive}>Blog</NavLink>
          </nav>

          {/* DESKTOP SEARCH */}
          <div className="hidden lg:block">
            <Search />
          </div>

          {/* CART + USER (ALL DEVICES) */}
          <nav className="flex gap-6 text-2xl">
            <Link to="/cart" className="relative">
              <IoCartOutline />
              {totalQty > 0 && (
                <span className="absolute -top-2 -right-2 text-xs">{totalQty}</span>
              )}
            </Link>
            <Link to="/user">
              <FaRegUserCircle />
            </Link>
          </nav>
        </div>

        {/* MOBILE / TABLET DROPDOWN */}
        {open && (
          <div className="lg:hidden mt-5 space-y-6 text-white bg-gray-800/90 p-4 rounded-lg transition-all duration-300">

            {/* Search (mobile) */}
            <Search />

            {/* Nav links */}
            <nav className="flex flex-col gap-4 uppercase">
              <NavLink onClick={() => setOpen(false)} to="/" className={isActive}>Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/vehicle" className={isActive}>Vehicle</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/shop" className={isActive}>Shop</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/blog" className={isActive}>Blog</NavLink>
            </nav>

          </div>
        )}

      </div>
    </div>
  )
}

export default HomeNav
