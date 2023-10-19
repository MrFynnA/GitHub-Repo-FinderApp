import React,{Fragment,useState} from 'react'
import styles from './search.module.css'
import { useForm } from 'react-hook-form'
import { useStore } from './Store/zstore'
import { useEffect } from 'react'
import useHttps from './useHttps'
import { useCallback } from 'react'

const Search=(props)=>{
    // const[userName,setUsername]=useState('')
    const addUserName=useStore(store=>store.addUserName)
    const {register,handleSubmit,watch} =useForm()
    const{fetchData}=props
    // const username=watch('username')
    // const applData=useCallback((data)=>{
    //       console.log(data)
    // },[])
    // const{Request:userNameRequest}=useHttps(applData)
// useEffect(()=>{
//   userNameRequest({url:`https://api.github.com/users/${username}/repos`})
// },[username,userNameRequest])

 return (
<Fragment>
    <div>
    <form onSubmit={handleSubmit((data)=>{
      addUserName(data.username)    
      fetchData()
    })} className={`${styles.Search}  mt-10`}>
 <input {...register('username')} id='username' type='text' className='max-md:w-[55%] max-md:!text-sm max-md:!pl-4 max-md:!py-4 max-md:placeholder:!text-[1rem]' placeholder='Github Username'/>
 <button className='max-md:w-[26%] max-md:text-sm max-md:!px-1 max-md:!py-4'>{props.buttonText}</button>
 </form>
 </div>
 </Fragment>)
}

export default Search