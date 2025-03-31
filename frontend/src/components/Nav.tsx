import React from 'react'
import { Link } from 'react-router-dom';

interface PropsLinks {
    to: string,
    text: string
}

const Nav:React.FC<PropsLinks> = ({to, text}) => {
  return (
    <Link to={to} className='hover:text-slate-200 hover:transition duration-300'>{text}</Link>
  )
}

export default Nav
