import React, { ReactNode } from 'react'
import { LogOut } from 'lucide-react';

interface PropsBtn {
    icon?: ReactNode,
    text: string,
    isLogoutButton?: boolean
}

const Btn:React.FC<PropsBtn> = ({isLogoutButton ,icon, text}) => {
  return isLogoutButton ? (
        <button className='flex w-fit h-fit px-5 py-1.5 gap-1.5 items-center rounded-md text-white bg-red-600 hover:bg-red-700 hover:transition duration-300 cursor-pointer'>
            <LogOut className='w-5 h-5'/>
            {icon}
            <span>{text}</span>
        </button>

    ) : (
        <button className='flex w-fit h-fit px-5 py-2 gap-1.5 items-center rounded-md text-white bg-teal-600 hover:bg-teal-700 hover:transition duration-300 cursor-pointer'>
            {icon}
            <span>{text}</span>
        </button>
    )
}

export default Btn
