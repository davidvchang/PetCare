import React from 'react'
import { Link } from "react-router-dom";
import { UserPlus, HeartPulse } from 'lucide-react';

const Register:React.FC = () => {
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

        <form className='flex flex-col p-5 md:w-fit bg-white shadow-md rounded-lg gap-5' style={{width: "calc(100vw - 2rem)"}}>
            <span className='text-2xl font-medium text-center'>Register</span>

            <div className='flex flex-col gap-3'>
                <div className='flex gap-2'>
                    <div className='flex flex-col text-sm'>
                        <label htmlFor="name" className=''>Name</label>
                        <input type="text" name='name' id='name' required placeholder='Enter your name' className='w-full px-4 py-2 border border-slate-300 rounded'/>
                    </div>

                    <div className='flex flex-col text-sm'>
                        <label htmlFor="last_name" className='w-fit'>Last Name</label>
                        <input type="text" name='last_name' id='last_name' required placeholder='Enter your last name' className='w-full px-4 py-2 border border-slate-300 rounded'/>
                    </div>

                </div>

                <div className='flex flex-col text-sm'>
                    <label htmlFor="email" className=''>Email Address</label>
                    <input type="email" name='email' id='email' required placeholder='Enter your email' className='px-4 py-2 border border-slate-300 rounded'/>
                </div>

                <div className='flex flex-col text-sm'>
                    <label htmlFor="password" className=''>Password</label>
                    <input type="password" name='password' id='password' required placeholder='Enter password' className='px-4 py-2 border border-slate-300 rounded'/>
                </div>

                <div className='flex flex-col text-sm'>
                    <label htmlFor="password2" className=''>Confirm Password</label>
                    <input type="password" name='password2' id='password2' required placeholder='Confirm password' className='px-4 py-2 border border-slate-300 rounded'/>
                </div>
            </div>

            <div className='flex flex-col gap-3'>
                <button type='submit' className='flex bg-teal-600 px-4 py-2 rounded text-white justify-center items-center gap-2 hover:bg-teal-700 hover:transition duration-300 cursor-pointer'><UserPlus/> Create Account</button>
                <Link to='/' className='text-center text-teal-600 text-sm hover:text-teal-700 hover:underline hover:transition duration-300'>Already have an account? Sign In</Link>
            </div>

        </form>

    </section>
  )
}

export default Register
