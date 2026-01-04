
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#0C1315]">
      <div className="w-11/12 mx-auto py-10 sm:py-12 lg:py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">

          {/* Logo + About */}
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-xl uppercase tracking-widest text-[#BFA37C] cursor-pointer">
              luxeDrive
            </h1>
            <p className="my-6 sm:my-8 text-gray-400 text-sm sm:text-base md:text-lg tracking-wide">
              Justo odio dignissimos ducimus qui blanditiis voluptatum <br />
              deleniti corrupti quos dolores et quas molestias sint <br />
              occaecati id est laborumesa etdolorum.
            </p>
            <span className="text-[#BFA37C] uppercase text-sm sm:text-base">
              Call Center: +397 256 38 29
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg sm:text-xl lg:text-lg capitalize tracking-widest mb-4 sm:mb-6">
              Quick Links
            </h2>
            <ul className="flex flex-col gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg uppercase cursor-pointer">
              <li>How we work</li>
              <li>FAQ</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h2 className="text-lg sm:text-xl lg:text-lg capitalize tracking-widest mb-4 sm:mb-6">
              Our Services
            </h2>
            <ul className="flex flex-col gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg uppercase cursor-pointer">
              <li>Corporate Travels</li>
              <li>Special Events</li>
              <li>Airport Transport</li>
              <li>Wedding Limousine</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Footer
