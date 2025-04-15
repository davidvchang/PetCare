import React, { use, useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import InputSearch from '../components/InputSearch'
import Btn from '../components/Btn'
import { Plus} from 'lucide-react';
import RowsTable from '../components/RowsTable';
import AddPet from './AddPet';
import Navegation from '../components/Navegation';

import {getAllAppointments} from '../services/appointmentsServices'
import {getAllClients} from '../services/clientsServices'
import {getAllPets} from '../services/petsServices'

import type {Appointment, Clients, Pets} from '../types/interfaces'



const Home:React.FC = () => {

    const [addPetModal, setAddPetModal] = useState<boolean>(false);
    const [appointments, setAppointments] = useState<Appointment[]>([])
    const [clients, setClients] = useState<Clients[]>([])
    const [pets, setPets] = useState<Pets[]>([])

    const getClients = async () => {
        const data = await getAllClients()
        setClients(data)
    }
    const getPets = async () => {
        const data = await getAllPets()
        setPets(data)
    }

    const getAppointments = async () => {
        const data = await getAllAppointments()
        setAppointments(data)
    }

    useEffect(() => {
        getAppointments()
        getClients()
        getPets()
    }, [])
    


  return (
    <section className='flex flex-col w-full min-h-screen items-center bg-slate-100'>
        <NavBar/>

        <div className='flex flex-col px-5 lg:px-8 pt-8 pb-6 w-full gap-2'>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-5 md:gap-0 md:flex-row w-full md:items-center justify-between'>
                    <InputSearch/>
                    <Btn icon={<Plus className='w-5 h-5'/>} text='Add New Pet' onclick={() => setAddPetModal(!addPetModal)}/>
                </div>
                <div className='w-full overflow-x-auto'>
                    <table className='shadow-md rounded-md w-full'>
                        <thead className='min-w-full divide-y divide-gray-200'>
                            <tr>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4'>PET INFORMATION</th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4'>OWNER DETAILS</th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4'>Medical History</th>
                                <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4'>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-200 bg-white'>
                            {appointments.map((a) => {
                                const pet = pets.find((p) => p.id_pet === a.pet_id);
                                const client = clients.find((c) => c.id_client === a.client_id);
                                return <RowsTable key={a.id_appointment} name_pet={pet?.name || 'Unknown'} specie={pet?.species || 'Unknown'} age={pet?.age || 0} name_owner={client?.name || 'Unknown'} email={client?.email || 'Unknown'} phone={client?.phone_number || 'Unknown'} medical_history={a.medical_history}/>
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='flex justify-center items-center pt-3'>
              <Navegation current_page={1} page={1} total_page={2}/>
            </div>
        </div>

        {addPetModal === true && (
            <AddPet onclickCancel={() => setAddPetModal(!addPetModal)}/>
        )}
        
    </section>
  )
}

export default Home
