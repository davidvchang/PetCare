import React, { useState } from 'react'
import { HeartPulse, House, PawPrint, Users, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Btn from './Btn';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar:React.FC = () => {

    const [openedMenu, setOpenedMenu] = useState<boolean>(false)

  return (
    <>
        <div className='flex w-full h-16 bg-teal-600 px-4 md:px-7 items-center justify-between'>
            <div className='flex items-center gap-16'>
                <Link to='/admin' className='flex gap-2 items-center text-white'>
                    <HeartPulse className='w-8 h-8'/>
                    <span className='text-xl font-semibold'>PetCare Clinic</span>
                </Link>

                <div className='hidden lg:flex gap-7 items-center text-white'>
                    <Nav to='/admin' text='Home' icon={<House className='w-5 h-5'/>}/>
                    <Nav to='/admin/pets' text='Pets' icon={<PawPrint className='w-5 h-5'/>}/>
                    <Nav to='/admin/clients' text='Clients' icon={<Users className='w-5 h-5'/>}/>
                    <Nav to='/admin/profile' text='Profile' icon={<User className='w-5 h-5'/>}/>
                </div>

            </div>

            <div className='hidden lg:flex items-center text-white gap-5'>
                <span className='font-light'>Welcome, David Antonio</span>

                <Btn isLogoutButton={true} text='Logout'/>
            </div>


            {/* MENU MOVIL */}
            <button className='lg:hidden' onClick={() => setOpenedMenu(!openedMenu)}>
                <Menu className='w-9 h-9 text-white'/>
            </button>

        </div>
        
        
        <AnimatePresence>
            {openedMenu && (
                <motion.div
                    initial={{opacity: 0, height: 0}}
                    exit={{opacity: 0, height: 0}}
                    animate={{opacity: openedMenu ? 1 : 0, height: openedMenu ? "auto" : 0}}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden bg-teal-600 absolute top-0 left-0 w-full z-50 shadow"
                >
                    <div className='flex justify-between items-center gap-3 px-4 py-3 border-b border-b-teal-200'>
                        <div>
                            <span className='text-xl text-white'>Welcome, </span>
                            <span className='font-medium text-xl text-white'>David Antonio</span>
                        </div>

                        <button onClick={() => setOpenedMenu(!openedMenu)}>
                            <X className='w-9 h-9 text-white'/>
                        </button>
                    </div>

                    <div className='flex flex-col items-center px-5 py-5 gap-7 text-white'>
                        <Nav to='/admin' text='Home'/>
                        <Nav to='/admin/pets' text='Pets'/>
                        <Nav to='/admin/clients' text='Clients'/>
                        <Nav to='/admin/profile' text='Profile'/>
                    </div>

                    <div className='flex w-full px-5 pb-5 pt-5'>
                        <Btn isMovilVersion={true} text='Logout'/>
                    </div>

                </motion.div>


            )}
        </AnimatePresence>
    </>
  )
}

export default NavBar
