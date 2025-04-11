import React, { ReactNode } from 'react'

interface PropsBtnPagination {
    icon: ReactNode
}

const BtnPagination:React.FC<PropsBtnPagination> = ({icon}) => {
  return (
    <button className='w-fit h-fit p-2 lg:p-1 bg-teal-500 rounded text-white hover:bg-teal-600 hover:transition duration-300 cursor-pointer'>
        {icon}
    </button>
  )
}

export default BtnPagination
