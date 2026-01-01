import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HomeNav = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;

    ScrollTrigger.create({
      trigger: document.body,
      start: "top -10",
      onEnter: () => {
        nav.classList.remove("absolute");
        nav.classList.add("fixed",  "top-0", "left-0", "bg-[#141A1C]", "shadow-lg");
      },
      onLeaveBack: () => {
        nav.classList.remove("fixed", "bg-[#141A1C]", "shadow-lg");
        nav.classList.add("absolute");
      },
    });

  }, );

  return (
    <div
      ref={navRef}
      className="w-full absolute top-0 left-0 z-50 transition-all duration-300 border-b border-white"
    >
      <div className='w-11/12 mx-auto p-5'>
        <div className='flex items-center justify-between text-white'>
          <h1 className='text-xl uppercase tracking-widest cursor-pointer'>luxeDrive</h1>

          <nav className='flex gap-10 uppercase'>
            <Link to='/'>Home</Link>
            <Link to='/vehicle'>Vehicle</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/blog'>Blog</Link>
          </nav>

          <Search />

          <nav className='flex gap-10 text-2xl'>
            <Link to='/cart'><IoCartOutline /></Link>
            <Link to='/user'><FaRegUserCircle /></Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default HomeNav;
