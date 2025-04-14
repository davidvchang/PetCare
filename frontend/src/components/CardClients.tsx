import React from 'react'
import { Mail, Phone } from 'lucide-react';
import ContainerPetClients from './ContainerPetClients';

interface PropsCardClients {
    name: string,
    last_name: string,
    email: string,
    phone_number: string,
    pets: PetsData[]
}

interface PetsData {
    id_pet: number
    name: string
    client_id: number
    age: number
    species: string
}

const CardClients:React.FC<PropsCardClients> = ({name, last_name, email, phone_number, pets}) => {
  return (
    <div className='bg-white flex flex-col w-full p-5 shadow rounded-md gap-4 lg:gap-2'>
        <div className='flex justify-between items-center'>
            <span className='text-2xl font-semibold'>{name} {last_name}</span>
            <span className='font-light text-sm w-fit h-fit px-3 py-1 bg-emerald-100 rounded-full text-emerald-700'>1 Pets</span>
        </div>

        <div className='flex flex-wrap lg:flex-row items-center gap-5 gap-y-2 lg:gap-5'>
            <div className='flex gap-1 items-center'>
                <Mail className='w-4 h-4'/>
                <span className='text-sm text-slate-600'>{email}</span>
            </div>

            <div className='flex gap-1 items-center'>
                <Phone className='w-4 h-4'/>
                <span className='text-sm text-slate-600'>{phone_number}</span>
            </div>
        </div>

        <div className='flex flex-col pt-4 gap-5'>
            <span className='text-lg font-semibold'>Registered Pets</span>
            <div className='flex flex-wrap gap-2 lg:gap-5'>
                {pets.map((pet) => (
                    <ContainerPetClients key={pet.id_pet} name_pet={pet.name} age={pet.age} species={pet.species}/>
                ))}
            </div>
        </div>

      
    </div>
  )
}

export default CardClients
