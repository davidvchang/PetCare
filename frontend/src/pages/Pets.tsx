import React from 'react'
import NavBar from '../components/NavBar'
import InputSearch from '../components/InputSearch'
import CardPetsInformation from '../components/CardPetsInformation'
import Navegation from '../components/Navegation'

const Pets:React.FC = () => {
  return (
    <section className='flex flex-col w-full min-h-screen items-center bg-slate-100'>
        <NavBar/>

        <div className='flex flex-col px-5 lg:px-8 pt-8 pb-6 w-full gap-5'>
            <div className='flex flex-col lg:flex-row w-full gap-5 lg:gap-0 lg:items-center justify-between'>
                <span className='text-2xl font-semibold'>All pets</span>
                <InputSearch/>
            </div>

            <div className='flex flex-wrap gap-5 justify-center'>
                <CardPetsInformation/>
                <CardPetsInformation/>
                <CardPetsInformation/>
                <CardPetsInformation/>
                
            </div>

            <div className='flex justify-center items-center'>
              <Navegation current_page={1} page={1} total_page={2}/>
            </div>

        </div>
    </section>
  )
}

export default Pets
