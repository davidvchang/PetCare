import React from 'react'
import NavBar from '../components/NavBar'
import { User, Shield, Mail, Lock, Save } from 'lucide-react';
import Btn from '../components/Btn';

const Profile:React.FC = () => {
  return (
    <section className='flex flex-col w-full min-h-screen bg-slate-100'>
        <NavBar/>

        <div className='flex flex-col items-center p-10 gap-5'>
            <div className='flex flex-col lg:w-[40rem]' style={{width: "calc(100vw - 2rem)"}}>
                <span className='text-3xl font-semibold'>Profile Setting</span>
                <span className='text-slate-500'>Manage your account information and security</span>
            </div>

            <div className='flex flex-col bg-white p-10 lg:w-[40rem] rounded-md shadow gap-5' style={{width: "calc(100vw - 2rem)"}}>
                <div className='w-full flex justify-center'>
                    <div className='flex w-20 h-20 bg-emerald-100 rounded-full border border-emerald-50 items-center justify-center'>
                        <User className='w-12 h-12 text-emerald-600'/>
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <div className='flex items-center gap-2'>
                        <User className='w-5 h-6'/>
                        <span className='font-semibold text-[19px]'>Personal Information</span>
                    </div>

                    <div className='flex flex-col gap-4 pb-5 border-b border-b-slate-300'>
                        <div className='flex flex-col text-sm'>
                            <label htmlFor="name" className='font-medium text-slate-600'>Name</label>
                            <input type="text" name="name" id="name" className='py-2.5 px-5 border border-slate-300 rounded-md'/>
                        </div>

                        <div className='flex flex-col text-sm'>
                            <label htmlFor="email" className='font-medium text-slate-600'>Email Address</label>

                            <div className='flex flex-col w-full relative'>
                                <Mail className='w-5 h-5 text-slate-400 absolute top-2.5 left-3'/>
                                <input type="text" name="email" id="email" className='py-2.5 px-10 border border-slate-300 rounded-md'/>
                            </div>
                        </div>

                    </div>

                    <div className='flex items-center gap-2'>
                        <Shield className='w-5 h-6'/>
                        <span className='font-semibold text-[19px]'>Security</span>
                    </div>

                    <div className='flex flex-col gap-4 pb-5'>
                        <div className='flex flex-col text-sm'>
                            <label htmlFor="current_password" className='font-medium text-slate-600'>Current Password</label>

                            <div className='flex flex-col w-full relative'>
                                <Lock className='w-5 h-5 text-slate-400 absolute top-2.5 left-3'/>
                                <input type="text" name="current_password" id="current_password" className='py-2.5 px-10 border border-slate-300 rounded-md'/>
                            </div>
                        </div>

                        <div className='flex flex-col text-sm'>
                            <label htmlFor="new_password" className='font-medium text-slate-600'>New Password</label>

                            <div className='flex flex-col w-full relative'>
                                <Lock className='w-5 h-5 text-slate-400 absolute top-2.5 left-3'/>
                                <input type="text" name="new_password" id="new_password" className='py-2.5 px-10 border border-slate-300 rounded-md'/>
                            </div>
                        </div>

                        <div className='flex flex-col text-sm'>
                            <label htmlFor="confirm_password" className='font-medium text-slate-600'>Confirm Password</label>

                            <div className='flex flex-col w-full relative'>
                                <Lock className='w-5 h-5 text-slate-400 absolute top-2.5 left-3'/>
                                <input type="text" name="confirm_password" id="confirm_password" className='py-2.5 px-10 border border-slate-300 rounded-md'/>
                            </div>
                        </div>

                    </div>

                    <div className='flex w-full justify-end'>
                        <Btn icon={<Save/>} text='Save Changes'/>

                    </div>


                </div>
            </div>

        </div>

      
    </section>
  )
}

export default Profile
