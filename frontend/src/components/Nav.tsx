import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom';

interface PropsLinks {
    to: string,
    icon?: ReactNode
    text: string
}

const Nav:React.FC<PropsLinks> = ({to, icon, text}) => {
  return (
    <Link to={to} className='flex items-center gap-2 hover:text-slate-200 hover:transition duration-300'>
      {icon}
      {text}
    </Link>
  )
}

export default Nav
