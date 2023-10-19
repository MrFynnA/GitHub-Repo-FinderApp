import { create } from "zustand"

const store=(set)=>({
  searchInput:'',
  addUserName:(searchValue)=>{
    // console.log(searchValue)
    set({searchInput:searchValue})
}
    
})



export const useStore=create(store)