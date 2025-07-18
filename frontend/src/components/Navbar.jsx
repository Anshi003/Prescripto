import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/doctors', label: 'ALL DOCTORS' },
    { to: '/about', label: 'ABOUT' },
    { to: '/contact', label: 'CONTACT' },
  ];

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt='Prescripto Logo' />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => (isActive ? 'active text-gray-800' : 'text-gray-600')}
          >
            {({ isActive }) => (
              <>
                <li className='py-1'>{label}</li>
                {isActive && <hr className='border-none outline-none' />}
              </>
            )}
          </NavLink>
        ))}
      </ul>
      <div className='flex items-center gap-4'>
        {
            token ?
            <div className='flex items-center gap-2 cursor-pointer group relative' >
                <img src={assets.profile_pic} alt='Profile' className='w-8 rounded-full' />
                <img src={assets.dropdown_icon} alt='Dropdown' className='w-2.5' />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Appointments</p>
                        <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
            </div>
            :<button onClick={()=>navigate('/login')} className='bg-primary text-white px-4 py-2 rounded hover:bg-blue-600'>
          Create account
        </button>
        }
      </div>
    </div>
  );
};

export default Navbar;