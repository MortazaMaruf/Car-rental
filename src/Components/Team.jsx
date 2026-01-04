
import React from 'react'
import img1 from '../Images/h1-team-img-1.jpg'
import img2 from '../Images/h1-team-img-2.jpg'
import img3 from '../Images/h1-team-img-3.jpg'
import { MdOutlinePhone } from "react-icons/md";

const Team = () => {
  const teamMembers = [
    { img: img1, name: "Marco Watkivi", phone: "+1234 5678 901" },
    { img: img2, name: "Marily Sulli", phone: "+2345 6789 012" },
    { img: img3, name: "Zakary Tapun", phone: "+3456 7890 123" },
  ];

  return (
    <div className="bg-[#0C1315] py-10">
      <div className="w-11/12 mx-auto my-20">
        {/* Header */}
        <div className="border-b border-b-gray-700 pb-10 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold mb-2 text-white">
            Our Professional Chauffeurs
          </h1>
          <span className="text-[#BFA37C] tracking-widest uppercase text-sm">
            Meet our team
          </span>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center lg:text-left">
              <img
                src={member.img}
                alt={member.name}
                className="w-full sm:w-80 h-auto rounded-lg hover:rounded-3xl transition-all duration-300"
              />
              <h2 className="pt-3 text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                {member.name}
              </h2>
              <div className="flex items-center justify-center lg:justify-start gap-2 pt-2 text-[#BFA37C] cursor-pointer">
                <MdOutlinePhone size={20} />
                <span>{member.phone}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
