import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import InputSearch from '../components/InputSearch'
import CardPetsInformation from '../components/CardPetsInformation'
import Navegation from '../components/Navegation'

import {getAllPets} from '../services/petsServices'
import {getAllClients} from '../services/clientsServices'

import type {Pets, Clients} from '../types/interfaces'

const Pets:React.FC = () => {

  const [pets, setPets] = useState<Pets[]>([])
  const [clients, setClients] = useState<Clients[]>([])

  const getPets = async () => {
    const data = await getAllPets()
    setPets(data)
  }

  const getClients = async () => {
    const data = await getAllClients()
    setClients(data)
  }

  useEffect(() => {
    getPets()
    getClients()
  }, [])
  
  return (
    <section className='flex flex-col w-full min-h-screen items-center bg-slate-100'>
        <NavBar/>

        <div className='flex flex-col px-5 lg:px-8 pt-8 pb-6 w-full gap-5'>
            <div className='flex flex-col lg:flex-row w-full gap-5 lg:gap-0 lg:items-center justify-between'>
                <span className='text-2xl font-semibold'>All pets</span>
                <InputSearch/>
            </div>

            <div className='flex flex-wrap gap-5'>
              {pets.map((pet) => {
                const owner_name = clients.find((client) => client.id_client === pet.client_id)
                return <CardPetsInformation name={pet.name} age={pet.age} species={pet.species} client_id={`${owner_name?.name} ${owner_name?.last_name}`}/>
              })}
                
            </div>

            <div className='flex justify-center items-center'>
              <Navegation current_page={1} page={1} total_page={2}/>
            </div>

        </div>
    </section>
  )
}

export default Pets
