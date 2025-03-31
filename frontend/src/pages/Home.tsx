import React from 'react'
import NavBar from '../components/NavBar'
import InputSearch from '../components/InputSearch'

const Home:React.FC = () => {
  return (
    <section className='flex flex-col w-full min-h-screen items-center'>
        <NavBar/>

        <div className='flex flex-col p-8 w-full'>
            <div className='flex w-full items-center justify-between'>
                <InputSearch/>
            </div>
        </div>
        
    </section>
  )
}

export default Home
