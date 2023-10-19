import React,{useEffect,useState,Fragment} from 'react'
import { useCallback } from 'react'
import classes from './components/gitHubUserRepos.module.css'
import Search from './components/search'
import GitRepoList from './components/gitRepoList'
import Header from './components/Header'
import FallbackMessage from './components/FallbackMessage'
import Footer from './components/Footer'
import { useStore } from './components/Store/zstore'
import MygitSvg from './assets/MygitSvg'
function App() {
const[data,setData]=useState([])
// const[user,setUser]=useState('')
const[loading,setIsloading]=useState(false)
const[error,setError]=useState(false)
const username=useStore(store=>store.searchInput)
// const[userName,setUsername]=useState('mojombo')

// useEffect(()=>{
//     if(username){
//         setUser(username)
//     }
// },[username])
const fetchData=useCallback(()=>{
    if(username){
        setIsloading(true)
        fetch(`https://api.github.com/users/${username}/repos`)
        .then((res)=>{
            if(res.status===404){
                setError('couldnt fetch data')
                return
            }else{

               return res.json()
            }
        
        })
        .then((data)=>{ 
            setData(data)    
           setIsloading(false)
        })
        .catch(err=>{
            setError(err.message)
            setIsloading(false)
        }
        
        )
    }
    
},[username])
// console.log(error)


    useEffect(()=>{
        fetchData()     
    },[fetchData])
    // console.log(error)
              
    let message;

    if(loading){
        message=<div className='flex justify-center mt-20'><MygitSvg className='animate-spin'/></div>
    }
             if((error &&  error==='couldnt fetch data')){
                 message=<FallbackMessage message={'Oops No Repositories Available for this user. Try searching again?'}/>
             }

            if(error && error!=='couldnt fetch data'){
                message=<FallbackMessage message={'Failed to get data, Please check internet connection'}/>
            }

            if(data && data.length>0){
                message=<GitRepoList data={data}/>
            }

            if(data && data.length===0 && username.length===0){
                message=''
            }

       let repoMessage='List Your Github Repositories' 
       if(data && data.length>0){
        repoMessage='Your Github Repositories'
       }
    return (
<Fragment>
    <Header/>
    <Search buttonText='List Repos' fetchData={fetchData}/>
    <div className={`${classes.title} mt-6 italic text-center font-bold text-2xl max-md:text-xl`}>{repoMessage}</div>
{message}
<Footer data={data}/>
      </Fragment>
    );

      }
export default App;