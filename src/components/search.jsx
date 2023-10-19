import React,{Fragment,useState} from 'react'
import styles from './search.module.css'
import { useForm } from 'react-hook-form'
import { useStore } from './Store/zstore'

const Search=(props)=>{
    const[userName,setUsername]=useState('')
    const addUserName=useStore(store=>store.addUserName)
    const {register,handleSubmit} =useForm()
    const{fetchData}=props

 return (
<Fragment>
    <div>
    <form onSubmit={handleSubmit((data)=>{
      addUserName(data.username)    
      fetchData()
    })} className={`${styles.Search}  mt-10`}>
 <input {...register('username')} id='username' type='text' className='max-md:w-[55%] max-md:!text-sm max-md:!pl-4 max-md:!py-4 max-md:placeholder:!text-[1rem]' placeholder='Enter Username'/>
 <button className='max-md:w-[26%] max-md:text-sm max-md:!px-1 max-md:!py-4'>{props.buttonText}</button>
 </form>
 </div>
 </Fragment>)
}

export default Search