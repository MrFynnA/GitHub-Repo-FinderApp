import React from 'react'
import Githubicon from '../assets/Github-icon'

export default function Header() {
  return (
    <div className='bg-gray-700 h-[5rem] flex items-center justify-start pl-10 max-md:pl-5 text-white font-bold font-mono uppercase text-3xl max-md:text-xl relative top-0 border-rounded z-50 rounded-lg'>
        <div className='flex items-center'><div>GITHUB REPOSITORIES</div><Githubicon/></div>
    </div>
  )
}
