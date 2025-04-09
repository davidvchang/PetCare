import React from 'react'

interface PropsDataCard {
    title: string,
    text: string
}

const DataCardPets:React.FC<PropsDataCard> = ({title, text}) => {
  return (
    <div className='flex gap-2 items-center'>
        <span className='text-slate-500 font-medium'>{title}: </span>
        <span className='text-black text-base'>{text}</span>
    </div>
  )
}

export default DataCardPets
