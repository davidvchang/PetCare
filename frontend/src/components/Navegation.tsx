import React from 'react'
import BtnPagination from './BtnPagination'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PropsNavegation {
    current_page: number,
    page: number,
    total_page: number
}

const Navegation:React.FC<PropsNavegation> = ({current_page, page, total_page}) => {
  return (
    <div className='flex text-sm font-light gap-5 lg:gap-10 items-center justify-center'>
        <span>Current page: <strong>{current_page}</strong></span>

        <div className='flex gap-3 items-center'>
            <BtnPagination icon={<ChevronLeft/>}/>
            <span className=' font-medium'>{page}</span>
            <BtnPagination icon={<ChevronRight/>}/>
        </div>

        <span>Total pages: <strong>{total_page}</strong></span>
    </div>
  )
}

export default Navegation
