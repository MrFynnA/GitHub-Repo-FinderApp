import React,{Fragment,useState} from 'react'
import styles from './search.module.css'

const Search=(props)=>{
    const[userName,setUsername]=useState('')
   const onUserChange=(event)=>{
    setUsername(event.target.value)
   }
   const onFindRepo=(event)=>{
    event.preventDefault()
       props.getRepo(userName)
       setUsername('')

   }

 return (
<Fragment>
    <div>
    <form onSubmit={onFindRepo} className={`${styles.Search}  mt-10 max-md:mt-14`}>
 <input type='text' className='max-md:w-[55%] max-md:!text-sm max-md:!pl-4 max-md:!py-4 max-md:placeholder:!text-[1rem]' placeholder='Enter Username' value={userName} onChange={onUserChange}/>
 <button className='max-md:w-[25%] max-md:text-sm max-md:!px-0 max-md:!py-4'>{props.buttonText}</button>
 </form>
 </div>
 </Fragment>)
}

export default Search