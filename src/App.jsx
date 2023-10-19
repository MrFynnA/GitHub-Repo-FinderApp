import React,{useEffect,useState,Fragment} from 'react'
import GitHubRepos from './components/gitHubUserRepos'
import classes from './components/gitHubUserRepos.module.css'
import Search from './components/search'
import GitRepoList from './components/gitRepoList'
import Header from './components/Header'
import FallbackMessage from './components/FallbackMessage'
import Footer from './components/Footer'
import reactdom from 'react-dom'
function App() {
const[data,setData]=useState([
    {
        id:'1',
        name:"fank",
        html_url:'https/baaaaaaaaaaaaaaaaaaaaaaaaaa'
    },
    {
        id:'1',
        name:"fank",
        html_url:'https/baaaaaaaaaaaaaaaaaaaaaaaaaa'
    },
    {
        id:'1',
        name:"fank",
        html_url:'https/baaaaaaaaaaaaaaaaaaaaaaaaaa'
    },
    {
        id:'1',
        name:"fank",
        html_url:'https/baaaaaaaaaaaaaaaaaaaaaaaaaa'
    },
    {
        id:'1',
        name:"fank",
        html_url:'https/baaaaaaaaaaaaaaaaaaaaaaaaaa'
    },
])
const[userName,setUsername]=useState('mojombo')
const[loading,setIsloading]=useState(false)
const[error,setError]=useState(false)
// const[userName,setUsername]=useState('mojombo')

    useEffect(()=>{
        if(userName){
            setIsloading(true)
            fetch(`https://api.github.com/users/${userName}/repos`)
            .then((res)=>{
                if(res.status===404){
                    setError('couldnt fetch data')
                    return
                }else{

                   return res.json()
                }
            
            })
            .then((data)=>{ 
                // setData(data)    
               setIsloading(false)
            })
            .catch(err=>{
                setError(err.message)
                setIsloading(false)
            }
            
            )
            

        }
  
    },[userName])


    const getRepo=(user)=>{
setUsername(user)
console.log()
    }
            let message=<FallbackMessage message={'Oops No Repositories Available. Try searching again?'}/>

            if(error){
                message=<FallbackMessage message={'Failed to get data, Please check internet connection'}/>
            }

            if(data.length>0){
                message=<GitRepoList data={data}/>
            }
    return (
<Fragment>
    <Header/>
    <Search buttonText='List Repos' getRepo={getRepo}/>
    <h1 className={`${classes.title} mt-4 italic`}>List Your Github Repositories</h1>
{message}
<Footer/>
      </Fragment>
    );

      }
export default App;