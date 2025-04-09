import React from 'react'
import NavBar from '../components/NavBar'

const NotFound:React.FC = () => {
  return (
    <section className='flex flex-col w-full min-h-screen items-center bg-slate-100'>
         <NavBar/>

         <div className='flex px-8 pt-8 pb-6 w-full gap-5 items-center justify-center' style={{height: "calc(100vh - 4rem)"}}>
            <div className='flex gap-4 items-center text-white text-5xl'>
                <span className='text-7xl font-semibold text-red-600'>404</span>
                <span className='font-semibold text-black'>Page not Found</span>
            </div>
         </div>
    </section>
  )
}

export default NotFound
