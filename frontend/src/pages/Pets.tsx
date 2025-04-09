import React from 'react'
import NavBar from '../components/NavBar'
import InputSearch from '../components/InputSearch'
import CardPetsInformation from '../components/CardPetsInformation'

const Pets:React.FC = () => {
  return (
    <section className='flex flex-col w-full min-h-screen items-center bg-slate-100'>
        <NavBar/>

        <div className='flex flex-col px-8 pt-8 pb-6 w-full gap-5'>
            <div className='flex w-full items-center justify-between'>
                <span className='text-2xl font-semibold'>All pets</span>
                <InputSearch/>
            </div>

            <div className='flex flex-wrap gap-5'>
                <CardPetsInformation/>
                <CardPetsInformation/>
                <CardPetsInformation/>
                <CardPetsInformation/>
                <CardPetsInformation/>
                <CardPetsInformation/>
                <CardPetsInformation/>
            </div>

        </div>
    </section>
  )
}

export default Pets
