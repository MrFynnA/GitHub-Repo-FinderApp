
import React,{useCallback} from "react";
import { useState } from "react";


export default function useHttps(applyData) {

    const[loading,setIsloading]=useState(false)
    const[error,setError]=useState(false)

    const Request=useCallback(async(requestItems,abortSignal)=>{
             
        try{
            setIsloading(true)
            const url=requestItems.url
            const res= await fetch(url,{
                signal:abortSignal,
                method:requestItems.method?requestItems.method:'GET',
                body:requestItems.body?requestItems.body:null,
                headers:requestItems.headers?requestItems.headers:{}
            })

            if(!res.ok){
                throw new Error('couldnt fetch data')
            }
            const data=await res.json()
            console.log(data)
             applyData(data)
             setIsloading(false)
        }catch(error){
            setError(error.message)
            setIsloading(false)
        }
    },[applyData])

  return (
 {
    loading,
    error,
    Request
 }
  )
}
