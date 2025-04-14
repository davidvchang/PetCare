import React from 'react'
import NavBar from '../components/NavBar'
import InputSearch from '../components/InputSearch'
import CardClients from '../components/CardClients'
import Navegation from '../components/Navegation'

const Clients:React.FC = () => {
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
                <CardClients/>
                <CardClients/>
                <CardClients/>
                <CardClients/>
                <CardClients/>
            </div>

            <div className='flex justify-center items-center'>
              <Navegation current_page={1} page={1} total_page={2}/>
            </div>
            
        </div>
      
    </section>
  )
}

export default Clients
