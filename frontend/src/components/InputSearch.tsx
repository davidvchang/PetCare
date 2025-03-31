import React from 'react'
import { Search } from 'lucide-react';

const InputSearch:React.FC = () => {
  return (
    <div className='relative flex items-center w-fit h-fit'>
        <input type="text" placeholder='Search...' className='pl-10 py-2 border border-slate-300 rounded-md'/>
        <Search className='absolute w-5 h-5 left-3 text-slate-400'/>
    </div>
  )
}

export default InputSearch
