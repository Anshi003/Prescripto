import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* ------- Left Section ------- */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is a standard dummy text used in printing and web design. Learn about its origin, variations, and how to generate it online with Lipsum.com.</p>
        </div>

        {/* --------Center Section -------- */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* ------- Right Section ------- */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>12xxxxxx12</li>
            <li>ansh@gamil.com</li>
          </ul>
        </div>
    </div>

    {/* ---------Copyright Section --------- */ }
    <div>
      <hr />
      <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto  - All right reserved</p>
    </div>
    </div>
  )
}

export default Footer