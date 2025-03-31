import React from 'react'
import { Link } from "react-router-dom";
import { LogIn, HeartPulse } from 'lucide-react';

const Login:React.FC = () => {
  return (
    <section className='flex flex-col w-full min-h-screen items-center justify-center gap-10'>
        <div className='flex flex-col items-center gap-5'>
            <div className='flex justify-center items-center w-16 h-16 rounded-full bg-teal-600'>
                <HeartPulse className='text-white w-8 h-8'/>
            </div>

            <div className='flex flex-col gap-1 items-center'>
                <h1 className='text-3xl font-semibold'>PetCare Clinic</h1>
                <span className='text-slate-500'>Professional Pet Healthcare Management</span>
            </div>

        </div>

        <form className='flex flex-col p-5 w-96 bg-white shadow-md rounded-lg gap-6'>
            <span className='text-2xl font-medium text-center'>Login</span>

            <div className='flex flex-col gap-3'>
                <div className='flex flex-col text-sm'>
                    <label htmlFor="email" className=''>Email Address</label>
                    <input type="email" name='email' id='email' required placeholder='Enter your email' className='px-4 py-2 border border-slate-300 rounded'/>
                </div>

                <div className='flex flex-col text-sm'>
                    <label htmlFor="password" className=''>Password</label>
                    <input type="password" name='password' id='password' required placeholder='Enter your password' className='px-4 py-2 border border-slate-300 rounded'/>
                </div>
            </div>

            <div className='flex flex-col gap-3'>
                <Link to='/' className='flex bg-teal-600 px-4 py-2 rounded text-white justify-center items-center gap-2 hover:bg-teal-700 hover:transition duration-300'><LogIn/> Sign In</Link>
                <Link to='/register' className='text-center text-teal-600 text-sm hover:text-teal-700 hover:underline hover:transition duration-300'>Don't have an account? Sign Up</Link>
            </div>

        </form>
      
    </section>
  )
}

export default Login
