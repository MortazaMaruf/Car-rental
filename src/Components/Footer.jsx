import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0C1315]'>
     <div className='w-11/12 mx-auto py-15'>

           <div className='grid grid-cols-3 gap-15  justify-center'>
             <div>
                <h1 className='text-xl uppercase tracking-widest text-[#BFA37C] cursor-pointer'>luxeDrive</h1>
                <p className='my-10 text-gray-400 text-lg tracking-wide'>Justo odio dignissimos ducimus qui blanditiis voluptatum <br />deleniti corrupti quos dolores et quas molestias sint <br /> occaecati id est laborumesa etdolorum.</p>
                <span className='text-[#BFA37C] uppercase'>Call Center: +397 256 38 29</span>
            </div>
             <div>
                <h1 className='text-xl capitalize tracking-widest mb-10 '>Quick links</h1>
                <li className='list-none text-lg uppercase flex flex-col gap-4 cursor-pointer  ' >
                    <ul>how we work</ul>
                    <ul>faq</ul>
                    <ul>services</ul>
                    <ul>contact</ul>
                </li>
            </div>
             <div>
                <h1 className='text-xl capitalize tracking-widest mb-10 '>our services</h1>
                <li className='list-none text-lg uppercase flex flex-col gap-4 cursor-pointer ' >
                    <ul>corporate travels </ul>
                    <ul>special events</ul>
                    <ul>airport transport</ul>
                    <ul>wedding limousine</ul>
                </li>
            </div>
            
           </div>
     </div>
    </div>
  )
}

export default Footer
