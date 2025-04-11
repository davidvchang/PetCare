import React from 'react'
import { X, Save } from 'lucide-react';

interface PropsAddPet {
    onclickCancel: () => void
}

const AddPet:React.FC<PropsAddPet> = ({onclickCancel}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50">
        <div className="bg-white rounded-lg p-8 lg:w-[28rem] shadow-lg relative" style={{width: "calc(100vw - 2rem)"}}>
        

        <h2 className="text-xl font-semibold mb-4 text-center">Add a New Pet</h2>

       
        <form className="flex flex-col gap-4 text-sm">
            <input type="text" name="petName" placeholder="Pet Name" className="border border-slate-300 p-2 rounded" required/>
            <input type="text" name="species" placeholder="Species" className="border border-slate-300 p-2 rounded" required/>
            <input type="number" name="age" placeholder="Age in years" className="border border-slate-300 p-2 rounded" required/>
            <textarea name="medicalHistory" placeholder="Medical History" className="border border-slate-300 p-2 rounded resize-none h-20" required/>
            
            <hr className='text-slate-300'/>

            <h3 className="text-lg font-medium text-center">Owner Information</h3>

            <input type="text" name="ownerName" placeholder="Owner's Name" className="border border-slate-300 p-2 rounded" required/>
            <input type="email" name="ownerEmail" placeholder="Email" className="border border-slate-300 p-2 rounded" required />
            <input type="tel" name="ownerPhone" placeholder="Phone Number" className="border border-slate-300 p-2 rounded" required />

            <div className='flex gap-5 w-full'>
                <button type='button' className='flex items-center gap-2 justify-center w-full border border-slate-300 px-4 py-2 rounded-md hover:bg-slate-100 hover:transition duration-300 cursor-pointer' onClick={onclickCancel}>
                    <X className='w-5 h-5'/>
                    <span>Cancel</span>
                </button>
                <button type="submit" className="flex items-center gap-2 justify-center w-full bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition cursor-pointer">
                    
                    <Save className='w-5 h-5'/>
                    <span>Save Pet</span>
                </button>

            </div>

        </form>
        </div>
    </div>
  )
}

export default AddPet
