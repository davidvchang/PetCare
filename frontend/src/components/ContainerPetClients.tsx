import React from 'react'
import { PawPrint, Calendar } from 'lucide-react'

const ContainerPetClients:React.FC = () => {
  return (
    <div className='flex gap-3 p-5 bg-slate-100 border border-slate-200 rounded-md items-center'>
        <div className='flex bg-emerald-100 w-10 h-10 rounded-full items-center justify-center'>
            <PawPrint className='text-emerald-600'/>
        </div>

        <div className='flex flex-col gap-1'>
            <span className='font-semibold'>Rocky</span>
            <span className='text-sm text-slate-500'>Dog • 2 years</span>
            <div className='flex gap-1 items-center text-slate-500'>
                <Calendar className='w-4 h-4'/>
                <span className='text-sm '>02/24/2025</span>
            </div>
        </div>
    </div>
  )
}

export default ContainerPetClients
