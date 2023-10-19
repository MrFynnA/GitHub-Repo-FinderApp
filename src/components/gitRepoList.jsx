import React from 'react'
import GitHubRepos from './gitHubUserRepos'
import Header from './Header'

export default function GitRepoList({data}) {
  return (
    <>
    <div className='flex justify-center mt-10 pb-16'>
    <div className='flex w-[100%] justify-center flex-wrap gap-x-10'>
        {data.map(dataItem=><GitHubRepos
                    key={dataItem.id}
                      name={dataItem.name}
                      link={dataItem.html_url}
                
                      />)}
    </div>
    </div>
    </>
  )
}
