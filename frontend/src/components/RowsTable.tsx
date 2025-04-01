import React, { useState } from 'react'
import { MoreVertical } from 'lucide-react';

interface PropsRowsTable {
    name_pet: string, 
    specie: string, 
    age: number, 
    name_owner: string, 
    email: string, 
    phone: string, 
    medical_history: string
}

const RowsTable:React.FC<PropsRowsTable> = ({name_pet, specie, age, name_owner, email, phone, medical_history}) => {
  
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  
    return (
    <tr>
        <td className='px-6 py-4'>
            <div className="text-sm font-medium text-gray-900">{name_pet}</div>
            <div className="text-sm text-gray-500"> Specie: {specie}</div>
            <div className="text-sm text-gray-500">Age: {age}</div>
        </td>
        <td className='px-6 py-4'>
            <div className="text-sm font-medium text-gray-900">{name_owner}</div>
            <div className="text-sm text-gray-500">{email}</div>
            <div className="text-sm text-gray-500">{phone}</div>
        </td>
        <td className='px-6 py-4 whitespace-normal break-words'>
            <p className='text-sm line-clamp-3'>{medical_history}</p>
        </td>
        <td className='px-6 py-4 h-full relative'>
            <div className="flex items-center justify-end h-full">
                <button className="p-2 rounded-full hover:bg-gray-200 hover:transition duration-300 cursor-pointer" onClick={() => setIsOpenMenu(!isOpenMenu)}><MoreVertical className="w-5 h-5 text-gray-600" /></button>
            </div>

            {isOpenMenu && (
            <div className="absolute right-0 top-14 mt-2 w-32 bg-white border border-gray-200 shadow-lg rounded-md z-10">
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                View
                </button>
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                Edit
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                Delete
                </button>
            </div>
            )}
        </td>
    </tr>
  )
}

export default RowsTable
