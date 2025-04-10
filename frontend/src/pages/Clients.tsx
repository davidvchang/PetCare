import React from 'react'
import NavBar from '../components/NavBar'
import InputSearch from '../components/InputSearch'
import CardClients from '../components/CardClients'

const Clients:React.FC = () => {
  return (
    <section className='flex flex-col w-full min-h-screen items-center bg-slate-100'>
        <NavBar/>

        <div className='flex flex-col px-8 pt-8 pb-6 w-full gap-5'>
            <div className='flex w-full items-center justify-between'>
                <div className='flex flex-col gap-1'>
                    <span className='text-3xl font-semibold'>Client Directory</span>
                    <span className=' text-slate-500'>Manage and view all client information</span>
                </div>

                <InputSearch/>
            </div>

            <div className='flex flex-wrap gap-5'>
                <CardClients/>
            </div>
            
        </div>
      
    </section>
  )
}

export default Clients
