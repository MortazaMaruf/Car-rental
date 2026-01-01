// import React from 'react'
// import { IoIosStar } from "react-icons/io";
// import { IoIosStarOutline } from "react-icons/io";

// const Testimonialcard = ({item}) => {
//     const {title,rating =0,description,location} =item;

//   return (
//    <div className='pt-10'>
//      <div className=' w-100 border-r border-r-gray-700 p-10' >
//       <h1 className='text-3xl my-5 capitalize '>{title}</h1>
//       <div className='flex items-center  gap-2'>
//             {[...Array(5)].map((item,index) =>(
//                 index < rating ?(
//                     <IoIosStar key={index} color='#BFA37C' />
//                 ):(<IoIosStarOutline key={index} className='text-gray-500 ' />)
//             ))}
//       </div>
//       <div className=' flex flex-col'>
//         <span className='text-gray-400 py-10'>{description}</span>
//         <span className='text-[#BFA37C] text-lg uppercase tracking-widest'>{location}</span>
//       </div>
//     </div>
//    </div>
//   )
// }

// export default Testimonialcard
import React from 'react'
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const TestimonialCard = ({ item = {} }) => {
  const { title = '', rating = 0, description = '', location = '' } = item;

  return (
    <div className='pt-10'>
      <div className='w-full border-r border-gray-700 p-10'>
        <h1 className='text-3xl my-5 capitalize'>{title}</h1>

        <div className='flex items-center gap-2'>
          {[...Array(5)].map((_, index) =>
            index < rating ? (
              <IoIosStar key={index} color='#BFA37C' />
            ) : (
              <IoIosStarOutline key={index} className='text-gray-500' />
            )
          )}
        </div>

        <div className='flex flex-col'>
          <span className='text-gray-400 py-10'>{description}</span>
          <span className='text-[#BFA37C] text-lg uppercase tracking-widest'>
            {location}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
