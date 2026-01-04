
import React, { useEffect, useRef} from 'react'
import { NavLink,Link } from 'react-router-dom'
import Search from './Search'
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCart } from '../../assets/cartContext'

gsap.registerPlugin(ScrollTrigger);

const HomeNav = () => {
  const navRef = useRef(null);
  const { totalQty } = useCart();

  useEffect(() => {
    const nav = navRef.current;

    // Create scroll trigger
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top -10",
      onEnter: () => {
        nav.classList.remove("absolute");
        nav.classList.add("fixed", "top-0", "left-0", "bg-[#141A1C]", "shadow-lg");
      },
      onLeaveBack: () => {
        nav.classList.remove("fixed", "bg-[#141A1C]", "shadow-lg");
        nav.classList.add("absolute");
      },
    });

    return () => {
      trigger.kill();
    };

  }, []); 

  return (
    <div
      ref={navRef}
      className="w-full absolute top-0 left-0 z-50 transition-all duration-300 border-b border-white"
    >
      <div className='w-11/12 mx-auto p-5'>
        <div className='flex items-center justify-between text-white'>
          <h1 className='text-xl uppercase tracking-widest cursor-pointer'>luxeDrive</h1>

          <nav className='flex gap-10 uppercase'>
            <NavLink to='/'   className={({ isActive }) =>
    isActive ? "text-[#BFA37C] font-semibold" : "text-white"}
  >Home</NavLink>
            <NavLink to='/vehicle'  className={({ isActive }) =>
    isActive ? "text-[#BFA37C] font-semibold" : "text-white"}>Vehicle</NavLink>
            <NavLink to='/shop'  className={({ isActive }) =>
    isActive ? "text-[#BFA37C] font-semibold" : "text-white"}>Shop</NavLink>
            <NavLink to='/blog' className={({ isActive }) =>
    isActive ? "text-[#BFA37C] font-semibold" : "text-white"}>Blog</NavLink>
          </nav>

          <Search />

          <nav className='flex gap-10 text-2xl'>
            <Link to='/cart'>
              <div className='flex items-center justify-center gap-1'>
                <IoCartOutline />
                {totalQty > 0 && (
                  <span className='text-sm'>{totalQty}</span>
                )}
              </div>
            </Link>
            <Link to='/user'><FaRegUserCircle /></Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default HomeNav;
