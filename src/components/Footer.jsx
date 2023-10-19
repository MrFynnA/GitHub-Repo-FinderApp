import React from 'react'


export default function Footer({data}) {

    const dataPresent=data.length>0
  return (
    <div className={`h-[3rem]  bg-slate-800 flex items-center justify-start pl-10 max-md:pl-5 text-white font-bold font-mono uppercase text-sm max-md:text-xl  w-full ${dataPresent ?'relative':'fixed'} !bottom-0 border-rounded z-50 rounded-md`}>
        <div className='flex items-center italic hover:underline cursor-pointer max-md:text-sm capitalize'><div><a href='https://fynnarthur.netlify.app/message'>{'Get in touch with Fynn here'}</a></div></div>
    </div>
  )
}