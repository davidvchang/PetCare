import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import InputSearch from '../components/InputSearch'
import CardClients from '../components/CardClients'
import Navegation from '../components/Navegation'

import { getAllClients } from '../services/clientsServices'
import { getAllPets } from '../services/petsServices'

interface PropsDataClients {
    id_client: number
    name: string,
    last_name: string,
    email: string,
    phone_number: string
}

interface PetsData {
    name: string
    client_id: number
    age: number
    species: string
}

const Clients:React.FC<PropsDataClients> = () => {

    const [clients, setClients] = useState<PropsDataClients[]>([])
    const [pets, setPets] = useState<PetsData[]>([])

    const getClients = async () => {
        const data = await getAllClients()
        setClients(data)
    }
    const getPets = async () => {
        const data = await getAllPets()
        setPets(data)
    }

    useEffect(() => {
        getClients()
        getPets()
    }, [])
    
  return (
    <section className='flex flex-col w-full min-h-screen items-center bg-slate-100'>
        <NavBar/>

        <div className='flex flex-col p-4 lg:p-5 lg:px-8 pt-8 pb-6 w-full gap-5'>
            <div className='flex flex-col gap-5 lg:gap-0 lg:flex-row w-full lg:items-center lg:justify-between'>
                <div className='flex flex-col gap-1'>
                    <span className='text-3xl font-semibold'>Client Directory</span>
                    <span className=' text-slate-500'>Manage and view all client information</span>
                </div>

                <InputSearch/>
            </div>

            <div className='flex flex-wrap gap-5'>
                {clients.map((client) => {
                    const petsClient = pets.filter((pet) => pet.client_id === client.id_client);
                    const numberPets = pets.filter((pet) => pet.client_id === client.id_client).length;
                    return (
                        <CardClients 
                            key={client.id_client} 
                            name={client.name} 
                            last_name={client.last_name} 
                            email={client.email} 
                            phone_number={client.phone_number}
                            number_pets={numberPets}
                            pets={petsClient}
                        />

                    )

                })}
            </div>

            <div className='flex justify-center items-center'>
              <Navegation current_page={1} page={1} total_page={2}/>
            </div>
            
        </div>
      
    </section>
  )
}

export default Clients
