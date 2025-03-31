import React from 'react'
import NavBar from '../components/NavBar'
import InputSearch from '../components/InputSearch'
import Btn from '../components/Btn'
import { Plus } from 'lucide-react';

const Home:React.FC = () => {
  return (
    <section className='flex flex-col w-full min-h-screen items-center'>
        <NavBar/>

        <div className='flex flex-col p-8 w-full'>
            <div className='flex w-full items-center justify-between'>
                <InputSearch/>
                <Btn icon={<Plus className='w-5 h-5'/>} text='Add New Pet'/>
            </div>
        </div>
        
    </section>
  )
}

export default Home
