import React from 'react'
import { Mail, Phone } from 'lucide-react';
import ContainerPetClients from './ContainerPetClients';

const CardClients:React.FC = () => {
  return (
    <div className='bg-white flex flex-col w-full p-5 shadow rounded-md gap-2'>
        <div className='flex justify-between items-center'>
            <span className='text-2xl font-semibold'>David Valenzuela</span>
            <span className='font-light text-sm w-fit h-fit px-3 py-1 bg-emerald-100 rounded-full text-emerald-700'>1 Pets</span>
        </div>

        <div className='flex items-center gap-5'>
            <div className='flex gap-1 items-center'>
                <Mail className='w-4 h-4'/>
                <span className='text-sm text-slate-600'>dvalenzuelachang@gmail.com</span>
            </div>

            <div className='flex gap-1 items-center'>
                <Phone className='w-4 h-4'/>
                <span className='text-sm text-slate-600'>67231312231</span>
            </div>
        </div>

        <div className='flex flex-col pt-4 gap-5'>
            <span className='text-lg font-semibold'>Registered Pets</span>
            <div className='flex flex-wrap gap-5'>
                <ContainerPetClients/>
                <ContainerPetClients/>
                <ContainerPetClients/>
                <ContainerPetClients/>
                <ContainerPetClients/>
            </div>
        </div>

      
    </div>
  )
}

export default CardClients
