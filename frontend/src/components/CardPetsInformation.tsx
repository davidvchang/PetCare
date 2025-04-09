import React from 'react'
import { PawPrint } from 'lucide-react';
import DataCardPets from './DataCardPets';

const CardPetsInformation:React.FC = () => {
  return (
    <div className='flex flex-col p-5 rounded-md bg-white shadow w-80 gap-5'>

        <div className='flex gap-3 items-center'>
            <div className='flex bg-emerald-100 w-10 min-h-10 rounded-full items-center justify-center'>
                <PawPrint className='text-emerald-600'/>
            </div>

            <span className='text-lg font-semibold'>Rocky</span>
        </div>

        <div className='flex flex-col gap-2 text-sm'>
            <DataCardPets title='Species' text='Dog'/>
            <DataCardPets title='Years' text='1'/>
            <DataCardPets title='Owner' text='David Valenzuela'/>
            <DataCardPets title='Last Visit' text='24/02/2025'/>

            <div className='flex flex-col gap-1 pt-2'>
                <span className='text-slate-500 font-medium'>Medical History: </span>
                <span className='text-black text-sm line-clamp-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam similique incidunt recusandae voluptatum voluptas alias asperiores blanditiis omnis veniam natus, doloremque iste. Quo neque harum minima modi delectus sit architecto.</span>
            </div>
        </div>
      
    </div>
  )
}

export default CardPetsInformation
