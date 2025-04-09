import React from 'react'
import { HeartPulse, House, PawPrint, Users, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Btn from './Btn';

const NavBar:React.FC = () => {
  return (
    <div className='flex w-full h-16 bg-teal-600 px-7 items-center justify-between'>
        <div className='flex items-center gap-16'>
            <Link to='/admin' className='flex gap-2 items-center text-white'>
                <HeartPulse className='w-8 h-8'/>
                <span className='text-xl font-semibold'>PetCare Clinic</span>
            </Link>

            <div className='flex gap-7 items-center text-white'>
                <Nav to='/admin' text='Home' icon={<House className='w-5 h-5'/>}/>
                <Nav to='/admin/pets' text='Pets' icon={<PawPrint className='w-5 h-5'/>}/>
                <Nav to='/admin/clients' text='Clients' icon={<Users className='w-5 h-5'/>}/>
                <Nav to='/admin/profile' text='Profile' icon={<User className='w-5 h-5'/>}/>
            </div>

        </div>

        <div className='flex items-center text-white gap-5'>
            <span className='font-light'>Welcome, David Antonio</span>

            <Btn isLogoutButton={true} text='Logout'/>
        </div>
    </div>
  )
}

export default NavBar
