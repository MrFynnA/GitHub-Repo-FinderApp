import React,{Fragment} from 'react'
import styles from './gitHubUserRepos.module.css'
import MygitSvg from '../assets/MygitSvg'

const GitHubRepos=(props)=>{
    return(
<Fragment>
    <div className={`${styles.content} flex justify-center max-md:mb-2 flex-col my-[2rem] bg-gray-700 shadow-md w-[36%] max-lg:w-[92%] pb-[2rem] rounded-lg`}>
        <header  className='bg-white rounded-lg flex justify-between px-4 py-4'>
            <div className='flex flex-col gap-3'>
        <h2 className='font-bold text-xl max-lg:text-2xl  max-md:text-lg font-sans'>Name of Repository</h2>
        <h4>{props.name}</h4>
        </div>
        <MygitSvg/>
        </header>
        <div className='flex flex-col px-4 gap-3 mt-2 text-[azure]  font-[Trebuchet_MS] break-words'>
        <h2 className='text-white font-bold text-lg'>Repository</h2>
        <a className={`${styles.contentTitle}`} href={props.link} target='_blank' rel="noreferrer">{props.link}</a>
        </div>
      
    </div>
</Fragment>
    )

}

export default GitHubRepos